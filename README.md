# AIDA 官網（純 HTML + Tailwind CSS v4）

AIDA（AI DefTech Accelerator）官網首頁，由 Claude Design 設計稿轉成靜態網站。所有內容都直接寫在 HTML 裡，JavaScript 只負責動態效果。

## 安裝與建置

```bash
npm install
npm run build        # 組裝頁面 + 編譯壓縮 CSS，輸出到 dist/
```

開發時開兩個終端機：

```bash
npm run dev:css      # 監看並編譯 Tailwind
npm run dev:pages    # 監看並組裝頁面
```

本機預覽：`npx serve dist` 或 `python3 -m http.server -d dist`（請用伺服器開啟，直接點開 html 檔時 `/assets/...` 路徑會找不到）。

Cloudflare Pages：Build command `npm run build`，Build output directory `dist`。

GitHub Pages：推送到 `main` 時由 `.github/workflows/pages.yml` 自動建置並發布（需在 Settings → Pages 把 Source 設為「GitHub Actions」）。網站位於子路徑 `/AIDA-Website/`，建置時以環境變數 `BASE_PATH` 自動替所有站內路徑加上前綴。

## 結構

```
src/
  pages/index.html        首頁（<!-- include:partials/xxx.html --> 於建置時展開）
  partials/               head-common / header / nav / footer / logo（中文版 .zh.html）
  styles/main.css         Tailwind 進入點，@theme 管理色彩、字體等 design tokens
  root/                   原樣複製到 dist 根目錄
    assets/js/main.js     互動效果（輪播、區塊疊蓋、視差、淡入、滑鼠晃動）
    assets/images/        WebP 圖片（大圖＋ -sm 小圖，搭配 srcset）、og-image.jpg、logo.png
    robots.txt  sitemap.xml  llms.txt  _headers  favicon.*
  data/home.json          首頁重複資料（題目、服務、步驟、場域、新聞、FAQ）
scripts/build-pages.mjs   組裝頁面、複製 src/root
```

## SEO / GEO / AEO 已做項目

- `lang="zh-Hant-TW"`、title、description、canonical、hreflang、Open Graph、Twitter Card
- JSON-LD：Organization、WebSite、WebPage、Place（兩個場域）、Service 清單、FAQPage
- 語意化標籤與標題層級（單一 H1，H2 → H3 → H4 不跳級）
- 所有圖片有 alt、寬高與 srcset；首屏圖 preload
- robots.txt 放行搜尋引擎與 AI 爬蟲、sitemap.xml、llms.txt

## 上線前待辦（原始碼中以 `<!-- TODO: ... -->` 標註）

- 移除 `<meta name="robots" content="noindex, nofollow">`
- 網域確定後，全站搜尋取代 `https://aida.com`
- 主管確認：定義句、「加速燃料」標題與 6 項服務、海外串聯／製造諮詢說明
- 法務確認：投資與上市顧問
- 替換案例、合作廠商 logo、論壇與新聞的示意內容
- 英文版上線後補 hreflang `en`
