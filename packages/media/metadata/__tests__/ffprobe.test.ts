/** Dependencies */
import { getMediaMetdata } from '../src';
import path from 'path';

/** Create a new tests for the function */
describe('getMediaMetadata', () => {
  /** With an unknown file */
  it("shouldn't find the wanted file", async () => {
    getMediaMetdata('filenotexisting.mkv')
      .catch((reason) => {
        expect(reason).toBe("file 'filenotexisting.mkv' doesn't exists");
      })
      .then((data) => expect(data).not.toBeDefined);
  });

  /** With a known file */
  it('should find the file and returns some metadata', async () => {
    const promise = getMediaMetdata('__tests__/resources/test.mkv')
      .then((data) => {
        expect(data.streams?.length).toBe(2);
        expect(data.streams?.at(0)?.codec_name).toBe('h264');
        expect(data.streams?.at(1)?.codec_name).toBe('aac');
        expect(data.chapters?.length).toBe(0);
        expect(data.format?.format_name).toBe('matroska,webm');
      })
      .catch((reason) => expect(reason).not.toBeDefined());

    await promise;
  });
});
