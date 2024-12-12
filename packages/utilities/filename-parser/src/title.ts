/** Dependencies */
import { matchOneExpressions } from './utils';
import { VIDEO_CODECS_EXPS, VIDEO_RESOLUTIONS_EXPS } from './video';
import { LANGUAGES_EXPS } from './language';
import { AUDIO_CHANNELS_EXPS, AUDIO_CODECS_EXPS } from './audio';

/** Define default title utilities RegExp */
export const CLEAN_TORRENT_PREFIX_EXP = /^\[(?:REQ)\]/i;
export const CLEAN_TORRENT_SUFFIX_EXP = /\[(?:ettv|rartv|rarbg|cttv)\]$/i;
export const COMMON_SOURCES_EXP = /\b(Bluray|(dvdr?|BD)rip|HDTV|HDRip|TS|R5|CAM|SCR|(WEB|DVD)?.?SCREENER|DiVX|xvid|web-?dl)\b/i;
export const EDITION_EXP = /\b((Extended.|Ultimate.)?(Director.?s|Collector.?s|Theatrical|Anniversary|The.Uncut|DC|Ultimate|Final(?=(.(Cut|Edition|Version)))|Extended|Special|Despecialized|unrated|\d{2,3}(th)?.Anniversary)(.(Cut|Edition|Version))?(.(Extended|Uncensored|Remastered|Unrated|Uncut|IMAX|Fan.?Edit))?|((Uncensored|Remastered|Unrated|Uncut|IMAX|Fan.?Edit|Edition|Restored|((2|3|4)in1)))){1,3}/i;
export const LANGUAGE_EXP = /\b(TRUE.?FRENCH|videomann|SUBFRENCH|PLDUB|MULTI)/i;
export const REQUEST_INFO_EXP = /\[.+?\]/i;
export const SCENE_GARBAGE_EXP = /\b(PROPER|REAL|READ.NFO)/;
export const SIMPLE_TITLE_EXP = /\s*(?:480[ip]|576[ip]|720[ip]|1080[ip]|2160[ip]|HVEC|[xh][\W_]?26[45]|DD\W?5\W1|[<>?*:|]|848x480|1280x720|1920x1080)((8|10)b(it))?/i;
export const WEBDL_EXP = /\b(WEB[-_. ]DL|HDRIP|WEBDL|WEB-DLMux|NF|APTV|NETFLIX|NetflixU?HD|DSNY|DSNP|HMAX|AMZN|AmazonHD|iTunesHD|MaxdomeHD|WebHD|WEB$|[. ]WEB[. ](?:[xh]26[45]|DD5[. ]1)|\d+0p[. ]WEB[. ]|\b\s\/\sWEB\s\/\s\b|AMZN[. ]WEB[. ])\b/i;
export const WEBSITE_PREFIX_EXP = /^\[\s*[a-z]+(\.[a-z]+)+\s*\][- ]*|^www\.[a-z]+\.(?:com|net)[ -]*/i;

