/** Dependencies */
import type { AudioChannel, AudioCodec } from './audio';
import type { VideoCodec, VideoResolution } from './video';

export type FilenameParseOptions = {};

/** Parsing result of the filename */
export type FilenameParseResult = {
  /**
   * The title of the movie/tv show
   * @example 'Your Name.'
   */
  title: string;
  /**
   * The release year
   * @example 2012
   */
  year?: number;
  /**
   * The video resolution
   * @example '1080p'
   */
  resolution?: VideoResolution;
  /**
   * The audio layout channels
   * @example '7.1'
   */
  channels?: AudioChannel;
  /**
   * The video codec name
   * @example 'x264'
   */
  videoCodec?: VideoCodec;
  /**
   * The audio codec name
   * @example 'aac'
   */
  audioCodec?: AudioCodec;
  /**
   * Is the movie/tv show multi-language
   */
  isMulti?: boolean;
  /**
   * Is the movie/tv show complete
   */
  isComplete?: boolean;
};
