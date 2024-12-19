/** Dependencies */
import path from 'path';
import { FFMpegPath } from './config';
import { FFMpegCodecCapability, FFMpegCodecType } from './types';
import { spawn } from 'child_process';

/** Utility type for function options */
interface TranscodecCodecCapabilitiesOptions {
  codecType?: FFMpegCodecType | FFMpegCodecType[];
  supportsDecoding?: boolean;
  supportsEncoding?: boolean;
  intraFrameOnly?: boolean;
  lossyCompression?: boolean;
  losslessCompression?: boolean;
}

/**
 * Get the transcoder codec capabilities
 * @param options The options to filter specific codecs
 * @return The capabilities of the transcoder
 */
export const getTranscoderCodecCapabilities = (
  options?: TranscodecCodecCapabilitiesOptions
): Promise<FFMpegCodecCapability[]> => {
  return new Promise((resolve, reject) => {
    /** Create the ffmpeg child process */
    const child = spawn('ffmpeg', ['-v', 'quiet', '-codecs'], { cwd: path.dirname(FFMpegPath) });

    /** Prepare a buffer for the ffmpeg data */
    let dataBuffer = '';

    /** On each chunk of data, append the data to the buffer */
    child.stdout.on('data', (chunk) => (dataBuffer += chunk));

    /** On error of the child, reject */
    child.stderr.on('data', (error) => reject(error));

    /** Wait for the end of the child process */
    child.on('exit', (code) => {
      if (code === 0) {
        /** Prepare the response for the promise */
        let result: FFMpegCodecCapability[] = [];

        /** Remove the header and split each line after */
        const rawCodecs = dataBuffer.split('-------')[1].split('\n');

        /** Loop for each codec line */
        for (const rawCodec of rawCodecs) {
          /** Try splitting the line by using a Regular Expression */
          const match = rawCodec.match(/(?<capability>\S+)\s+(?<name>\S+)\s+(?<longName>.*)/);

          /** If the regular expression failed, continue */
          if (!match) continue;

          /** Get the groups from the match */
          const { capability, name, longName } = match.groups as {
            capability: string;
            name: string;
            longName: string;
          };

          /** Push the codec capability inside the result */
          result.push({
            name,
            longName,
            codecType: {
              V: 'video',
              A: 'audio',
              S: 'subtitle',
              D: 'data',
              T: 'attachment'
            }[capability[2]] as FFMpegCodecType,
            supportsDecoding: capability[0] === 'D',
            supportsEncoding: capability[1] === 'E',
            intraFrameOnly: capability[3] === 'I',
            lossyCompression: capability[4] === 'L',
            losslessCompression: capability[5] === 'S'
          });
        }

        /** Check for the codec type filtering */
        if (options && options.codecType) {
          /** Filter the results by codec type */
          result = result.filter((codec) =>
            typeof options.codecType === 'object'
              ? options.codecType.includes(codec.codecType)
              : codec.codecType === options.codecType
          );
        }

        /** Check for the other filtering */
        if (options) {
          /** Loops through each filters */
          for (const filter of Object.keys(options) as Array<
            keyof TranscodecCodecCapabilitiesOptions
          >) {
            /** Skip the codecType options */
            if (filter === 'codecType') continue;

            /** Filter the result */
            result = result.filter((codec) => codec[filter] === options[filter]);
          }
        }

        /** Resolve the promise */
        resolve(result);
      } else {
        reject(`ffprobe child process exited with code ${code}`);
      }
    });
  });
};
