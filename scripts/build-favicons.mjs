import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function generateBrandFavicons() {
  const publicDir = path.join(process.cwd(), 'public');
  const logoPath = path.join(publicDir, 'milwinlogo.webp');

  if (!fs.existsSync(logoPath)) {
    console.error('Milwin logo not found at:', logoPath);
    return;
  }

  // 1. Create high-resolution 512x512 Master Canvas with dark background and gold border
  const size = 512;
  const logoBuffer = fs.readFileSync(logoPath);
  
  // Resize the logo to fit nicely in 512x512
  const resizedLogo = await sharp(logoBuffer)
    .resize(420, null, { fit: 'inside' })
    .toBuffer();

  const logoMeta = await sharp(resizedLogo).metadata();
  const top = Math.round((size - logoMeta.height) / 2);
  const left = Math.round((size - logoMeta.width) / 2);

  // SVG background with dark gradient and gold rounded squircle border
  const bgSvg = Buffer.from(`
    <svg width="${size}" height="${size}" viewBox="0 0 ${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#141a29"/>
          <stop offset="100%" stop-color="#0a0d14"/>
        </linearGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffc107"/>
          <stop offset="50%" stop-color="#f5a623"/>
          <stop offset="100%" stop-color="#e08b00"/>
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="496" height="496" rx="96" fill="url(#bgGrad)" stroke="url(#goldGrad)" stroke-width="14"/>
    </svg>
  `);

  const master512 = await sharp(bgSvg)
    .composite([{ input: resizedLogo, top, left }])
    .png()
    .toBuffer();

  // 1. Save logo512.png (Overwriting old React logo)
  fs.writeFileSync(path.join(publicDir, 'logo512.png'), master512);
  console.log('Saved public/logo512.png (512x512)');

  // 2. Save logo192.png (Overwriting old React logo)
  const logo192 = await sharp(master512).resize(192, 192).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'logo192.png'), logo192);
  console.log('Saved public/logo192.png (192x192)');

  // 3. Save apple-touch-icon.png (180x180)
  const apple180 = await sharp(master512).resize(180, 180).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), apple180);
  console.log('Saved public/apple-touch-icon.png (180x180)');

  // 4. Save 48x48 PNG (Google Favicon recommended size)
  const fav48 = await sharp(master512).resize(48, 48).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon-48x48.png'), fav48);
  console.log('Saved public/favicon-48x48.png (48x48)');

  // 5. Save 32x32 PNG
  const fav32 = await sharp(master512).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), fav32);
  console.log('Saved public/favicon-32x32.png (32x32)');

  // 6. Save 16x16 PNG
  const fav16 = await sharp(master512).resize(16, 16).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), fav16);
  console.log('Saved public/favicon-16x16.png (16x16)');

  // 7. Save favicon.ico (using 48x48 PNG container or multi-layer)
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), fav48);
  console.log('Saved public/favicon.ico (48x48)');

  // Also replace public/images/favicon 1.ico if it exists
  const oldIco2 = path.join(publicDir, 'images', 'favicon 1.ico');
  if (fs.existsSync(path.dirname(oldIco2))) {
    fs.writeFileSync(oldIco2, fav48);
    console.log('Replaced public/images/favicon 1.ico');
  }

  console.log('ALL OLD REACT FAVICONS REPLACED WITH OFFICIAL MILWIN BRAND ICONS!');
}

generateBrandFavicons().catch(console.error);
