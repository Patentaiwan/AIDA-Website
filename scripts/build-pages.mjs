// 組裝 src/pages 的頁面，並把 src/root 原樣複製到 dist/。
// <!-- include:partials/xxx.html --> 在建置時做純字串替換（可巢狀），
// 最終輸出的 HTML 已包含完整內容，不需要瀏覽器端 JavaScript。
//
// 用法：
//   node scripts/build-pages.mjs          建置一次
//   node scripts/build-pages.mjs --watch  監看 src/ 變更並重新建置

import { promises as fs, watch } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'src');
const PAGES = path.join(SRC, 'pages');
const STATIC_ROOT = path.join(SRC, 'root');
const DIST = path.join(ROOT, 'dist');
const INCLUDE_RE = /<!--\s*include:([\w./-]+)\s*-->/g;
const MAX_DEPTH = 10;

async function walk(dir) {
  const out = [];
  let entries = [];
  try { entries = await fs.readdir(dir, { withFileTypes: true }); } catch { return out; }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

async function expandIncludes(html, from, depth = 0) {
  if (depth > MAX_DEPTH) throw new Error(`include 巢狀超過 ${MAX_DEPTH} 層：${from}`);
  const parts = [];
  let last = 0;
  for (const m of html.matchAll(INCLUDE_RE)) {
    parts.push(html.slice(last, m.index));
    const target = path.join(SRC, m[1]);
    if (!target.startsWith(SRC + path.sep)) throw new Error(`include 路徑超出 src/：${m[1]}`);
    let content;
    try { content = await fs.readFile(target, 'utf8'); }
    catch { throw new Error(`找不到 include 檔案 ${m[1]}（出現在 ${path.relative(ROOT, from)}）`); }
    parts.push(await expandIncludes(content.replace(/\n$/, ''), target, depth + 1));
    last = m.index + m[0].length;
  }
  parts.push(html.slice(last));
  return parts.join('');
}

async function build() {
  const started = Date.now();
  // 只清掉頁面與根目錄檔案，保留 dist/assets/css（由 Tailwind CLI 產生）
  await fs.mkdir(DIST, { recursive: true });

  const pages = (await walk(PAGES)).filter((f) => f.endsWith('.html'));
  for (const file of pages) {
    const rel = path.relative(PAGES, file);
    const out = path.join(DIST, rel);
    const html = await expandIncludes(await fs.readFile(file, 'utf8'), file);
    await fs.mkdir(path.dirname(out), { recursive: true });
    await fs.writeFile(out, html);
  }

  const statics = await walk(STATIC_ROOT);
  for (const file of statics) {
    const out = path.join(DIST, path.relative(STATIC_ROOT, file));
    await fs.mkdir(path.dirname(out), { recursive: true });
    await fs.copyFile(file, out);
  }

  console.log(`[build-pages] ${pages.length} 頁、${statics.length} 個靜態檔 → dist/（${Date.now() - started} ms）`);
}

await build();

if (process.argv.includes('--watch')) {
  let timer = null;
  console.log('[build-pages] 監看 src/ 中…');
  watch(SRC, { recursive: true }, (_event, name) => {
    if (name && name.startsWith('styles')) return; // CSS 交給 Tailwind CLI
    clearTimeout(timer);
    timer = setTimeout(() => build().catch((err) => console.error(err.message)), 120);
  });
}
