/** Forward export types */
export type {
  FFProbeChapter,
  FFProbeFormat,
  FFProbeResult,
  FFProbeStream,
  FFProbeLibraryVersion,
  FFProbeProgramVersion,
  FFProbeOptions
} from './types';

/** Export the configurated path */
export { FFProbePath } from './config';

/** Export the main package function */
export { getMediaMetdata } from './ffprobe';
