/** Dependencies */
import { filterEmpty, matchManyExpressions, matchOneExpressions, removeDoublon } from './utils';
import { parseTitleAndYear } from './title';
import type { FilenameParseOptions, FilenameParseResult } from './types';

/** Import regular expressions */
import { AUDIO_CHANNELS_EXPS, AUDIO_CODECS_EXPS } from './audio';
import { VIDEO_CODECS_EXPS, VIDEO_RESOLUTIONS_EXPS } from './video';
import { PROVIDERS_EXPS, groupToProvider } from './provider';
import { LANGUAGES_EXPS } from './language';
// EDITION_EXPS
// COMPLETE_EXP

/**
 * Parse information such as year and title from a filename
 * @param filename The filename to parse (e.g: 'Your Name. (2012) 1080p {tmdb-885406}')
 * @param options The function options
 * @returns The parsing results
 */
export const filenameParse = (filename: string, options?: FilenameParseOptions): FilenameParseResult => {
  /** Parse the title and year of the filename */
  const parsed = parseTitleAndYear(filename);
  /** Remove the title from the filename to get a clean version of the filename */
  const withoutTitle = filename.replace(/\./g, ' ').replace(parsed.title, '').toLowerCase();

  /** Get the languages of the filename */
  const languagesMatches = matchManyExpressions(withoutTitle, LANGUAGES_EXPS)?.map((result) => result.value);

  /** Parse every possible values and remove the empty ones */
  return filterEmpty({
    audioCodec: matchOneExpressions(filename, AUDIO_CODECS_EXPS)?.value,
    channels: matchOneExpressions(filename, AUDIO_CHANNELS_EXPS)?.value,
    resolution: matchOneExpressions(filename, VIDEO_RESOLUTIONS_EXPS)?.value,
    videoCodec: matchOneExpressions(filename, VIDEO_CODECS_EXPS)?.value,
    providers: matchManyExpressions(filename, PROVIDERS_EXPS)?.map((result) => groupToProvider(result.groups as { [key: string]: string })),
    title: parsed.title,
    year: parsed.year,
    languages: languagesMatches ? removeDoublon(languagesMatches) : undefined
  }) as FilenameParseResult;
};
