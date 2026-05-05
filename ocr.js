const Tesseract = require('tesseract.js');
const path = require('path');

async function extractText() {
  const files = [
    'monarch-tv-channel-content.png',
    'monarch-tv--crypto-content.png',
    'monarch-tv-novels-content.png'
  ];

  for (const file of files) {
    const filePath = path.join(__dirname, 'public', 'Chanel Bouquet', file);
    try {
      console.log(`Extracting text from ${file}...`);
      const { data: { text } } = await Tesseract.recognize(filePath, 'eng', { logger: m => {} });
      console.log(`\n--- Text from ${file} ---\n${text.trim()}\n-------------------------\n`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
}

extractText();
