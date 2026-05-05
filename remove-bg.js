const Jimp = require('jimp');
const path = require('path');
const fs = require('fs');

async function processImages() {
  const dir = path.join(__dirname, 'public', 'partner');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

  for (const file of files) {
    const filePath = path.join(dir, file);
    try {
      const image = await Jimp.read(filePath);
      
      image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
        const red = this.bitmap.data[idx + 0];
        const green = this.bitmap.data[idx + 1];
        const blue = this.bitmap.data[idx + 2];
        const alpha = this.bitmap.data[idx + 3];

        if (red > 240 && green > 240 && blue > 240 && alpha > 0) {
          this.bitmap.data[idx + 3] = 0; // Transparent
        }
      });

      image.autocrop();
      image.contain(400, 200, Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE);

      await image.writeAsync(filePath);
      console.log(`Processed ${file}`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
}

processImages();
