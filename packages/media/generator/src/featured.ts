/*import sharp from 'sharp';
import { createCanvas } from 'canvas';
import fs from 'fs';

// CONFIGURATION

const WIDTH = 1920;
const RATIO = 16 / 9;
const TEXT = 'Ajout récent';

const THUMBNAIL_PATH = 'images/thumbnail.png';
const OVERLAY_PATH = 'images/overlay.svg';
const OUTPUT_PATH = 'images/output.jpg';

const HEIGHT = WIDTH * (1 / RATIO);

// PROCESS
(async () => {
  // const scaled = await sharp(THUMBNAIL_PATH).resize(WIDTH, HEIGHT).toBuffer();
  // const overlay = await sharp(OVERLAY_PATH).resize(WIDTH, HEIGHT).toBuffer();

  // await sharp(scaled).composite([{ input: overlay, blend: 'over' }]).toFile(OUTPUT_PATH);

  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  const fontSize = 79;
  const fontRatio = 1.15;
  const borderRadius = 28;
  const paddingX = 65;
  const paddingY = 28;

  ctx.font = `bold ${fontSize}px Arial`;
  const size = ctx.measureText(TEXT);

  const backWidth = size.width + paddingX * 2;
  const backHeight = fontSize * fontRatio + paddingY * 2;

  ctx.fillStyle = '#E30811';
  ctx.roundRect(
    (WIDTH - backWidth) / 2,
    HEIGHT - backHeight,
    backWidth,
    backHeight,
    [borderRadius, borderRadius, 0, 0]
  );
  ctx.fill()

  ctx.fillStyle = '#FFF4F3';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  ctx.fillText(TEXT, WIDTH / 2, HEIGHT - paddingY);

  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('./canvas.png', buffer);
})();
*/