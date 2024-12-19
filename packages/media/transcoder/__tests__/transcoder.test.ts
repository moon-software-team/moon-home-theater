/** Dependencies */
import path from 'path';
import { Transcoder } from '../src/transcoder';

/** Tests for the transcoder */
describe('Transcoder', () => {
  it('should get the metadata', async () => {
    /** Create a new transcoder session base and check for error */
    const session = new Transcoder('__tests__/resources/test.mkv');

    /** Prepare callback function */
    const errorFn = jest.fn();
    const readyFn = jest.fn();

    /** Check for the error and ready events */
    session.on('error', errorFn);
    session.on('ready', readyFn);

    /** Create a promise that resolves when either event is emitted */
    const promise = new Promise((resolve) => {
      session.on('ready', resolve);
      session.on('error', resolve);
    });

    /** Wait for either the error or ready event */
    await promise;

    /** Check the callbacks */
    expect(errorFn).not.toHaveBeenCalled();
    expect(readyFn).toHaveBeenCalled();
  });
});
