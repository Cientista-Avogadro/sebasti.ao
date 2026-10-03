import sharp from "sharp";
import { readdirSync, statSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = "public/gallery";
let totalBefore = 0;
let totalAfter = 0;
let count = 0;

async function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      await walk(full);
      continue;
    }
    if (!/\.jpe?g$/i.test(entry)) continue;

    const before = statSync(full).size;
    totalBefore += before;

    const buffer = readFileSync(full);
    const result = await sharp(buffer)
      .rotate()
      .resize({ width: 1800, height: 1800, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toBuffer();

    if (result.length < before) {
      writeFileSync(full, result);
      totalAfter += result.length;
    } else {
      totalAfter += before;
    }
    count++;
  }
}

await walk(root);
console.log(`compressed ${count} images: ${(totalBefore / 1e6).toFixed(1)}MB -> ${(totalAfter / 1e6).toFixed(1)}MB`);
