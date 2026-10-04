const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/products.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newProducts = [
  {
    id: 'dosa',
    slug: 'dosa',
    name: 'Dosa',
    categoryId: 'breakfast-products',
    description: 'Authentic South Indian Dosa batter for crispy dosas.',
    fullDescription: 'Enjoy our delicious Dosa, made with the finest ingredients to guarantee the highest quality and taste. Perfect for a traditional breakfast.',
    image: '/images/products/dosa.png',
    packSize: '1 Pack',
    weight: 'N/A',
    shelfLife: 'Varies',
    storageCondition: 'Store in a cool, dry place',
    productType: 'Breakfast Item',
    vegetarian: true
  },
  {
    id: 'idiyappam',
    slug: 'idiyappam',
    name: 'Idiyappam',
    categoryId: 'breakfast-products',
    description: 'Traditional string hoppers made from rice flour.',
    fullDescription: 'Enjoy our delicious Idiyappam, made with the finest ingredients to guarantee the highest quality and taste. Soft and fluffy.',
    image: '/images/products/idiyappam.png',
    packSize: '1 Pack',
    weight: 'N/A',
    shelfLife: 'Varies',
    storageCondition: 'Store in a cool, dry place',
    productType: 'Breakfast Item',
    vegetarian: true
  },
  {
    id: 'idly',
    slug: 'idly',
    name: 'Idly',
    categoryId: 'breakfast-products',
    description: 'Soft and spongy traditional South Indian Idly.',
    fullDescription: 'Enjoy our delicious Idly, made with the finest ingredients to guarantee the highest quality and taste. Steamed to perfection.',
    image: '/images/products/idly.png',
    packSize: '1 Pack',
    weight: 'N/A',
    shelfLife: 'Varies',
    storageCondition: 'Store in a cool, dry place',
    productType: 'Breakfast Item',
    vegetarian: true
  },
  {
    id: 'parotta',
    slug: 'parotta',
    name: 'Parotta',
    categoryId: 'breakfast-products',
    description: 'Flaky and layered South Indian flatbread.',
    fullDescription: 'Enjoy our delicious Parotta, made with the finest ingredients to guarantee the highest quality and taste. Best enjoyed hot.',
    image: '/images/products/parotta.png',
    packSize: '1 Pack',
    weight: 'N/A',
    shelfLife: 'Varies',
    storageCondition: 'Store in a cool, dry place',
    productType: 'Breakfast Item',
    vegetarian: true
  },
  {
    id: 'vellappam',
    slug: 'vellappam',
    name: 'Vellappam',
    categoryId: 'breakfast-products',
    description: 'Traditional Kerala style appam with crispy edges and soft center.',
    fullDescription: 'Enjoy our delicious Vellappam, made with the finest ingredients to guarantee the highest quality and taste. A true breakfast delight.',
    image: '/images/products/vellappam.png',
    packSize: '1 Pack',
    weight: 'N/A',
    shelfLife: 'Varies',
    storageCondition: 'Store in a cool, dry place',
    productType: 'Breakfast Item',
    vegetarian: true
  }
];

// We need to parse the existing products.
// Since the file is just `export const products = [...];`, we can extract the JSON array.
const match = content.match(/export const products = (\[[\s\S]*\]);\s*$/);
if (match) {
  let productsArray;
  try {
    // This assumes the array is valid JSON (which it is, since we generated it via JSON.stringify).
    // If it has trailing commas or JS specifics, we might need a safer eval.
    // Let's use eval safely.
    productsArray = eval(match[1]);
  } catch (e) {
    console.error("Failed to parse array", e);
    process.exit(1);
  }
  
  // Combine arrays, avoiding exact duplicates based on id
  const existingIds = new Set(productsArray.map(p => p.id));
  const toAdd = newProducts.filter(p => !existingIds.has(p.id));
  
  const finalArray = [...productsArray, ...toAdd];
  
  const newContent = `export const products = ${JSON.stringify(finalArray, null, 2)};\n`;
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log("Successfully added breakfast items.");
} else {
  console.error("Could not find products array export.");
}
