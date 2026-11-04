// 組裝靜態頁面：把 src/pages 底下的 HTML 依 <!-- include:partials/xxx.html -->
// 指示插入共用的 header / nav / footer，輸出到 dist（純字串替換，build time 執行，
// 瀏覽器端不需要任何 JavaScript 才能看到內容）。
// 同時把 src/root 底下的檔案（robots.txt、sitemap.xml 等）原樣複製到 dist 根目錄。

import { existsSync } from "node:fs";
import { mkdir, readdir, readFile, writeFile, copyFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT_DIR = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SRC_DIR = path.join(ROOT_DIR, "src");
const PAGES_DIR = path.join(SRC_DIR, "pages");
const PASSTHROUGH_DIR = path.join(SRC_DIR, "root");
const OUT_DIR = path.join(ROOT_DIR, "dist");

const INCLUDE_PATTERN = /<!--\s*include:([^\s]+?)\s*-->/g;

async function listHtmlFiles(dir) {
  if (!existsSync(dir)) return [];
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return listHtmlFiles(fullPath);
      return entry.name.endsWith(".html") ? [fullPath] : [];
    }),
  );
  return files.flat();
}

async function resolveIncludes(content, seenPaths) {
  let result = content;
  let match;
  while ((match = INCLUDE_PATTERN.exec(result))) {
    const includeRelPath = match[1];
    const includeAbsPath = path.join(SRC_DIR, includeRelPath);
    if (seenPaths.has(includeAbsPath)) {
      throw new Error(`偵測到循環 include：${includeRelPath}`);
    }
    if (!existsSync(includeAbsPath)) {
      throw new Error(`找不到要 include 的檔案：${includeRelPath}`);
    }
    const includeContent = await readFile(includeAbsPath, "utf8");
    const resolvedInclude = await resolveIncludes(includeContent, new Set([...seenPaths, includeAbsPath]));
    result = result.slice(0, match.index) + resolvedInclude + result.slice(match.index + match[0].length);
    INCLUDE_PATTERN.lastIndex = 0;
  }
  return result;
}

async function buildPages() {
  const pageFiles = await listHtmlFiles(PAGES_DIR);
  for (const pageFile of pageFiles) {
    const relPath = path.relative(PAGES_DIR, pageFile);
    const outPath = path.join(OUT_DIR, relPath);
    const rawContent = await readFile(pageFile, "utf8");
    const finalContent = await resolveIncludes(rawContent, new Set([pageFile]));
    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, finalContent, "utf8");
    console.log(`[build-pages] ${relPath}`);
  }
  if (pageFiles.length === 0) {
    console.log("[build-pages] src/pages 目前沒有任何頁面，略過組裝。");
  }
  return pageFiles.length;
}

async function copyPassthroughDir(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  let count = 0;
  for (const entry of entries) {
    const srcPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += await copyPassthroughDir(srcPath);
      continue;
    }
    const relPath = path.relative(PASSTHROUGH_DIR, srcPath);
    const outPath = path.join(OUT_DIR, relPath);
    await mkdir(path.dirname(outPath), { recursive: true });
    await copyFile(srcPath, outPath);
    console.log(`[build-pages] (root) ${relPath}`);
    count += 1;
  }
  return count;
}

async function copyPassthrough() {
  if (!existsSync(PASSTHROUGH_DIR)) return 0;
  return copyPassthroughDir(PASSTHROUGH_DIR);
}

async function build() {
  const pageCount = await buildPages();
  const passthroughCount = await copyPassthrough();
  console.log(`[build-pages] 完成：${pageCount} 個頁面、${passthroughCount} 個根目錄檔案 -> dist/`);
}

async function watch() {
  await build();
  console.log("[build-pages] 監看 src/ 變更中... (Ctrl+C 結束)");
  let pending = false;
  const { watch: fsWatch } = await import("node:fs");
  fsWatch(SRC_DIR, { recursive: true }, async () => {
    if (pending) return;
    pending = true;
    setTimeout(async () => {
      pending = false;
      try {
        await build();
      } catch (error) {
        console.error("[build-pages]", error.message);
      }
    }, 150);
  });
}

const isWatch = process.argv.includes("--watch");

try {
  if (isWatch) {
    await watch();
  } else {
    await build();
  }
} catch (error) {
  console.error("[build-pages]", error.message);
  process.exitCode = 1;
}
