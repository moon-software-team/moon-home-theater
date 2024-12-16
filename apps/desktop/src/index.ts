/** Dependencies */
import { app, BrowserWindow, ipcMain } from 'electron';
import { productName } from '../package.json';
import { awaitForServer } from '@moon/api';

/** Create the server */
awaitForServer();

/** If the electron squirrel startup is required,quit */
if (require('electron-squirrel-startup')) {
  app.quit();
}

/** Get Webpack entry point */
declare const MOON_WEBPACK_ENTRY: string;
declare const MOON_PRELOAD_WEBPACK_ENTRY: string;

/** Utility function to create a window */
const createWindow = () => {
  const window = new BrowserWindow({
    /** Default design size (1dp=1px) */
    width: 960,
    height: 540,
    title: productName,
    webPreferences: {
      preload: MOON_PRELOAD_WEBPACK_ENTRY,
      nodeIntegration: true,
      contextIsolation: false
    },
    /** By default, the window is hidded to ensure that the content is ready */
    show: false
  });

  /** Load the webpack entry in the window */
  window.loadURL(MOON_WEBPACK_ENTRY);

  /** Set the title of the windows */
  ipcMain.on('set-title', (event, title: string) => {
    const webContents = event.sender;
    const win = BrowserWindow.fromWebContents(webContents);
    win?.setTitle(title);
  });

  /** Add an event for window's ready */
  window.on('ready-to-show', () => window.show());
};

/** Listen for app ready to use */
app.on('ready', () => {
  createWindow();
});

/** On macOs, it's common for applications to stay open until the user quits explicitly */
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

/** Prevent non opening windows on activation */
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
