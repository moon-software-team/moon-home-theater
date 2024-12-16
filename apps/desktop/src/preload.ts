/** Dependencies */
import { ipcRenderer, contextBridge } from 'electron';

/** Declare the MoonApi type */
export interface MoonApi {
  setTitle: (title: string) => void;
}

/** Expose the Api */
contextBridge.exposeInMainWorld('moon', {
  setTitle: (title: string) => ipcRenderer.send('set-title', title)
} as MoonApi);

/** Utility to declare inside the Window (e.g: window.moon.setTitle) */
declare global {
  interface Window {
    moon: MoonApi;
  }
}
