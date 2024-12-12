/** Default Video Resolution RegExp definition */
export const RESOLUTION_2160P_EXP = /(2160p|4k[-_. ](?:UHD|HEVC|BD)|(?:UHD|HEVC|BD)[-_. ]4k|\b(4k)\b|COMPLETE.UHD|UHD.COMPLETE)/i;
export const RESOLUTION_1080P_EXP = /(1080(i|p)|1920x1080)(10bit)?/i;
export const RESOLUTION_720P_EXP = /(720(i|p)|1280x720|960p)(10bit)?/i;
export const RESOLUTION_576P_EXP = /(576(i|p))/i;
export const RESOLTUION_540P_EXP = /(540(i|p))/i;
export const RESOLUTION_480P_EXP = /(480(i|p)|640x480|848x480)/i;

/** Default Video Codec RegExp definition */
export const H264_CODEC_EXP = /(h264)/i;
export const H265_CODEC_EXP = /(h265)/i;
export const X265_CODEC_EXP = /(x265)/i;
export const HEVC_CODEC_EXP = /(HEVC)/i;
export const X264_CODEC_EXP = /(x264)/i;
export const XVIDHD_CODEC_EXP = /(XvidHD)/i;
export const XVID_CODEC_EXP = /(X-?vid)/i;
export const DIVX_CODEC_EXP = /(divx)/i;
export const WMV_CODEC_EXP = /(WMV)/i;
export const DVDR_CODEC_EXP = /\b(DVD-R|DVDR)\b/i;

/** Associate each RegExp with a value */
export const VIDEO_RESOLUTIONS_EXPS = {
  '2160p': RESOLUTION_2160P_EXP,
  '1080p': RESOLUTION_1080P_EXP,
  '720p': RESOLUTION_720P_EXP,
  '576p': RESOLUTION_576P_EXP,
  '540p': RESOLTUION_540P_EXP,
  '480p': RESOLUTION_480P_EXP
};

/** Utility type */
export type VideoResolution = keyof typeof VIDEO_RESOLUTIONS_EXPS;

/** Associate each RegExp with a value */
export const VIDEO_CODECS_EXPS = {
  'h264': H264_CODEC_EXP,
  'h265': H265_CODEC_EXP,
  'x264': X264_CODEC_EXP,
  'x265': X265_CODEC_EXP,
  'hevc': HEVC_CODEC_EXP,
  'xvidhd': XVIDHD_CODEC_EXP,
  'xvid': XVID_CODEC_EXP,
  'divx': DIVX_CODEC_EXP,
  'wmv': WMV_CODEC_EXP,
  'dvdr': DVDR_CODEC_EXP
};

/** Utility type */
export type VideoCodec = keyof typeof VIDEO_CODECS_EXPS;
