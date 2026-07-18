const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.join(__dirname, '..', 'src', 'assets');
const exts = new Set(['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG']);

async function compressFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const before = fs.statSync(filePath).size;

  if (!exts.has(path.extname(filePath)) && !exts.has(ext)) return { before, after: before, skipped: true };

  const image = sharp(filePath, { failOn: 'none' });
  const meta = await image.metadata();
  const maxWidth = meta.width > 2000 ? 1600 : 1920;

  let pipeline = image.rotate();

  if ((meta.width || 0) > maxWidth) {
    pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  }

  if (ext === '.png') {
    pipeline = pipeline.png({ quality: 80, compressionLevel: 9, palette: true });
  } else {
    pipeline = pipeline.jpeg({ quality: 78, mozjpeg: true });
  }

  const buffer = await pipeline.toBuffer();
  if (buffer.length >= before) return { before, after: before, skipped: true };

  const tempPath = filePath + '.tmp';
  fs.writeFileSync(tempPath, buffer);
  fs.renameSync(tempPath, filePath);
  return { before, after: buffer.length, skipped: false };
}

async function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let totalBefore = 0;
  let totalAfter = 0;
  let count = 0;

  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const sub = await walk(full);
      totalBefore += sub.before;
      totalAfter += sub.after;
      count += sub.count;
    } else if (exts.has(path.extname(entry.name)) || exts.has(path.extname(entry.name).toLowerCase())) {
      const result = await compressFile(full);
      totalBefore += result.before;
      totalAfter += result.after;
      if (!result.skipped) count += 1;
      const saved = ((result.before - result.after) / 1024).toFixed(0);
      if (!result.skipped && saved > 10) {
        console.log(`  - ${path.relative(assetsDir, full)}: -${saved} KB`);
      }
    }
  }

  return { before: totalBefore, after: totalAfter, count };
}

(async () => {
  console.log('Compressing images in src/assets...');
  const result = await walk(assetsDir);
  const savedMb = (result.before - result.after) / (1024 * 1024);
  console.log(`Done: ${result.count} files compressed, saved ${savedMb.toFixed(2)} MB`);
  console.log(`Before: ${(result.before / (1024 * 1024)).toFixed(2)} MB -> After: ${(result.after / (1024 * 1024)).toFixed(2)} MB`);
})();
