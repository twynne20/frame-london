// lib/generateImage.ts
import { createCanvas, loadImage } from 'canvas';

export async function generateImage(text: string): Promise<string> {
  const canvas = createCanvas(400, 400);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, 400, 400);

  ctx.font = '24px Arial';
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 200, 200);

  return canvas.toDataURL();
}