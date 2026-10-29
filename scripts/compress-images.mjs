// Compresses site photography to web-appropriate sizes.
// Run: npm run compress:images   (idempotent — safe to re-run)
import sharp from 'sharp';
import { readdir, rm } from 'node:fs/promises';
import path from 'node:path';

const dir = path.join(process.cwd(), 'src/assets/images');
const TEAM_TARGET_W = 440;  // rendered at 128px card + 220px dialog (2x retina)
const PHOTO_TARGET_W = 900; // about section photo

async function compress(file, width) {
  const src = path.join(dir, file);
  const tmp = src + '.tmp';
  await sharp(src).resize({ width, withoutEnlargement: true }).webp({ quality: 80 }).toFile(tmp);
  // Windows can hold transient locks (Defender/indexer) — retry the swap.
  for (let attempt = 1; ; attempt++) {
    try {
      await rm(src);
      await import('node:fs/promises').then((fs) => fs.rename(tmp, src));
      break;
    } catch (err) {
      if (attempt >= 5 || err.code !== 'EBUSY') {
        await rm(tmp, { force: true });
        console.log(`${file}: SKIPPED (${err.code}) — already compressed or locked`);
        return null;
      }
      await new Promise((r) => setTimeout(r, 1500 * attempt));
    }
  }
  const { size } = await import('node:fs/promises').then((fs) => fs.stat(src));
  return size;
}

async function main() {
  const files = await readdir(dir);
  let total = 0;
  for (const f of files) {
    if (!f.endsWith('.webp')) continue;
    if (f === 'about-team.webp') {
      const size = await compress(f, PHOTO_TARGET_W);
      if (size !== null) { console.log(`${f}: ${(size / 1024).toFixed(0)} KB`); total += size; }
    } else if (f.includes('_')) {
      const size = await compress(f, TEAM_TARGET_W);
      if (size !== null) { console.log(`${f}: ${(size / 1024).toFixed(0)} KB`); total += size; }
    }
  }
  console.log(`Total photography: ${(total / 1024).toFixed(0)} KB`);
}

main().catch((e) => { console.error(e); process.exit(1); });
