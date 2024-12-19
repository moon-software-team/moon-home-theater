/** Dependencies */
import { FFMpegPath } from './config';
import {} from './types';
import { EventBus } from '@moon/types';
import { TranscoderEventList } from './transcoder-events';
import { FFProbeResult, getMediaMetdata } from '@moon/metadata';
import { randomBytes } from 'node:crypto';

/** Transcoder class to create a transcoder an manipulate a stream */
export class Transcoder extends EventBus<TranscoderEventList> {
  public sessionId: string = randomBytes(16).toString('base64');
  public isPublic: boolean = false;
  public isValid: boolean = true;
  public isReady: boolean = false;
  private metadata: FFProbeResult;

  /**
   * Transcoder constructor
   * @param filepath The path to the file to start a transcode session
   * @param options The transcoder options
   */
  public constructor(filepath: string) {
    /** Super the EventBus class */
    super();

    /** Try getting the file metadata */
    getMediaMetdata(filepath)
      .then((metadata) => {
        /** Save the metadata */
        this.metadata = metadata
        /** Emit a ready state */
        this.emit('ready');
        /** Set the is ready to true */
        this.isReady = true;
      })
      .catch((error) => {
        /** Emit an error on the event listener */
        this.emit('error', error as string);
        /** Set the transcoder to not valid */
        this.isValid = false;
      });
  }
}
