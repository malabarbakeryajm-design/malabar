const fs = require('fs');
const path = require('path');

const srcDir = 'c:/Users/jasil/OneDrive/Desktop/malabar';
const destDir = 'c:/Users/jasil/OneDrive/Desktop/malabar/public/images/products';
const filePath = path.join(__dirname, 'src/data/products.ts');
let content = fs.readFileSync(filePath, 'utf8');

const imageList = [
  "CHICKEN CUTLET (READY TO EAT).PNG",
  "KAJA.PNG",
  "KALATHAPPAM.PNG",
  "KHAJOOR.PNG",
  "KOONTHI.PNG",
  "NAMKEEN MIXTURE.PNG",
  "PARIPPU VADA (DAL).PNG",
  "PATHIL (FRIED PATHIRI).PNG",
  "PLAIN NEYYAPPAM.PNG",
  "POTTIYAPPAM (SALTY & SPICY).PNG",
  "SWEET BONDA.PNG",
  "ULLIVADA (ONION VADA).PNG",
  "UNNIYAPPAM.PNG",
  "UZHUNNU VADA (MEDU VADA).PNG"
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
    id: slug + '-snack',
    slug: slug + '-snack',
    name: name.trim(),
    categoryId: 'snacks',
    description: `Delicious traditional ${name.trim()}.`,
    fullDescription: `Enjoy our authentic ${name.trim()}, perfectly prepared for your daily snack time cravings.`,
    image: `/images/products/${destName}`,
    packSize: '1 Pack',
    weight: 'N/A',
    shelfLife: 'Varies',
    storageCondition: 'Store in a cool, dry place',
    productType: 'Snack',
    vegetarian: !slug.includes('chicken')
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
  console.log("Successfully copied images and added snack items.");
} else {
  console.error("Could not find products array export.");
}
