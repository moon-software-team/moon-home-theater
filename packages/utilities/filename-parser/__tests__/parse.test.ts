/** Dependencies */
import { filenameParse } from '../src/parse';

/** Test for the filename parse function */
describe('filenameParse', () => {
  it('CORRECT: Title + Year + Provider + Extension', () => {
    /** Parse the movie filename */
    const parsed = filenameParse('Your Name. (2012) {tmdb-58899}.mkv');

    /** Test the movie parsed information */
    expect(parsed.title).toEqual('Your Name');
    expect(parsed.year).toEqual(2012);
    expect(parsed.providers?.length).toEqual(1);
    expect(parsed.providers?.at(0)?.source).toEqual('tmdb');
    expect(parsed.providers?.at(0)?.id).toEqual('58899');
    // TODO - Add extension checking
  });

  it('CORRECT: Title + Year + Languages + Resolution + Codec + Channels + Extension', () => {
    /** Parse the movie filename */
    const parsed = filenameParse('Your Name. (2012) h264 1080p 7.1 aac FRENCH.ENGLISH.mkv');

    /** Test the movie information */
    expect(parsed.channels).toEqual('7.1');
    expect(parsed.title).toEqual('Your Name');
    expect(parsed.year).toEqual(2012);
    expect(parsed.videoCodec).toEqual('h264');
    expect(parsed.resolution).toEqual('1080p');
    expect(parsed.audioCodec).toEqual('aac');
    expect(parsed.languages?.length).toEqual(2);
    expect(parsed.languages).toContain('french');
    expect(parsed.languages).toContain('english');
    // TODO - Add extension checking
  });

  // TODO - Add Test for edition
  // TODO - Add Test for source
  // TODO - Add Test for complexe cases
  // TODO - Add Multi tests
});
