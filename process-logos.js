const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

async function processSingleImage(fileName, targetDir) {
  const filePath = path.join(targetDir, fileName);
  console.log(`Processing file: ${filePath}`);
  
  if (!fs.existsSync(filePath)) {
    console.error(`File does not exist: ${filePath}`);
    return;
  }

  try {
    const image = await Jimp.read(filePath);
    
    // Convert off-white/white pixels to transparent
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      const alpha = this.bitmap.data[idx + 3];

      // If it is white/off-white (RGB > 240)
      if (red > 240 && green > 240 && blue > 240 && alpha > 0) {
        this.bitmap.data[idx + 3] = 0; // Transparent
      }
    });

    // Autocrop the transparent boundaries so the logo itself is larger and occupies the full image space
    image.autocrop();

    // Write back
    await image.write(filePath);
    console.log(`Successfully processed and saved: ${fileName}`);
  } catch (err) {
    console.error(`Error processing ${fileName}:`, err);
  }
}

async function main() {
  const targetDir = path.join(__dirname, 'public', 'new-logos');
  await processSingleImage('image copy 7.png', targetDir);
  await processSingleImage('image copy.png', targetDir);
}

main();
