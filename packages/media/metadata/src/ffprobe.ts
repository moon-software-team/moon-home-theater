/** Dependencies */
import { spawn } from 'child_process';
import { FFProbeResult, FFProbeOptions } from './types';
import { FFProbePath } from './config';
import path from 'path';
import { existsSync } from 'fs';

/**
 * Get metadata of a media file using ffprobe
 * @param filepath The path to the file to get metadata from
 * @param options The options to pass to ffprobe
 * @returns The metadata of the file
 */
export const getMediaMetdata = (
  filepath: string,
  options: FFProbeOptions = {}
): Promise<FFProbeResult> => {
  return new Promise((resolve, reject) => {
    /** Normalize and  resolve the filepath */
    const resolved = path.resolve(path.normalize(filepath));

    /** Check if the filepath exists */
    if (!existsSync(resolved)) {
      return reject(`file '${filepath}' doesn't exists`);
    }

    /** Split and set the default options */
    const {
      showStreams = true,
      showFormat = true,
      showChapters = true,
      showVersions = false,
      showLibraryVersions = false,
      showProgramVersion = false
    } = options;

    /** Define default arguments for ffprobe */
    let args = ['-v', 'quiet', '-print_format', 'json'];

    /** Add new args base on the options */
    if (showStreams) args.push('-show_streams');
    if (showFormat) args.push('-show_format');
    if (showChapters) args.push('-show_chapters');
    if (showVersions) args.push('-show_versions');
    if (showLibraryVersions) args.push('-show_library_versions');
    if (showProgramVersion) args.push('-show_program_version');

    /** Push the resolved filepath to the arguments */
    args.push(resolved);

    /** Create the child process with ffprobe */
    const child = spawn('ffprobe', args, { cwd: path.dirname(FFProbePath) });

    /** Prepare a buffer for the ffprobe data */
    let dataBuffer = '';

    /** On each chunk of data, append the data to the buffer */
    child.stdout.on('data', (chunk) => (dataBuffer += chunk));

    /** On error of the child, reject */
    child.stderr.on('data', (error) => reject(error));

    /** Wait for the end of the child process */
    child.on('exit', (code) => {
      if (code === 0) {
        try {
          resolve(JSON.parse(dataBuffer) as FFProbeResult);
        } catch (error) {
          reject(`failed to parse json: '${error}'`);
        }
      } else {
        reject(`ffprobe child process exited with code ${code}`);
      }
    });
  });
};
