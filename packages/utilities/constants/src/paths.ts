/** Dependencies */
import { join } from 'path';

/** Get the appdata path */
export const LOCALAPPDATA =
  process.env.LOCALAPPDATA ||
  (process.platform === 'darwin'
    ? process.env.HOME + '/Library/Preferences'
    : process.env.HOME + '/.local/share');

/** Export the Moon Home Theater main appdata path */
export const MOON_BASE_PATH = join(LOCALAPPDATA, 'Moon Home Theater');
