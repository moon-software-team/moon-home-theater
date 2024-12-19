/** Dependencies */
import { getTranscoderCodecCapabilities } from '../src/capabilities';

/** Create tests for the server capabilities */
describe('getTranscoderCodecCapabilities', () => {
  it('should return a list of codecs', async () => {
    const promise = getTranscoderCodecCapabilities()
      .then((codecs) => expect(codecs.length).toBeGreaterThan(0))
      .catch((error) => expect(error).not.toBeDefined());

    /** Await for the promise to be completed */
    await promise;
  });

  it('values of codecs should be correct', async () => {
    const promise = getTranscoderCodecCapabilities()
      .then((codecs) => {
        /** Check that the codecs are filled */
        expect(codecs.length).toBeGreaterThan(0);

        /** Get the HEVC codec */
        const hevc = codecs.filter((codec) => codec.name === 'hevc');

        /** Check for doublons */
        expect(hevc.length).toBe(1);

        /** Check the codecs information */
        expect(hevc[0].codecType).toBe('video');
        expect(hevc[0].name).toBe('hevc');
        expect(hevc[0].supportsDecoding).toBe(true);
        expect(hevc[0].supportsEncoding).toBe(true);
        expect(hevc[0].lossyCompression).toBe(true);
        expect(hevc[0].losslessCompression).toBe(false);
        expect(hevc[0].intraFrameOnly).toBe(false);
      })
      .catch((error) => expect(error).not.toBeDefined());

    /** Await for the promise to be completed */
    await promise;
  });

  it('only video codecs should be present', async () => {
    const promise = getTranscoderCodecCapabilities({ codecType: 'video' })
      .then((codecs) => {
        /** Flatten all the types */
        const allTypes = codecs.map((codec) => codec.codecType);
        /** Remove doublons */
        const types = allTypes.filter((type, i) => allTypes.indexOf(type) === i);

        /** Check if there is only one type and it's the video */
        expect(types.length).toBe(1);
        expect(types[0]).toBe('video');
      })
      .catch((error) => expect(error).not.toBeDefined());

    await promise;
  });

  it('only video and audio codecs should be present', async () => {
    const promise = getTranscoderCodecCapabilities({ codecType: ['video', 'audio'] })
      .then((codecs) => {
        /** Flatten all the types */
        const allTypes = codecs.map((codec) => codec.codecType);
        /** Remove doublons */
        const types = allTypes.filter((type, i) => allTypes.indexOf(type) === i);

        /** Check if there is only two types and it's the video and audio */
        expect(types.length).toBe(2);
        expect(types.includes('video')).toBe(true);
        expect(types.includes('audio')).toBe(true);
      })
      .catch((error) => expect(error).not.toBeDefined());

    await promise;
  });

  it('only codecs that supports encoding should be present', async () => {
    const promise = getTranscoderCodecCapabilities({ supportsEncoding: true })
      .then((codecs) => {
        /** Flatten all the encoding supports */
        const allSupports = codecs.map((codec) => codec.supportsEncoding);
        /** Remove doublons */
        const supports = allSupports.filter((support, i) => allSupports.indexOf(support) === i);

        /** Check if there is only one types and it's the supported */
        expect(supports.length).toBe(1);
        expect(supports[0]).toBe(true);
      })
      .catch((error) => expect(error).not.toBeDefined());

    await promise;
  });
});
