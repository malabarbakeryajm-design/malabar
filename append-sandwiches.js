const fs = require('fs');
const path = require('path');

const srcDir = 'c:/Users/jasil/OneDrive/Desktop/malabar';
const destDir = 'c:/Users/jasil/OneDrive/Desktop/malabar/public/images/products';
const filePath = path.join(__dirname, 'src/data/products.ts');
let content = fs.readFileSync(filePath, 'utf8');

const imageList = [
  "CHICKEN CLUB SANDWICH.PNG",
  "CHICKEN SANDWICH.PNG",
  "CHICKEN TANDOORI SANDWICH.PNG",
  "CHICKEN TIKKA CLUB SANDWICH.PNG",
  "CHICKEN TIKKA SANDWICH.PNG",
  "EGG CLUB SANDWICH.PNG",
  "EGG SANDWICH.PNG",
  "HOT DOG SANDWICH.PNG",
  "PAROTTA TIKKA SANDWICH.PNG",
  "SHAWARMA SANDWICH.PNG",
  "VEGETABLE CLUB SANDWICH.PNG",
  "VEGETABLE SANDWICH.PNG"
];

const newProducts = [];

imageList.forEach(file => {
  const srcPath = path.join(srcDir, file);
  
  // Format name
  let rawName = file.substring(0, file.lastIndexOf('.'));
  let slug = rawName.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-');
  
  const destName = slug + '.png';
  const destPath = path.join(destDir, destName);
  
  // Copy file
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
  } else {
    console.warn(`File not found: ${srcPath}`);
  }
  
  const name = rawName.split(/[- ()\/]+/).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  
  newProducts.push({
    id: slug + '-sandwich', // Unique ID in case these exist elsewhere
    slug: slug + '-sandwich',
    name: name.trim(),
    categoryId: 'sandwiches',
    description: `Freshly prepared ${name.trim()}.`,
    fullDescription: `Enjoy our delicious ${name.trim()}, perfect for a quick snack or a side dish. Packed with authentic flavors.`,
    image: `/images/products/${destName}`,
    packSize: '1 Pack',
    weight: 'N/A',
    shelfLife: 'Varies',
    storageCondition: 'Store in a cool, dry place',
    productType: 'Sandwich',
    vegetarian: !slug.includes('chicken') && !slug.includes('egg') && !slug.includes('hot-dog') && !slug.includes('shawarma')
  });
});

const match = content.match(/export const products = (\[[\s\S]*\]);\s*$/);
if (match) {
  let productsArray;
  try {
    productsArray = eval(match[1]);
  } catch (e) {
    console.error("Failed to parse array", e);
    process.exit(1);
  }
  
  const existingIds = new Set(productsArray.map(p => p.id));
  const toAdd = newProducts.filter(p => !existingIds.has(p.id));
  
  const finalArray = [...productsArray, ...toAdd];
  
  const newContent = `export const products = ${JSON.stringify(finalArray, null, 2)};\n`;
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log("Successfully copied images and added sandwich items.");
} else {
  console.error("Could not find products array export.");
}
