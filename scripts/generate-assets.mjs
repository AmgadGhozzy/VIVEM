// Generates brand assets from vector sources: logo SVG, favicon, OG image.
// Run: npm run generate:assets
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();

// -- VIVEM geometric wordmark --------------------------------------------------
// Letterforms are polylines on a 100-unit cap-height grid, baked into final
// coordinates (no transforms, so stroke width is exact in output pixels).
const GRID = {
  V: { w: 58, strokes: [[[0, 0], [29, 100], [58, 0]]] },
  I: { w: 10, strokes: [[[0, 0], [0, 100]]] },
  E: {
    w: 46,
    strokes: [[[0, 0], [46, 0]], [[0, 0], [0, 100]], [[0, 100], [46, 100]], [[0, 50], [38, 50]]],
  },
  M: { w: 74, strokes: [[[0, 100], [0, 0], [37, 66], [74, 0], [74, 100]]] },
};
const WORD = 'VIVEM';
const GAP = 26; // grid units between letters
const STROKE = 17; // grid units — ~17% of cap height

function wordMetrics() {
  const widths = [...WORD].map((ch) => GRID[ch].w);
  const total = widths.reduce((a, b) => a + b, 0) + GAP * (WORD.length - 1);
  return { widths, total };
}

// Gradient must be userSpaceOnUse: letters like "I" or horizontal bars have
// zero-area bounding boxes, which silently drop objectBoundingBox gradients.
function wordGrad(id, x0, fullW) {
  return `<linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="${x0.toFixed(1)}" y1="0" x2="${(x0 + fullW).toFixed(1)}" y2="0">
      <stop offset="0" stop-color="#9b87f0"/>
      <stop offset="0.5" stop-color="#7c8cea"/>
      <stop offset="1" stop-color="#68a1e2"/>
    </linearGradient>`;
}

// Emit stroked polylines for the word with cap height `capH`, left edge at x0,
// top at y0. Returns { svg, grad, width } — width is the word's pixel width.
function wordSvg({ capH, x0, y0, id }) {
  const s = capH / 100;
  const { widths, total } = wordMetrics();
  let x = x0;
  const paths = [];
  for (let i = 0; i < WORD.length; i++) {
    const letter = GRID[WORD[i]];
    for (const stroke of letter.strokes) {
      const d = stroke
        .map(([px, py], idx) => `${idx === 0 ? 'M' : 'L'}${(x + px * s).toFixed(1)} ${(y0 + py * s).toFixed(1)}`)
        .join(' ');
      paths.push(`<path d="${d}"/>`);
    }
    x += (letter.w + GAP) * s;
  }
  const fullW = total * s;
  const svg = `<g fill="none" stroke="url(#${id})" stroke-width="${(STROKE * s).toFixed(1)}" stroke-linecap="round" stroke-linejoin="round">
  ${paths.join('\n  ')}
</g>`;
  return { svg, grad: wordGrad(id, x0, fullW), width: fullW };
}

function gradDef(id, x1 = 0, y1 = 0, x2 = 1, y2 = 0) {
  return `<linearGradient id="${id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">
      <stop offset="0" stop-color="#9b87f0"/>
      <stop offset="0.5" stop-color="#7c8cea"/>
      <stop offset="1" stop-color="#68a1e2"/>
    </linearGradient>`;
}

// -- Logo: 900x300 canvas, wordmark centered -----------------------------------
function buildLogoSvg() {
  const W = 900;
  const H = 300;
  const capH = 130;
  const { total: wordW } = wordMetrics();
  const s = capH / 100;
  const fullW = wordW * s;
  const x0 = (W - fullW) / 2;
  const y0 = (H - capH) / 2;
  const { svg, grad } = wordSvg({ capH, x0, y0, id: 'aurora' });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="VIVEM">
  <defs>${grad}</defs>
  ${svg}
</svg>`;
}

// -- Favicon mark: "V" monogram on aurora rounded square -----------------------
function buildFaviconSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <defs>${gradDef('aurora', 0, 0, 1, 1)}</defs>
  <rect width="256" height="256" rx="56" fill="url(#aurora)"/>
  <path d="M64 76 L128 192 L192 76" fill="none" stroke="#ffffff" stroke-width="26" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
}

// -- OG image 1200x630 ----------------------------------------------------------
function buildOgSvg() {
  const W = 1200;
  const H = 630;
  const capH = 150;
  const { total: wordW } = wordMetrics();
  const s = capH / 100;
  const fullW = wordW * s;
  const x0 = (W - fullW) / 2;
  const y0 = 150;
  const { svg, grad } = wordSvg({ capH, x0, y0, id: 'aurora' });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    ${grad}
    <radialGradient id="blob1" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#9b87f0" stop-opacity="0.26"/>
      <stop offset="1" stop-color="#9b87f0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="blob2" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#68a1e2" stop-opacity="0.30"/>
      <stop offset="1" stop-color="#68a1e2" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="blob3" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#ec4899" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#ec4899" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#f8faff"/>
  <circle cx="150" cy="90" r="420" fill="url(#blob1)"/>
  <circle cx="1080" cy="560" r="460" fill="url(#blob2)"/>
  <circle cx="980" cy="60" r="300" fill="url(#blob3)"/>
  ${svg}
  <text x="${W / 2}" y="430" text-anchor="middle" font-family="Segoe UI, DejaVu Sans, Arial, sans-serif" font-size="44" font-weight="600" fill="#0f172a">Digital Marketing &amp; Visual Creativity</text>
  <text x="${W / 2}" y="500" text-anchor="middle" font-family="Segoe UI, DejaVu Sans, Arial, sans-serif" font-size="30" fill="#5b6b83">vivemdigital.com</text>
  <rect x="${(W - 160) / 2}" y="545" width="160" height="6" rx="3" fill="url(#aurora)"/>
</svg>`;
}

async function main() {
  await mkdir(path.join(root, 'src/assets/brand'), { recursive: true });
  await mkdir(path.join(root, 'public/assets/og'), { recursive: true });

  await writeFile(path.join(root, 'src/assets/brand/vivem-logo.svg'), buildLogoSvg(), 'utf8');

  const fav = buildFaviconSvg();
  await writeFile(path.join(root, 'public/favicon.svg'), fav, 'utf8');
  await sharp(Buffer.from(fav)).resize(64, 64).png().toFile(path.join(root, 'public/favicon-64.png'));
  await sharp(Buffer.from(fav)).resize(180, 180).png().toFile(path.join(root, 'public/apple-touch-icon.png'));

  await sharp(Buffer.from(buildOgSvg())).png({ quality: 92 }).toFile(path.join(root, 'public/assets/og/vivem-og.png'));

  console.log('Brand assets generated: logo, favicons, OG image');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
