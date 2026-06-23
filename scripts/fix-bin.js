const fs = require('fs');
const path = require('path');

if (process.platform === 'win32') {
  process.exit(0);
}

const dir = path.join(__dirname, '..', 'node_modules', '.bin');

try {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    fs.chmodSync(filePath, 0o755);
  }
} catch (error) {
  console.warn('Skipping chmod: could not update node_modules/.bin permissions.', error.message);
}
