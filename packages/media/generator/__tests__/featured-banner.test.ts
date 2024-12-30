/** Dependencies */
import { generateFeaturedBanner } from '../src';

/** Constant for the signature of a PNG image */
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

/** Tests for the featured banner generation */
describe('generateFeaturedBanner', () => {
  it('Should generated a PNG buffer', () => {
    /** Create the featured banner */
    const buffer = generateFeaturedBanner('MA');

    /** Check that the buffer is not empty */
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBeGreaterThan(0);

    /** Expect the png signature */
    expect(buffer.slice(0, 8)).toEqual(PNG_SIGNATURE);
  });

  it('Should generated a 64x64 buffer', () => {
    /** Create the featured banner */
    const buffer = generateFeaturedBanner('Recently Added', { width: 1920 });

    /** Check that the buffer is not empty */
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBeGreaterThan(0);

    /** Extract width and height from the IHDR chunk */
    const width = buffer.readUInt32BE(16);
    const height = buffer.readUInt32BE(20);

    expect(width).toBe(1920);
    expect(height).toBe(1080);
  });
});
