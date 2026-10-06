// Run once on your PC (needs internet):  npm run fonts
// Downloads the Google Fonts used by the app into www/fonts and rewrites index.html to use them offline.
import fs from 'node:fs';
const url = 'https://fonts.googleapis.com/css2?family=Unbounded:wght@600;900&family=DM+Sans:wght@400;500;700&family=Caveat:wght@600&display=swap';
const ua = 'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 Chrome/130 Mobile Safari/537.36';
const css = await (await fetch(url, { headers: { 'User-Agent': ua } })).text();
fs.mkdirSync('www/fonts', { recursive: true });
let out = css, n = 0;
for (const m of [...css.matchAll(/url\((https:[^)]+\.woff2)\)/g)]) {
  const name = 'f' + (n++) + '.woff2';
  fs.writeFileSync('www/fonts/' + name, Buffer.from(await (await fetch(m[1])).arrayBuffer()));
  out = out.replace(m[1], name);
}
fs.writeFileSync('www/fonts/fonts.css', out);
let html = fs.readFileSync('www/index.html', 'utf8');
html = html.replace(/<link rel="preconnect"[^>]*>/g, '').replace(/<link rel="stylesheet" href="https:\/\/fonts\.googleapis\.com[^>]*>/, '<link rel="stylesheet" href="fonts/fonts.css">');
fs.writeFileSync('www/index.html', html);
console.log('Done:', n, 'font files bundled');
