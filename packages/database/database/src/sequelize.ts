/** Dependencies */
import { Sequelize } from 'sequelize-typescript';
import { SyncOptions } from 'sequelize';
import { join } from 'path';
import { mkdirSync } from 'fs';
import sqlite3 from 'sqlite3';
import { MOON_BASE_PATH } from '@moon/constants';

/** Import models */
import { Account } from './models';

/** Constant for the moon database location */
export const DATABASE_LOCATION = join(MOON_BASE_PATH, 'Databases');

/** Build the database */
export const database = new Sequelize({
  dialect: 'sqlite',
  database: 'moon.library',
  logging: false,
  dialectModule: sqlite3,
  storage: join(DATABASE_LOCATION, 'moon.library.db'),
  models: [Account]
});

/**
 * Utility function to synchronise the database
 * @param options The synchronisation otpions for sequelize
 */
export const synchronise = (options?: SyncOptions): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      /** Verify the database folder path */
      console.log('Verifying the database location path');
      mkdirSync(DATABASE_LOCATION, { recursive: true });
      console.log('Database path verified');
    } catch (error) {
      /** Catch any potential error when creating the folders */
      reject(error);
    }

    /** Synchronise the database */
    console.log('Beginning the database synchronisation');
    database
      .sync(options) /** Apply the options */
      .then(() => {
        /** If the database is synched */
        resolve();
        console.log('Database synched');
      })
      .catch(reject); /** Otherwise reject */
  });
};
