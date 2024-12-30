/** Dependencies */
import { createCanvas } from 'canvas';

/** Alias an interface for the options of generation of featured content banner */
export interface FeaturedBannerGeneratorOptions {
  /**
   * The width of the thumbnail to put the featured banner on
   * @default 480
   */
  width?: number;
  /**
   * The ratio of the thumbnail
   * @default 16 / 9
   */
  ratio?: number;
  /**
   * The background color of the banner
   * @default red
   */
  backgroundColor?: string;
  /**
   * The featured banner text color
   * @default white
   */
  textColor?: string;
  /**
   * Border radius for a 1920x1080 banner
   * @default 28
   */
  borderRadius?: number;
  /**
   * Horizontal padding for 1920x1080 banner
   * @default 65
   */
  horizontalPadding?: number;
  /**
   * Vertical padding for a 1920x1080 banner
   * @default 28
   */
  verticalPadding?: number;
  /**
   * Font size in pixel for a 1920x1080 banner
   * @default 79
   */
  fontSize?: number;
  /**
   * Font ratio to calculate the line height of the font
   * @default 1.15
   */
  fontRatio?: number;
  /**
   * The font familly of the featured banner
   * @default Arial
   */
  fontFamily?: string;
}

/**
 * Generate a featured banner such as `Recently added`
 * @param text The text to add to the banner
 * @param options The generator styling options
 * @returns A buffer with the generated featured banner
 */
export const generateFeaturedBanner = (
  text: string,
  options: FeaturedBannerGeneratorOptions = {}
): Buffer => {
  /** Get the options of the generator */
  const {
    width = 480,
    ratio = 16 / 9,
    backgroundColor = 'red',
    textColor = 'white',
    borderRadius = 28,
    horizontalPadding = 65,
    verticalPadding = 28,
    fontSize = 79,
    fontRatio = 1.15,
    fontFamily = 'Arial'
  } = options;

  /** Calculate the used values */
  const height = width * (1 / ratio);
  const scale = width / 1920;

  /** Create the canvas */
  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d');

  /** Setup the font of the banner */
  context.font = `bold ${fontSize * scale}px ${fontFamily}`;

  /** Measure the text size */
  const measured = context.measureText(text);

  /** Calculate the background width and height */
  const backgroundWidth = measured.width + horizontalPadding * 2;
  const backgroundHeight = fontSize * scale * fontRatio + verticalPadding * 2;

  /** Draw the background */
  context.fillStyle = backgroundColor;
  context.roundRect(
    (width - backgroundWidth) / 2,
    height - backgroundHeight,
    backgroundWidth,
    backgroundHeight,
    [borderRadius * scale, borderRadius * scale, 0, 0]
  );
  context.fill();

  /** Draw the text */
  context.fillStyle = textColor;
  context.textAlign = 'center';
  context.textBaseline = 'bottom';
  context.fillText(text, width / 2, height - verticalPadding);

  /** Return the png buffer */
  return canvas.toBuffer('image/png');
};
