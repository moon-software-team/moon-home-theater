/** Dependencies */
import { createCanvas, PNGStream } from 'canvas';
import { generateHSL } from './utils';

/** Options for the avatar generation function */
export interface AvatarGeneratorOptions {
  /**
   * The desired size of the avatar
   * @default 32
   */
  size?: number;
  /**
   * The background color of the avatar
   * @default 'random'
   */
  backgroundColor?: 'random' | string;
  /**
   * The text color of the avatar
   * @default 'white'
   */
  textColor?: 'white' | string;
  /**
   * Text ratio for the initials
   * @default 0.4
   */
  textRatio?: number;
}

/**
 * Generates an avatar for the default profile picture
 * @param initials The initials of the profile
 * @param options The avatar generator options
 * @returns A PNG stream of the generated avatar
 */
export const generateAvatar = (
  initials: string,
  options: AvatarGeneratorOptions = {}
): PNGStream => {
  /** Get the generator options */
  const { size = 32, backgroundColor = 'random', textColor = 'white', textRatio = 0.4 } = options;

  /** Clamp the size to the min and max */
  const clampedSize = size < 16 ? 16 : size > 1024 ? 1024 : size;

  /** Prepare the canvas and the context */
  const canvas = createCanvas(clampedSize, clampedSize);
  const context = canvas.getContext('2d');

  /** Set the background of the canvas */
  context.fillStyle = backgroundColor === 'random' ? generateHSL(initials) : backgroundColor;
  context.fillRect(0, 0, clampedSize, clampedSize);

  /** Write the initials on the canvas */
  context.font = `${clampedSize * textRatio}px Arial`;
  context.fillStyle = textColor;

  /** Set the alignement and the baseline of the text */
  context.textAlign = 'center';
  context.textBaseline = 'middle';

  /** Draw the 2 first letters of the text in the center */
  context.fillText(initials.substring(0, 2).toUpperCase(), clampedSize / 2, clampedSize / 2);

  /** Return the PNG stream of the avatar */
  return canvas.createPNGStream();
};