/** Common RegExp rules for the title and year layout */
export const MOVIE_TITLE_YEAR_EXPS = [
  /^(?<title>(?![([]).+?)?(?:(?:[-_\W](?<![)[!]))*\(?\b(?<edition>(((Extended.|Ultimate.)?(Director.?s|Collector.?s|Theatrical|Anniversary|The.Uncut|Ultimate|Final(?=(.(Cut|Edition|Version)))|Extended|Rogue|Special|Despecialized|\d{2,3}(th)?.Anniversary)(.(Cut|Edition|Version))?(.(Extended|Uncensored|Remastered|Unrated|Uncut|IMAX|Fan.?Edit))?|((Uncensored|Remastered|Unrated|Uncut|IMAX|Fan.?Edit|Edition|Restored|((2|3|4)in1))))))\b\)?.{1,3}(?<year>(1(8|9)|20)\d{2}(?!p|i|\d+|\]|\W\d+)))+(\W+|_|$)(?!\\)/i,
  /^(?<title>(?![([]).+?)?(?:(?:[-_\W](?<![)[!]))*\((?<year>(1(8|9)|20)\d{2}(?!p|i|(1(8|9)|20)\d{2}|\]|\W(1(8|9)|20)\d{2})))+/i,
  /^(?<title>(?![([]).+?)?(?:(?:[-_\W](?<![)[!]))*(?<year>(1(8|9)|20)\d{2}(?!p|i|(1(8|9)|20)\d{2}|\]|\W(1(8|9)|20)\d{2})))+(\W+|_|$)(?!\\)/i,
  /^(?<title>.+?)?(?:(?:[-_\W](?<![()[!]))*(?<year>(\[\w *\])))+(\W+|_|$)(?!\\)/i,
  /^(?<title>(?![([]).+?)?(?:(?:[-_\W](?<![)!]))*(?<year>(1(8|9)|20)\d{2}(?!p|i|\d+|\W\d+)))+(\W+|_|$)(?!\\)/i,
  /^(?<title>.+?)?(?:(?:[-_\W](?<![)[!]))*(?<year>(1(8|9)|20)\d{2}(?!p|i|\d+|\]|\W\d+)))+(\W+|_|$)(?!\\)/i
];

/**
 * Simplify the title by removing regexp
 * @param title The title to simplify
 * @returns The simplify title
 */
export const simplifyTitle = (title: string): string => {
  /** Replace basic information from the title */
  let simplified = title
    .replace(SIMPLE_TITLE_EXP, '')
    .replace(WEBSITE_PREFIX_EXP, '')
    .replace(CLEAN_TORRENT_PREFIX_EXP, '')
    .replace(CLEAN_TORRENT_SUFFIX_EXP, '')
    .replace(new RegExp(COMMON_SOURCES_EXP, 'ig'), '')
    .replace(WEBDL_EXP, '');

  /** Replace the video codec */
  const videoMatch = matchOneExpressions(simplified, VIDEO_CODECS_EXPS);
  if (videoMatch) {
    simplified = simplified.replace(videoMatch.source, '');
  }

  /** replace the audio codec */
  const audioMatch = matchOneExpressions(simplified, AUDIO_CODECS_EXPS);
  if (audioMatch) {
    simplified = simplified.replace(audioMatch.source, '');
  }

  /** Return the simplified trimmed title */
  return simplified.trim();
};

/**
 * Clean the release title
 * @param title The title to be cleaned
 * @returns The cleaned title
 */
export const releaseTitleCleaner = (title: string): string | null => {
  /** Check if the title is a valid string */
  if (!title || title.length === 0 || title === '(') {
    return null;
  }

  /** Apply some replacement on the title */
  let trimmed = title
    .replace('_', '')
    .replace(REQUEST_INFO_EXP, '')
    .trim()
    .replace(new RegExp(COMMON_SOURCES_EXP, 'ig'), '')
    .trim()
    .replace(WEBDL_EXP, '')
    .trim()
    .replace(EDITION_EXP, '')
    .trim()
    .replace(LANGUAGE_EXP, '')
    .trim()
    .replace(new RegExp(SCENE_GARBAGE_EXP, 'ig'), '')
    .trim();

  /** Remove every possible language reference */
  for (const lang of Object.keys(LANGUAGES_EXPS)) {
    trimmed = trimmed.replace(new RegExp(`\\b${lang.toUpperCase()}`), '').trim();
  }

  /** Remove spaces or dotting */
  trimmed = trimmed.split('  ')[0].split('..')[0];
  const parts = trimmed.split('.');

  /** Prepare variables for the cleaning */
  let result = '';
  let n = 0;
  let previousAcronym = false;
  let nextPart = '';

  /** Clean and normalize the result title */
  for (const part of parts) {
    if (parts.length >= n + 2) {
      nextPart = parts[n + 1] ?? '';
    }
    if (part.length === 1 && part.toLowerCase() !== 'a' && Number.isNaN(parseInt(part, 10))) {
      result += part + '.';
      previousAcronym = true;
    } else if (part.toLowerCase() === 'a' && (previousAcronym || nextPart.length === 1)) {
      result += parseTitleAndYear + '.';
      previousAcronym = true;
    } else {
      if (previousAcronym) {
        result += ' ';
        previousAcronym = false;
      }
      result += part + ' ';
    }
    n++;
  }

  /** Return the cleaned title */
  return result.trim();
};

/**
 * Parse title and year from a filename
 * @param title The title to be parsed
 */
export const parseTitleAndYear = (title: string): { title: string; year?: number } => {
  /** Simplify the title */
  const simplified = simplifyTitle(title).replace(/-([a-z0-9]+)$/i, '');

  /** Loop through each expression to find the title/year */
  for (const expression of MOVIE_TITLE_YEAR_EXPS) {
    /** Execute the regular expression */
    const match = expression.exec(simplified);

    /** If there's a match, continue */
    if (match?.groups) {
      /** Try clean the release title */
      const result = releaseTitleCleaner(match.groups['title'] ?? '');

      /** If the cleaning failed, continue */
      if (result === null) {
        continue;
      }

      /** Get the year on the RegExp match */
      const year = match.groups['year'] ? parseInt(match.groups['year']) : undefined;

      /** Return the cleaned title and year */
      return { title: result, year };
    }
  }

  /** Try to find the resolution, codecs or channels from the title */
  const resolution = matchOneExpressions(title, VIDEO_RESOLUTIONS_EXPS);
  const videoCodec = matchOneExpressions(title, VIDEO_CODECS_EXPS);
  const channels = matchOneExpressions(title, AUDIO_CHANNELS_EXPS);
  const audioCodec = matchOneExpressions(title, AUDIO_CODECS_EXPS);

  /** Combine the positions */
  const positions = [
    resolution ? title.indexOf(resolution.source) : -1,
    videoCodec ? title.indexOf(videoCodec.source) : -1,
    channels ? title.indexOf(channels.source) : -1,
    audioCodec ? title.indexOf(audioCodec.source) : -1
  ].filter((x) => x > 0);

  /** If one positions matches, slice the positions */
  if (positions.length) {
    const first = Math.min(...positions);
    return { title: releaseTitleCleaner(title.slice(0, first)) ?? '' };
  }

  /** return the title */
  return { title: title.trim() };
};
