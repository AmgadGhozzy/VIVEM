// Compresses + brand-normalizes site photography.
// Every photo is baked as an aurora-tinted monochrome (the client's original
// portraits carry the legacy blue/yellow duotone + watermark — the tint keeps
// them on-brand). Run: npm run compress:images
import sharp from 'sharp';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

const dir = path.join(process.cwd(), 'src/assets/images');
const TEAM_TARGET_W = 440;  // rendered at 128px card + 220px dialog (2x retina)
const PHOTO_TARGET_W = 900; // about section photo
const TINT = { r: 71, g: 85, b: 220 }; // aurora violet-blue

async function processImage(file, width) {
  const src = path.join(dir, file);
  // Read fully into memory: sharp's lazy fd would block rm() with EBUSY on Windows
  const input = await (await import('node:fs/promises')).readFile(src);
  const buf = await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .grayscale()
    .tint(TINT)
    .webp({ quality: 82 })
    .toBuffer();
  const fs = await import('node:fs/promises');
  await fs.rm(src);
  await fs.writeFile(src, buf);
  return buf.length;
}

async function main() {
  const files = await readdir(dir);
  let total = 0;
  for (const f of files) {
    if (!f.endsWith('.webp')) continue;
    if (f === 'about-team.webp') {
      total += await processImage(f, PHOTO_TARGET_W);
      console.log(`${f}: done`);
    } else if (f.includes('_')) {
      total += await processImage(f, TEAM_TARGET_W);
      console.log(`${f}: done`);
    }
  }
  console.log(`Total photography: ${(total / 1024).toFixed(0)} KB`);
}

main().catch((e) => { console.error(e); process.exit(1); });
