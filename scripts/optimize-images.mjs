// Generates .avif siblings for raster images in public/attachments.
// Originals stay in place so the Obsidian vault (and any old external
// links) keep working; the build rewrites page references to .avif.
// Re-run after adding new attachments: pnpm optimize:images
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const DIR = path.resolve(import.meta.dirname, "../public/attachments");
const MAX_WIDTH = 2000; // ~2x the widest display size on the site
const QUALITY = 55;

const files = (await readdir(DIR)).filter((f) => /\.(jpe?g|png)$/i.test(f));

let converted = 0;
let skipped = 0;
let inBytes = 0;
let outBytes = 0;

for (const file of files) {
  const src = path.join(DIR, file);
  const dest = src.replace(/\.(jpe?g|png)$/i, ".avif");
  const srcStat = await stat(src);

  const destStat = await stat(dest).catch(() => null);
  if (destStat && destStat.mtimeMs >= srcStat.mtimeMs) {
    skipped++;
    continue;
  }

  const info = await sharp(src)
    .rotate() // bake in EXIF orientation
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .avif({ quality: QUALITY, effort: 5 })
    .toFile(dest);

  inBytes += srcStat.size;
  outBytes += info.size;
  converted++;
  console.log(
    `${file} ${(srcStat.size / 1024).toFixed(0)}K -> ${(info.size / 1024).toFixed(0)}K`,
  );
}

const mb = (n) => (n / 1024 / 1024).toFixed(1);
console.log(
  `\n${converted} converted (${mb(inBytes)}MB -> ${mb(outBytes)}MB), ${skipped} up to date`,
);
