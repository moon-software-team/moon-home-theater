/** Export the list of event used by the transcoder */
export type TranscoderEventList = {
  start: void;
  ready: void;
  error: string;
  exit: number;
  progress: number;
};
