/** Default Audio Channel RegExp definition */
export const EIGHT_CHANNEL_EXP = /\b(7.?[01])\b/i;
export const SIX_CHANNEL_EXP = /\b((6[\W]0(?:ch)?)(?=[^\d]|$)|(5[\W][01](?:ch)?)(?=[^\d]|$)|5ch|6ch)\b/i;
export const STEREO_CHANNEL_EXP = /(((2[\W]0(?:ch)?)(?=[^\d]|$))|(stereo))/i;
export const MONO_CHANNEL_EXP = /((1[\W]0(?:ch)?)(?=[^\\d]|$)|(mono)|(1ch))/i;

/** Default Audio Codec RegExp definition */
export const MP3_CODEC_EXP = /\b((LAME(?:\d)+-?(?:\d)+)|(mp3))\b/i;
export const MP2_CODEC_EXP = /\b((mp2))\b/i;
export const DOLBY_CODEC_EXP = /\b((Dolby)|(Dolby-?Digital)|(DD)|(AC3D?))\b/i;
export const DOLBY_ATMOS_CODEC_EXP = /\b((Dolby-?Atmos))\b/i;
export const AAC_CODEC_EXP = /\b((AAC))(\d?.?\d?)(ch)?\b/i;
export const EAC3_CODEC_EXP = /\b((EAC3|DDP|DD\+))\b/i;
export const FLAC_CODEC_EXP = /\b((FLAC))\b/i;
export const DTS_CODEC_EXP = /\b((DTS))\b/i;
export const DTS_HD_CODEC_EXP = /\b((DTS-?HD)|(DTS(?=-?MA)|(DTS-X)))\b/i;
export const TRUEHD_CODEC_EXP = /\b((True-?HD))\b/i;
export const OPUS_CODEC_EXP = /\b((Opus))\b/i;
export const VORBIS_CODEC_EXP = /\b((Vorbis))\b/i;
export const PCM_CODEC_EXP = /\b((PCM))\b/i;
export const LPCM_CODEC_EXP = /\b((LPCM))\b/i;

/** Associate each RegExp with a value */
export const AUDIO_CHANNELS_EXPS = {
  '7.1': EIGHT_CHANNEL_EXP,
  '5.1': SIX_CHANNEL_EXP,
  'stereo': STEREO_CHANNEL_EXP,
  'mono': MONO_CHANNEL_EXP
};

/** Utility type */
export type AudioChannel = keyof typeof AUDIO_CHANNELS_EXPS;

/** Associate each RegExp with a value */
export const AUDIO_CODECS_EXPS = {
  'mp3': MP3_CODEC_EXP,
  'mp2': MP2_CODEC_EXP,
  'dolby digital': DOLBY_CODEC_EXP,
  'dolby atmos': DOLBY_ATMOS_CODEC_EXP,
  'aac': AAC_CODEC_EXP,
  'dolby digital plus': EAC3_CODEC_EXP,
  'flac': FLAC_CODEC_EXP,
  'dts': DTS_CODEC_EXP,
  'dts-hd': DTS_HD_CODEC_EXP,
  'dolby trueHD': TRUEHD_CODEC_EXP,
  'opus': OPUS_CODEC_EXP,
  'vorbis': VORBIS_CODEC_EXP,
  'pcm': PCM_CODEC_EXP,
  'lpcm': LPCM_CODEC_EXP
};

/** Utility type */
export type AudioCodec = keyof typeof AUDIO_CODECS_EXPS;
