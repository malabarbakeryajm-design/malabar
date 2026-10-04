const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dirToConvert = path.join(__dirname, 'public/images');

async function convertDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      await convertDirectory(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
        const webpPath = fullPath.substring(0, fullPath.lastIndexOf('.')) + '.webp';
        console.log(`Converting ${fullPath} to ${webpPath}...`);
        try {
          await sharp(fullPath).webp({ quality: 80 }).toFile(webpPath);
          fs.unlinkSync(fullPath); // Delete the original
        } catch (e) {
          console.error(`Failed to convert ${fullPath}`, e);
        }
      }
    }
  }
}

async function main() {
  console.log("Starting WebP conversion...");
  await convertDirectory(dirToConvert);
  console.log("Conversion complete.");
}

main();
