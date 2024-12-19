/** Helper to define resourcesPath into the NodeJS process */
declare global {
  namespace NodeJS {
    interface Process {
      resourcesPath?: string | undefined;
    }
  }
}

/** Try getting the path to ffmpeg */
export const FFMpegPath = process.env.FFMPEG_PATH || process.resourcesPath || 'bin/ffmpeg.exe';
