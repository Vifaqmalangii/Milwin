import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function optimizeImages() {
  // 1. Hero background (herobg.webp)
  const heroPath = path.join(process.cwd(), 'public', 'herobg.webp');
  if (fs.existsSync(heroPath)) {
    const inputBuffer = fs.readFileSync(heroPath);
    const heroBuffer = await sharp(inputBuffer)
      .resize({ width: 1280, withoutEnlargement: true })
      .webp({ quality: 60, effort: 6 })
      .toBuffer();
    fs.writeFileSync(heroPath, heroBuffer);
    console.log(`herobg.webp: ${(heroBuffer.length / 1024).toFixed(1)} KB`);
  }

  // 2. About Milwin image
  const aboutPath = path.join(process.cwd(), 'public', 'aboutmilwin.webp');
  if (fs.existsSync(aboutPath)) {
    const inputBuffer = fs.readFileSync(aboutPath);
    const aboutBuffer = await sharp(inputBuffer)
      .resize({ width: 680, withoutEnlargement: true })
      .webp({ quality: 68, effort: 6 })
      .toBuffer();
    fs.writeFileSync(aboutPath, aboutBuffer);
    console.log(`aboutmilwin.webp: ${(aboutBuffer.length / 1024).toFixed(1)} KB`);
  }

  // 3. Logo
  const logoPath = path.join(process.cwd(), 'public', 'milwinlogo.webp');
  if (fs.existsSync(logoPath)) {
    const inputBuffer = fs.readFileSync(logoPath);
    const logoBuffer = await sharp(inputBuffer)
      .resize({ width: 280, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toBuffer();
    fs.writeFileSync(logoPath, logoBuffer);
    console.log(`milwinlogo.webp: ${(logoBuffer.length / 1024).toFixed(1)} KB`);
  }

  // 4. Game images (in slideshow)
  const gameImagesDir = path.join(process.cwd(), 'public', 'game-images');
  if (fs.existsSync(gameImagesDir)) {
    const files = fs.readdirSync(gameImagesDir);
    for (const file of files) {
      if (file.endsWith('.webp')) {
        const filePath = path.join(gameImagesDir, file);
        const inputBuffer = fs.readFileSync(filePath);
        const buffer = await sharp(inputBuffer)
          .resize({ width: 260, withoutEnlargement: true })
          .webp({ quality: 60, effort: 6 })
          .toBuffer();
        fs.writeFileSync(filePath, buffer);
        console.log(`game-images/${file}: ${(buffer.length / 1024).toFixed(1)} KB`);
      }
    }
  }

  // 5. Top game images
  const topGameDir = path.join(process.cwd(), 'public', 'top-game-images-1');
  if (fs.existsSync(topGameDir)) {
    const files = fs.readdirSync(topGameDir);
    for (const file of files) {
      if (file.endsWith('.webp')) {
        const filePath = path.join(topGameDir, file);
        const inputBuffer = fs.readFileSync(filePath);
        const buffer = await sharp(inputBuffer)
          .resize({ width: 220, withoutEnlargement: true })
          .webp({ quality: 65, effort: 6 })
          .toBuffer();
        fs.writeFileSync(filePath, buffer);
        console.log(`top-game-images-1/${file}: ${(buffer.length / 1024).toFixed(1)} KB`);
      }
    }
  }
}

optimizeImages().catch(console.error);
