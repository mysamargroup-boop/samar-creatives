const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const projectsDir = path.join(publicDir, 'projects');

// Ensure projects dir exists
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

async function convert() {
  const files = fs.readdirSync(publicDir);
  for (const file of files) {
    if (file.match(/\.(png|jpg|jpeg)$/i)) {
      const inPath = path.join(publicDir, file);
      const stat = fs.statSync(inPath);
      if (stat.isFile()) {
        const outName = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
        const outPath = path.join(projectsDir, outName);
        try {
          await sharp(inPath).webp({ quality: 80 }).toFile(outPath);
          console.log('Converted & moved: ' + file + ' -> projects/' + outName);
          fs.unlinkSync(inPath);
        } catch (err) {
          console.error('Failed on ' + file, err);
        }
      }
    }
  }
  
  // Also convert any remaining pngs inside projects/
  const projFiles = fs.readdirSync(projectsDir);
  for (const file of projFiles) {
    if (file.match(/\.(png|jpg|jpeg)$/i)) {
      const inPath = path.join(projectsDir, file);
      const outPath = path.join(projectsDir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
      try {
        await sharp(inPath).webp({ quality: 80 }).toFile(outPath);
        console.log('Converted in projects/: ' + file);
        fs.unlinkSync(inPath);
      } catch (err) {
        console.error('Failed on ' + file, err);
      }
    }
  }
  
  console.log('\nFinal projects/ contents:');
  fs.readdirSync(projectsDir).forEach(f => console.log('  ' + f));
}

convert();
