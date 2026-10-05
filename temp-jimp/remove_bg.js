const Jimp = require('jimp');
const path = require('path');

const imgPath = path.resolve('C:\\Users\\jasil\\.gemini\\antigravity-ide\\brain\\e8f5dfda-adae-4256-adf4-77961788ad6e\\.user_uploaded\\media_1791179347979.png');
const outPath = path.resolve('C:\\Users\\jasil\\OneDrive\\Desktop\\malabar\\public\\images\\logo-transparent.png');

Jimp.read(imgPath).then(image => {
  const bgHex = image.getPixelColor(0, 0);
  const bgRgba = Jimp.intToRGBA(bgHex);
  
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    
    // Distance from bg color
    const dist = Math.sqrt(
      Math.pow(r - bgRgba.r, 2) + 
      Math.pow(g - bgRgba.g, 2) + 
      Math.pow(b - bgRgba.b, 2)
    );
    
    // If distance is very small (exact match or close), make fully transparent
    if (dist < 15) {
      this.bitmap.data[idx + 3] = 0; // Alpha
    } else if (dist < 60) {
      // Partial transparency for anti-aliasing edges
      // Map distance 15 to 60 -> alpha 0 to 255
      let alpha = Math.floor(((dist - 15) / 45) * 255);
      this.bitmap.data[idx + 3] = alpha;
      
      // Also adjust color towards foreground slightly to remove brown halo?
      // For now just partial alpha
    }
  });

  return image.writeAsync(outPath);
}).then(() => {
  console.log('Successfully created logo-transparent.png');
}).catch(err => console.error(err));
