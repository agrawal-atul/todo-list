const fs = require('fs');

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
let html = fs.readFileSync('index.template.html', 'utf8');

for (const [key, value] of Object.entries(config)) {
  const placeholder = new RegExp(`{{${key}}}`, 'g');
  html = html.replace(placeholder, value);
}

fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', html);
console.log('Built dist/index.html successfully');