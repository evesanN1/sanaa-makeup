const fs = require('fs');

const htmlPath = 'index.html';
let htmlStr = fs.readFileSync(htmlPath, 'utf8');

const regex = /<img[^>]+src="(\.\/src\/assets\/images\/[^"]+)"/g;

htmlStr = htmlStr.replace(regex, (match, p1) => {
  console.log('Replacing', p1);
  try {
    const imgData = fs.readFileSync(p1);
    const base64 = imgData.toString('base64');
    return match.replace(p1, `data:image/png;base64,${base64}`);
  } catch(e) {
    console.error('Failed to read image', p1, e);
    return match;
  }
});

fs.writeFileSync('index.html', htmlStr); // overwrite here
console.log('Modified index.html with embedded images!');
