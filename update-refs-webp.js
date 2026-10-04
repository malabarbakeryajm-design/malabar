const fs = require('fs');
const path = require('path');

function updateFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content.replace(/\.png/gi, '.webp').replace(/\.jpg/gi, '.webp').replace(/\.jpeg/gi, '.webp');
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated references in ${filePath}`);
  }
}

function updateDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      updateDirectory(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (ext === '.ts' || ext === '.tsx' || ext === '.js') {
        updateFile(fullPath);
      }
    }
  }
}

const srcDir = path.join(__dirname, 'src');
updateDirectory(srcDir);
console.log("Finished updating source files.");
