// news-image-20261122 entrypoint: copy the rendered image to the output
// directory after checking it meets the competition gate:
//   - a whole PNG file (magic bytes 89 50 4E 47 0D 0A 1A 0A)
//   - at most 1 MiB (1048576 bytes)
//   - exactly 1024 by 1024 pixels (PNG IHDR width and height)
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const MAX_BYTES = 1048576;
const WANT_W = 1024;
const WANT_H = 1024;
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const src = join(process.cwd(), "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dst = join(outDir, "entry.png");

const size = statSync(src).size;
if (size > MAX_BYTES) {
  throw new Error(`entry.png is ${size} bytes, over the 1 MiB limit`);
}

const bytes = readFileSync(src);
if (bytes.length < 24 || !bytes.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error("entry.png does not start with the PNG magic bytes");
}

const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width !== WANT_W || height !== WANT_H) {
  throw new Error(`entry.png is ${width}x${height}, expected 1024x1024`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);
// confirm the copy actually landed whole before reporting success
const written = statSync(dst).size;
if (written !== size) {
  throw new Error(`copy to ${dst} is ${written} bytes, expected ${size}`);
}
console.log(`wrote ${dst} (${size} bytes, ${width}x${height})`);
