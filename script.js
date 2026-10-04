const fs = require('fs');
const path = require('path');

const srcDir = 'c:/Users/jasil/OneDrive/Desktop/malabar/SOCIAL MEDIA IMAGES';
const categoryMap = {
  'BISCUITS': 'biscuits',
  'BREAKFAST': 'breakfast-products',
  'BUNS': 'buns',
  'CAKES': 'cakes',
  'PUFFS': 'puffs',
  'READY TO COOK': 'ready-to-cook',
  'SAMOSA': 'samosas',
  'SANDWICH': 'sandwiches',
  'SNACKS': 'snacks',
  'SWEETS': 'sweets'
};

const products = [];
let idCounter = 1;

fs.readdirSync(srcDir).forEach(dir => {
  const fullPath = path.join(srcDir, dir);
  if (fs.statSync(fullPath).isDirectory()) {
    const categoryId = categoryMap[dir] || dir.toLowerCase();
    
    fs.readdirSync(fullPath).forEach(file => {
      if (file.toLowerCase().endsWith('.png') && !file.toLowerCase().includes('thumbs.db')) {
        let rawName = file.substring(0, file.lastIndexOf('.'));
        const slug = rawName.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
        const imagePath = '/images/products/' + file.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-.]/g, '');
        
        const name = rawName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
        
        products.push({
          id: slug || `product-${idCounter++}`,
          slug: slug || `product-${idCounter++}`,
          name: name,
          categoryId: categoryId,
          description: `Freshly prepared ${name} by Malabar Bakery.`,
          fullDescription: `Enjoy our delicious ${name}, made with the finest ingredients to guarantee the highest quality and taste.`,
          image: imagePath,
          packSize: '1 Pack',
          weight: 'N/A',
          shelfLife: 'Varies',
          storageCondition: 'Store in a cool, dry place',
          productType: 'Bakery Item',
          vegetarian: true
        });
      }
    });
  }
});

const fileContent = `export const products = ${JSON.stringify(products, null, 2)};\n`;
fs.writeFileSync('c:/Users/jasil/OneDrive/Desktop/malabar/src/data/products.ts', fileContent);
console.log('Products successfully written!');
