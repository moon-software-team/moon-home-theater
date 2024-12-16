/** Dependencies */
import { synchronise } from '@moon/database';
import { listen } from './server';

/**
 * Utility function to await for the server and the database to be started
 * @returns New promise when both component are started
 */
export const awaitForServer = (): Promise<void> => {
  /** Return a new promise */
  return new Promise(async (resolve, reject) => {
    try {
      /** Synchronise the database */
      await synchronise();
      /** Open the server */
      console.log('Opening the server');
      await listen();
      /** Resolve the promise */
      resolve();
    } catch (error) {
      /** Otherwise, reject with an error */
      reject(error);
    }
  });
};
