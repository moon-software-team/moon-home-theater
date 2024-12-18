/** Helper to define resourcesPath into the NodeJS process */
declare global {
  namespace NodeJS {
    interface Process {
      resourcesPath?: string | undefined;
    }
  }
}

/** Try getting the path to ffprobe */
export const FFProbePath = process.env.FFPROBE_PATH || process.resourcesPath || 'bin/ffprobe.exe';
