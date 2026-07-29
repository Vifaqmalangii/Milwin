const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directories = [
  { input: 'public/images', output: 'public/images' },
  { input: 'public/game-images', output: 'public/game-images' },
];

async function compressImages() {
  for (const dir of directories) {
    if (!fs.existsSync(dir.input)) {
      console.log(`Directory ${dir.input} not found, skipping...`);
      continue;
    }

    const files = fs.readdirSync(dir.input).filter(f => {
      const ext = path.extname(f).toLowerCase();
      return ['.png', '.jpg', '.jpeg'].includes(ext);
    });

    console.log(`\n📸 Compressing images in ${dir.input}...`);

    for (const file of files) {
      const inputPath = path.join(dir.input, file);
      const outputName = path.basename(file, path.extname(file)) + '.webp';
      const outputPath = path.join(dir.output, outputName);

      try {
        const stats = fs.statSync(inputPath);
        const originalSize = (stats.size / 1024).toFixed(2);

        // Compress and convert to WebP
        await sharp(inputPath)
          .resize(2048, 2048, { fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outputPath);

        const newStats = fs.statSync(outputPath);
        const newSize = (newStats.size / 1024).toFixed(2);
        const reduction = (((stats.size - newStats.size) / stats.size) * 100).toFixed(1);

        console.log(`✅ ${file}`);
        console.log(`   ${originalSize}KB → ${newSize}KB (${reduction}% reduction)`);

        // Delete original PNG/JPG
        if (inputPath !== outputPath) {
          fs.unlinkSync(inputPath);
        }
      } catch (error) {
        console.error(`❌ Error compressing ${file}:`, error.message);
      }
    }
  }

  console.log('\n✨ Image compression complete!');
}

compressImages().catch(console.error);
