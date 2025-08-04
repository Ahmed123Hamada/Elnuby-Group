import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const optimizeImages = async () => {
  const inputDir = path.join(__dirname, '../src/assast');
  const outputDir = path.join(__dirname, '../src/assast/optimized');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    // Optimize JPEG images
    const jpegFiles = await imagemin([`${inputDir}/*.jpg`, `${inputDir}/*.jpeg`], {
      destination: outputDir,
      plugins: [
        imageminMozjpeg({
          quality: 80,
          progressive: true
        })
      ]
    });

    // Optimize PNG images
    const pngFiles = await imagemin([`${inputDir}/*.png`], {
      destination: outputDir,
      plugins: [
        imageminPngquant({
          quality: [0.6, 0.8]
        })
      ]
    });

    // Convert to WebP
    const webpFiles = await imagemin([`${inputDir}/*.{jpg,jpeg,png}`], {
      destination: outputDir,
      plugins: [
        imageminWebp({
          quality: 80
        })
      ]
    });

    console.log('✅ Image optimization completed!');
    console.log(`📁 Optimized ${jpegFiles.length + pngFiles.length + webpFiles.length} images`);
    console.log(`📂 Output directory: ${outputDir}`);
  } catch (error) {
    console.error('❌ Error optimizing images:', error);
  }
};

optimizeImages(); 