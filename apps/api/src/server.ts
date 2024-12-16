/** Dependencies */
import express from 'express';

/** Middlewares */
import compression from 'compression';
import cors from 'cors';
import bodyParser from 'body-parser';

/** Routers */
import router from './routes';

/** Create the express application */
const app = express();

/** Apply middlewares to the application */
app.use(cors({ origin: '*' }));
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Use the main routers */
app.use('/', router);

/**
 * Start the HTTP server on the defined port
 * @returns A new promise
 */
export const listen = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      const listenner = app.listen(45455, () => {
        console.log('HTTP Server is listening on:', listenner.address());
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
};
