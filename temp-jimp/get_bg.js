const Jimp = require('jimp');
const path = require('path');

const imgPath = path.resolve('C:\\Users\\jasil\\.gemini\\antigravity-ide\\brain\\e8f5dfda-adae-4256-adf4-77961788ad6e\\.user_uploaded\\media_1791179347979.png');

Jimp.read(imgPath).then(image => {
  const hex = image.getPixelColor(0, 0);
  const rgba = Jimp.intToRGBA(hex);
  console.log('Background Color:', rgba);
}).catch(err => console.error(err));
