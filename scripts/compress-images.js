const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directories = [
  { input: 'public/images', output: 'public/images' },
  { input: 'public/game-images', output: 'public/game-images' },
];

const supportedExtensions = ['.png', '.jpg', '.jpeg', '.webp'];

async function compressImages() {
  for (const dir of directories) {
    if (!fs.existsSync(dir.input)) {
      console.log(`Directory ${dir.input} not found, skipping...`);
      continue;
    }

    const files = fs.readdirSync(dir.input).filter(f => {
      const ext = path.extname(f).toLowerCase();
      return supportedExtensions.includes(ext);
    });

    console.log(`\n📸 Compressing images in ${dir.input}...`);

    for (const file of files) {
      const inputPath = path.join(dir.input, file);
      const ext = path.extname(file).toLowerCase();
      const inputIsWebp = ext === '.webp';
      const outputPath = inputIsWebp
        ? path.join(dir.output, path.basename(file, ext) + '-optimized.webp')
        : path.join(dir.output, path.basename(file, ext) + '.webp');

      try {
        const stats = fs.statSync(inputPath);
        const originalSize = (stats.size / 1024).toFixed(2);

        const targetWidth = dir.input.includes('game-images') ? 720 : 1200;

        // Compress and convert to WebP
        await sharp(inputPath)
          .resize(targetWidth, targetWidth, { fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 70, effort: 6 })
          .toFile(outputPath);

        const newStats = fs.statSync(outputPath);
        const newSize = (newStats.size / 1024).toFixed(2);
        const reduction = (((stats.size - newStats.size) / stats.size) * 100).toFixed(1);

        console.log(`✅ ${file}`);
        console.log(`   ${originalSize}KB → ${newSize}KB (${reduction}% reduction)`);

        // Replace original PNG/JPG or swap in optimized WebP
        if (!inputIsWebp && inputPath !== outputPath) {
          fs.unlinkSync(inputPath);
        }
        if (inputIsWebp && fs.existsSync(inputPath)) {
          fs.unlinkSync(inputPath);
          fs.renameSync(outputPath, inputPath);
        }
      } catch (error) {
        console.error(`❌ Error compressing ${file}:`, error.message);
      }
    }
  }

  console.log('\n✨ Image compression complete!');
}

compressImages().catch(console.error);
