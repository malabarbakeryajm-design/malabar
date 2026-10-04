const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/products.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newProducts = [
  {
    id: 'butter-bun',
    slug: 'butter-bun',
    name: 'Butter Bun',
    categoryId: 'buns',
    description: 'Soft and fluffy bun rich with butter.',
    fullDescription: 'Enjoy our delicious Butter Bun, made with the finest ingredients to guarantee the highest quality and taste. Perfect with tea.',
    image: '/images/products/butter-bun.png',
    packSize: '1 Pack',
    weight: 'N/A',
    shelfLife: 'Varies',
    storageCondition: 'Store in a cool, dry place',
    productType: 'Bakery Item',
    vegetarian: true
  },
  {
    id: 'cream-bun',
    slug: 'cream-bun',
    name: 'Cream Bun',
    categoryId: 'buns',
    description: 'Sweet bun filled with rich cream.',
    fullDescription: 'Enjoy our delicious Cream Bun, made with the finest ingredients to guarantee the highest quality and taste. A sweet treat.',
    image: '/images/products/cream-bun.png',
    packSize: '1 Pack',
    weight: 'N/A',
    shelfLife: 'Varies',
    storageCondition: 'Keep refrigerated',
    productType: 'Bakery Item',
    vegetarian: true
  },
  {
    id: 'cream-finger-rolls',
    slug: 'cream-finger-rolls',
    name: 'Cream Finger Rolls',
    categoryId: 'buns',
    description: 'Soft finger rolls with a sweet cream filling.',
    fullDescription: 'Enjoy our delicious Cream Finger Rolls, made with the finest ingredients to guarantee the highest quality and taste.',
    image: '/images/products/cream-finger-rolls.png',
    packSize: '1 Pack',
    weight: 'N/A',
    shelfLife: 'Varies',
    storageCondition: 'Keep refrigerated',
    productType: 'Bakery Item',
    vegetarian: true
  },
  {
    id: 'finger-rolls',
    slug: 'finger-rolls',
    name: 'Finger Rolls',
    categoryId: 'buns',
    description: 'Classic soft and fluffy finger rolls.',
    fullDescription: 'Enjoy our delicious Finger Rolls, made with the finest ingredients to guarantee the highest quality and taste.',
    image: '/images/products/finger-rolls.png',
    packSize: '1 Pack',
    weight: 'N/A',
    shelfLife: 'Varies',
    storageCondition: 'Store in a cool, dry place',
    productType: 'Bakery Item',
    vegetarian: true
  },
  {
    id: 'fried-bread-stick',
    slug: 'fried-bread-stick',
    name: 'Fried Bread Stick',
    categoryId: 'buns',
    description: 'Crispy and savory fried bread stick.',
    fullDescription: 'Enjoy our delicious Fried Bread Stick, made with the finest ingredients to guarantee the highest quality and taste.',
    image: '/images/products/fried-bread-stick.png',
    packSize: '1 Pack',
    weight: 'N/A',
    shelfLife: 'Varies',
    storageCondition: 'Store in a cool, dry place',
    productType: 'Bakery Item',
    vegetarian: true
  },
  {
    id: 'fruit-bun',
    slug: 'fruit-bun',
    name: 'Fruit Bun',
    categoryId: 'buns',
    description: 'Soft bun studded with dried fruits.',
    fullDescription: 'Enjoy our delicious Fruit Bun, made with the finest ingredients to guarantee the highest quality and taste.',
    image: '/images/products/fruit-bun.png',
    packSize: '1 Pack',
    weight: 'N/A',
    shelfLife: 'Varies',
    storageCondition: 'Store in a cool, dry place',
    productType: 'Bakery Item',
    vegetarian: true
  },
  {
    id: 'masala-bun',
    slug: 'masala-bun',
    name: 'Masala Bun',
    categoryId: 'buns',
    description: 'Savory bun flavored with traditional spices.',
    fullDescription: 'Enjoy our delicious Masala Bun, made with the finest ingredients to guarantee the highest quality and taste.',
    image: '/images/products/masala-bun.png',
    packSize: '1 Pack',
    weight: 'N/A',
    shelfLife: 'Varies',
    storageCondition: 'Store in a cool, dry place',
    productType: 'Bakery Item',
    vegetarian: true
  },
  {
    id: 'plain-buns',
    slug: 'plain-buns',
    name: 'Plain Buns',
    categoryId: 'buns',
    description: 'Simple, soft, and versatile plain buns.',
    fullDescription: 'Enjoy our delicious Plain Buns, made with the finest ingredients to guarantee the highest quality and taste.',
    image: '/images/products/plain-buns.png',
    packSize: '1 Pack',
    weight: 'N/A',
    shelfLife: 'Varies',
    storageCondition: 'Store in a cool, dry place',
    productType: 'Bakery Item',
    vegetarian: true
  },
  {
    id: 'sugar-donut',
    slug: 'sugar-donut',
    name: 'Sugar Donut',
    categoryId: 'buns',
    description: 'Classic sweet donut coated with sugar.',
    fullDescription: 'Enjoy our delicious Sugar Donut, made with the finest ingredients to guarantee the highest quality and taste.',
    image: '/images/products/sugar-donut.png',
    packSize: '1 Pack',
    weight: 'N/A',
    shelfLife: 'Varies',
    storageCondition: 'Store in a cool, dry place',
    productType: 'Bakery Item',
    vegetarian: true
  },
  {
    id: 'sultana-danish',
    slug: 'sultana-danish',
    name: 'Sultana Danish',
    categoryId: 'buns',
    description: 'Flaky pastry filled with sweet sultanas.',
    fullDescription: 'Enjoy our delicious Sultana Danish, made with the finest ingredients to guarantee the highest quality and taste.',
    image: '/images/products/sultana-danish.png',
    packSize: '1 Pack',
    weight: 'N/A',
    shelfLife: 'Varies',
    storageCondition: 'Store in a cool, dry place',
    productType: 'Bakery Item',
    vegetarian: true
  },
  {
    id: 'zaatar-bun',
    slug: 'zaatar-bun',
    name: 'Zaatar Bun',
    categoryId: 'buns',
    description: 'Soft bun topped with aromatic Zaatar spice blend.',
    fullDescription: 'Enjoy our delicious Zaatar Bun, made with the finest ingredients to guarantee the highest quality and taste.',
    image: '/images/products/zaatar-bun.png',
    packSize: '1 Pack',
    weight: 'N/A',
    shelfLife: 'Varies',
    storageCondition: 'Store in a cool, dry place',
    productType: 'Bakery Item',
    vegetarian: true
  }
];

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
  console.log("Successfully added bun items.");
} else {
  console.error("Could not find products array export.");
}
