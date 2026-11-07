/**
 * Hero image optimizer.
 *
 * Generates two art-directed crops per source image:
 *   - landscape 16:9: 1280w and 1920w for desktop/tablet
 *   - portrait 4:5:   720w for phones
 *
 * CROP CONFIG - edit IMAGES below and re-run: npm run optimize:hero
 *
 * Each image has separate `landscape` and `portrait` settings. `focus` accepts:
 *   - a sharp position string: 'centre', 'attention', 'entropy', 'left', 'right',
 *     'top', 'bottom', 'top-left', 'top-right', 'bottom-left', 'bottom-right'
 *   - or an explicit source-pixel crop: { left, top, width, height }
 *
 * Examples:
 *   landscape: { focus: 'attention', quality: 74 }
 *   landscape: { focus: { left: 420, top: 30, width: 2800, height: 1575 }, quality: 74 }
 *   portrait: { focus: 'attention', quality: 72 }
 *
 * The explicit region is applied before resizing; the final resize still uses
 * object-fit-style cover to reach the target output ratio.
 *
 * Subjects to keep in frame:
 *   education - students at their desks
 *   health    - the man's face and the injection area
 *   skills    - the boy and the screen
 * The hero text sits bottom-left, so landscape crops should keep subjects in
 * the upper/right area where possible.
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.resolve(__dirname, '..');
const SOURCE_DIR = path.join(ROOT, 'hero-originals');
const OUTPUT_DIR = path.join(ROOT, 'src', 'assets', 'hero');

const VARIANTS = [
  {
    id: 'landscape',
    widths: [1280, 1920],
    aspectRatio: 16 / 9,
    targetKb: { 1280: 110, 1920: 200 },
    defaultQuality: 74,
  },
  {
    id: 'portrait',
    widths: [720],
    aspectRatio: 4 / 5,
    targetKb: { 720: 60 },
    defaultQuality: 74,
  },
];

const IMAGES = [
  {
    key: 'education',
    sourceCandidates: ['education.jpg.jpg', 'education.jpg'],
    landscape: { focus: 'attention', quality: 75 },
    portrait: { focus: 'attention', quality: 72 },
  },
  {
    key: 'health',
    sourceCandidates: ['health.jpg.jpg', 'health.jpg'],
    landscape: { focus: 'attention', quality: 74 },
    portrait: { focus: 'attention', quality: 73 },
  },
  {
    key: 'skills',
    sourceCandidates: ['skills.jpg.jpg', 'skills.jpg'],
    landscape: { focus: 'attention', quality: 74 },
    portrait: { focus: 'attention', quality: 74 },
  },
];

const roundKb = (bytes) => Math.round((bytes / 1024) * 10) / 10;

function formatFocus(focus) {
  if (typeof focus === 'string') return focus;
  return `extract ${focus.left},${focus.top} ${focus.width}x${focus.height}`;
}

function resolveSource(candidates) {
  for (const name of candidates) {
    const fullPath = path.join(SOURCE_DIR, name);
    if (fs.existsSync(fullPath)) return fullPath;
  }
  throw new Error(`Missing source image. Tried: ${candidates.join(', ')}`);
}

async function optimizeVariant(image, sourcePath, variant) {
  const settings = image[variant.id] || {};
  const focus = settings.focus || 'attention';
  const quality = settings.quality || variant.defaultQuality;

  console.log(`  ${variant.id} | focus: ${formatFocus(focus)} | quality: ${quality}`);

  for (const width of variant.widths) {
    const height = Math.round(width / variant.aspectRatio);
    const outputPath = path.join(OUTPUT_DIR, `${image.key}-${variant.id}-${width}.webp`);

    let pipeline = sharp(sourcePath).rotate();

    if (typeof focus === 'object' && focus !== null) {
      pipeline = pipeline.extract(focus);
    }

    pipeline = pipeline.resize(width, height, {
      fit: 'cover',
      position: typeof focus === 'string' ? focus : 'centre',
      withoutEnlargement: false,
    });

    const info = await pipeline
      .webp({ quality, effort: 5, smartSubsample: true })
      .toFile(outputPath);

    const sizeKb = roundKb(info.size);
    const target = variant.targetKb[width];
    const status = sizeKb <= target ? 'ok' : `WARN over ${target} KB target`;

    console.log(
      `    ${path.relative(ROOT, outputPath)} | ${info.width}x${info.height} | ${sizeKb} KB | ${status}`
    );
  }
}

async function optimizeImage(image) {
  const sourcePath = resolveSource(image.sourceCandidates);
  const sourceStat = fs.statSync(sourcePath);
  const metadata = await sharp(sourcePath).metadata();

  console.log(
    `\n${image.key}: ${path.basename(sourcePath)} | ${metadata.width}x${metadata.height} | ${roundKb(sourceStat.size)} KB`
  );

  for (const variant of VARIANTS) {
    await optimizeVariant(image, sourcePath, variant);
  }
}

async function main() {
  if (!fs.existsSync(SOURCE_DIR)) {
    throw new Error(`Source folder not found: ${SOURCE_DIR}`);
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`Optimizing hero images from ${path.relative(ROOT, SOURCE_DIR)} -> ${path.relative(ROOT, OUTPUT_DIR)}`);

  for (const image of IMAGES) {
    await optimizeImage(image);
  }

  console.log('\nDone. Re-run with: npm run optimize:hero');
}

main().catch((error) => {
  console.error(`\nOptimization failed: ${error.message}`);
  process.exitCode = 1;
});
