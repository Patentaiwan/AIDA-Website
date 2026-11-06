# CLAUDE.md — AIDA 官網專案

> 本檔提供 Claude Code 在此專案中工作所需的背景與規則。每次開始工作前請先閱讀。

## 專案概述

- 本專案為 **AIDA（AI DefTech Accelerator，AI 軍工加速器）** 的官方網站。
- 本網站即原本的「挺立資本官網」，已更名為 AIDA。**AIDA 與挺立資本是同一個網站，不存在另一個獨立的 AIDA 官網**；挺立資本是 AIDA 背後的資本公司。
- 網站品牌、標題、Logo、`Organization` 結構化資料一律以 **AIDA** 為主；提到資金來源、投資主體時才使用「挺立資本」。
- 網站定位：**以軍方真實需求為題目、輔導新創開發軍工產品的 AI 國防科技加速器平台**。
- AIDA 是由挺立資本投資並營運的軍工加速器平台，是挺立與外部企業、新創產生連結的平台；AIDA 是挺立的獨立機構，不隸屬於升暘科技。
- 運作模式：需求方是軍方 → AIDA 把軍方需求整理成「題目」→ 輔導新創依題目做出市場真正需要的軍工產品（不是新創想做什麼就做什麼）。做 AI、影像科技的新創，即使原本沒做軍工，也可依題目選擇投入。
- 挺立提供的能力：財務會計、專利分析（智慧財產權）、AI 算力、金融投資與上市顧問；在加速器中的角色是協助新創出場（資本端）。
- 主要服務三種使用者：
  1. 新創團隊（依題目投入軍工產品開發、加入會員）
  2. 合作夥伴（供應商、學校與研究單位、共同投資人）
  3. 國際合作對象（歐洲、美國、日本的加速器與國防相關單位）
- ⚠️ 本專案提到的 AIDA **不是**美國國防部（US DoD）或歐盟 EDF 的同名 AIDA 計畫，撰寫內容或搜尋資料時請勿混淆。
- 參考網站：NATO DIANA 官網（資訊架構與呈現方式）。

## 名稱與用詞（務必正確）

撰寫文案、頁面內容、meta 資料或整理會議紀錄時，一律使用以下正確名稱：

| 簡稱 / 用途 | 正確名稱 | 備註 |
|---|---|---|
| 本網站品牌 | AIDA | 全名 AI DefTech Accelerator（官方英文全名） |
| AIDA 背後的資本公司 | 挺立資本 | 原網站名稱，現已更名為 AIDA |
| 場地 | 升暘聚場 | |
| SRA | 升暘科技 | **是** AIDA 平台成員 |
| PT | 源昇整合方案智財 | **不是** AIDA 平台成員，不可列入成員名單 |
| PB | Playback | 屬升暘科技；優先順序很後面，目前不放上網站 |
| 會議中心 | 台中會議中心 | 公司登記地址、會議室、可上課 |

- 語音轉文字或會議紀錄中若出現同音、近音字，請依上表校正。
- 網站以**繁體中文**為主，並提供**英文版**。
- 成員頁目前只放 SRA（升暘科技）。SRA 負責高速無人機製造、反無人機技術兩個主題。

### 跨站資訊一致（GEO 重點）

- 「關於我們」「聯絡我們」「服務」內容必須與 PT 網站上的挺立資本資料一致，不可各說一套。
- 公司地址一律寫**台中會議中心**；升暘聚場不需寫地址，目前沒有強制（可供課程、論壇使用）。
- AIDA 的每一句定義句與服務說明，需經主管確認含義後才可上線；未確認的內容標註 `<!-- TODO: 主管確認 -->`。

## 網站架構（頁面清單）

依 2026-10-27 會議決議，網站以 **AIDA 加速器平台**為主體規劃。所有頁面皆須符合下方「SEO / AEO / GEO 規範」。

### 1. 首頁 `/`
- AIDA 定義句（需主管確認）
- 運作方式：軍方需求 → 題目 → 新創開發 → 量產與出場
- AIDA 提供的能力：AI 算力、專利分析、財務會計、金融投資與上市顧問
- 精選題目、最新論壇文章與新聞
- 依角色分流的入口：「我是新創」「合作夥伴」「國際合作」

### 2. 關於 AIDA `/about/`（必備頁）
- 敘事順序：先講**能力與組成**（AI 算力、專利商標智慧財產權、會計、金融投資與上市）→ 基於這些能力創立 AIDA → 輔導新創做出市場真正需要的軍工產品
- AIDA 與挺立資本的關係：挺立投資並營運 AIDA，在加速器中負責資本端、協助新創出場
- 「可信資本」的承諾：資金來源透明、排除紅色資本
- **不寫個別成員背景細節**（例如前任職公司、出身事務所），不設獨立的團隊頁
- 內容以 PT 網站上的挺立資本資料為底，兩邊必須一致

### 3. 題目 `/challenges/`
- 說明「題目」是什麼：把軍方實際需求整理成的問題分析，新創依題目開發產品
- 依領域列出題目，每個題目說明：問題背景、需求、適合什麼樣的團隊、如何參與
- 已知領域：高速無人機、反無人機（由 SRA 升暘科技負責）；其他領域待補
- 題目內容由主管提供，不可自行撰寫或推測軍方需求
- 行動按鈕：申請加入、洽詢題目

### 4. 服務 `/services/`（必備頁）
- 服務總覽，每項服務一個子頁：
  - 加速輔導 `/services/acceleration/`
  - 財務會計 `/services/accounting/`
  - 專利分析與智慧財產權 `/services/patent-ip/`
  - AI 算力 `/services/ai-computing/`
  - 投資與上市顧問 `/services/investment-ipo/`
  - 公司登記（台中會議中心地址）`/services/company-registration/`
- 服務說明內容需與 PT 網站一致，並經主管確認

### 5. 平台成員 `/members/`
- 目前只放 SRA（升暘科技）：高速無人機製造、反無人機技術
- PT（源昇整合方案智財）**不是**平台成員，不可列入
- 日後加入軍武聯盟夥伴、學校與研究單位時再擴充

### 6. 會員方案 `/membership/`
- 新創須付費加入，不免費提供
- 暫定方案：每月 5 萬元，可全額折抵會議室、升暘聚場、會計師諮詢、上市諮詢等資源，並享 8 折
- ⚠️ 價格與折抵範圍**尚未確認**，相關文字全部標註 `<!-- TODO: 主管確認 -->`，確認前不可上線

### 7. 場域 `/venues/`
- 台中會議中心：會議室、可上課、可作公司登記地址（**網站上的公司地址寫這裡**）
- 升暘聚場：課程與論壇使用，不需寫地址，目前沒有強制；升暘聚場有自己的網站，可連結過去
- 使用場地需預約；預約系統由多家公司共用，串接方式規劃中，第一版先放洽詢方式

### 8. 論壇 `/forum/`
- 不是新聞媒體，而是依主題分區的專欄型內容，例如：戰爭影像、現況分析、國際資訊（烏克蘭、捷克）
- 參考對象：源道專利商標事務所官網的「專利老實說」（同時是專欄分類與系列課程）
- 形式（專欄文章／系列課程／互動討論）**尚未確定**；第一版先做成依主題分類的文章列表，不做留言或會員發文功能
- 此區是 SEO / GEO 的主要內容來源，文章使用 `<article>` 與 `Article` 結構化資料，附作者與發布／更新日期

### 9. 新聞 `/news/`
- AIDA 活動、課程、媒體報導、國際合作消息（歐洲、美國、日本的合作串聯先在此呈現）

### 10. 聯絡我們 `/contact/`（必備頁）
- 公司名稱、地址（台中會議中心）、電話、Email，需與 PT 網站及 Google 商家資料一致
- 依角色分流的表單：新創申請、合作洽詢、媒體

### 11. 隱私權政策 `/privacy/`

### 12. 英文版 `/en/`
- 國際合作是重點之一，英文版為必要項目
- 中英文頁面互相設定 `hreflang`（`zh-Hant-TW` / `en`）

### 目前不放上網站

- PB（Playback，屬升暘科技）：優先順序很後面
- SRA 的附屬 AI 公司：獨立營運後再考慮掛上

## ⚠️ 法規注意事項

- 挺立資本涉及投資業務，相關內容在台灣受金融法規規範。
- **不可**出現公開招攬投資人的文字，例如報酬率、募資金額、保證收益等。
- 「投資與上市顧問」服務頁及合作洽詢中涉及投資的文案，上線前須經法務或顧問確認。撰寫這類內容時，請在程式碼或內容旁標註 `<!-- TODO: 法務確認 -->`。

## 技術選型

- **目前階段前端不使用 Vue / Nuxt**，以**純 HTML + Tailwind CSS** 開發（細節見「部署方式與環境」）。
- 絕對不可做成 SPA（純前端渲染）：多數 AI 爬蟲（GPTBot、ClaudeBot、PerplexityBot）不執行 JavaScript，只會看到空白頁。
- 若日後轉為 Nuxt，必須使用 SSG（prerender）或 SSR，規則見「日後轉 Nuxt 的規則」。
- 設計稿來自 Claude Design，經 Claude Code 轉為程式碼後交給前端與後端工程師。
- 轉換設計稿時：
  - 使用專案既有的 design tokens（CSS variables / Tailwind theme 設定），不要自行新增色碼、間距或字級數值。
  - 優先沿用既有元件，避免為相同用途建立重複元件。
  - 命名方式與既有程式碼保持一致。
- 若專案中有 `UI_GUIDELINE.md`，UI 相關實作以該文件為準。

## SEO / AEO / GEO 規範（所有頁面必須遵守）

本網站需同時對傳統搜尋引擎（SEO）、答案引擎（AEO）與生成式 AI 搜尋（GEO）友善。

### 語意化 HTML 結構

- 每頁使用標準 landmark 標籤組成骨架：`<header>`、`<nav>`、`<main>`（每頁僅一個）、`<aside>`、`<footer>`。
- 內容區塊使用 `<section>`、`<article>` 並搭配標題；不要以一層層 `<div>` 取代有語意的標籤。
- 每頁只有一個 `<h1>`，標題層級 `h1 → h2 → h3` 依序使用，不跳級，不為了字級大小而選標題標籤（字級交給 Tailwind）。
- 列表用 `<ul>` / `<ol>`，表格資料用 `<table>`（含 `<th>`、`<caption>`），日期用 `<time datetime="">`，麵包屑用 `<nav aria-label="breadcrumb">`。
- 中文頁 `<html lang="zh-Hant-TW">`，英文頁 `<html lang="en">`。

### 內容必須可被直接讀取

- 主要內容需在初始 HTML 中就存在（靜態輸出或伺服器端渲染），不可只靠 JavaScript 在瀏覽器端產生，以確保爬蟲與 AI 都能讀到。
- 圖片一律提供有意義的 `alt`；裝飾性圖片使用 `alt=""`。
- 連結文字需描述目的地，避免「點此」「更多」。

### Meta 與結構化資料

- 每頁有獨立的 `<title>`、`<meta name="description">`、canonical URL、Open Graph 與 Twitter Card 標籤。
- 使用 JSON-LD（schema.org）標記：
  - 全站：`Organization`（`name` 為 AIDA，`alternateName` 為 AI DefTech Accelerator，並註明與挺立資本的關係；含 logo、聯絡方式、`sameAs` 連結）、`WebSite`
  - 服務頁：`Service`；會員方案：`Offer`（價格確認後才加）
  - 場域：`Place`（台中會議中心含地址；升暘聚場不需寫地址，目前沒有強制）
  - 論壇：`Article`；新聞：`NewsArticle`；課程與論壇活動：`Event`
  - 各頁：`BreadcrumbList`；有問答區塊時：`FAQPage`
- 結構化資料內容必須與頁面上可見的文字一致。

### 為 AEO / GEO 撰寫內容

- 重要頁面在開頭以一兩句話直接回答「這是什麼／適合誰／如何參與」，再展開細節。
- 標題可採問句形式（例如「AIDA 是什麼？」「什麼是 AIDA 的題目？」「新創如何加入 AIDA？」），並在其下方緊接明確答案。
- 關鍵事實（名稱、領域、流程步驟、聯絡方式）以清楚的句子或列表呈現，方便被引用。
- 題目、服務、會員方案等頁面提供 FAQ 區塊並搭配 `FAQPage` 結構化資料。

### 站點層級檔案

- `sitemap.xml`（含中英文版）、`robots.txt`，並提供 `llms.txt` 讓 AI 工具理解網站結構。

### 定義句寫法

- 句型：「[名詞] 是 [類別]，[用途／特徵]，[對象或效果]。」
- 主詞用全名，一句 40–80 字，不只用形容詞；放在 H1 下或「什麼是 X？」下的第一句。
- 範例（未經主管確認，僅示範句型）：「AIDA（AI DefTech Accelerator）是由挺立資本投資營運的 AI 國防科技加速器，將軍方實際需求整理成題目，結合 AI 算力、專利、會計與上市顧問資源，輔導新創開發市場需要的軍工產品。」
- 段落要能獨立被引用，不用「如上所述」「這個方法」這類依賴上下文的寫法。
- 內容頁加入：作者、發布／更新日期（`<time>`）、重點摘要、比較表（HTML `<table>`）、步驟用有序清單、FAQ（每題 40–60 字）。

## 部署方式與環境

| 項目 | 做法 | 理由 |
|---|---|---|
| 前台 | 純 HTML + Tailwind CSS，輸出靜態檔 | 原始 HTML 一定有內容，AI 爬蟲讀得到；速度快 |
| 程式碼 | GitHub | push 觸發自動部署 |
| 部署 | Cloudflare Pages | 免費方案可商用，靜態流量不限 |
| CMS 後台 | 暫不需要；日後需要時再用 Laravel + Filament 自建 | 目前由開發者直接改 HTML 更新；符合公司 PHP 技術棧 |
| 網域 | `aida.com`（暫定，需確認可註冊） | |

### 內容更新

- 目前由開發者直接修改 HTML 更新內容，約每週 1–2 次，暫不建 CMS。
- 新增文章或新聞時：建立新資料夾與 `index.html`、更新列表頁、更新 `sitemap.xml`（含 `lastmod`），中英文版一起處理。
- 若日後改由非工程同事更新（例如論壇文章改由主管或作者自行發布），或更新頻率明顯提高，再規劃 CMS。

### 網址規則

**HTML 版即為第一個正式上線版本，以下網址規則上線後不再更改。**

- 網域：`https://aida.com`（暫定；會議決議網域待架構確定、名稱查證後再申請），全站使用 https，不帶 `www`（`www` 版 301 轉址到不帶 `www`）。
- 使用資料夾結構，結尾有斜線：`/about/index.html` → 網址為 `/about/`。
- 中文為預設語言放在根目錄；英文版放在 `/en/` 底下，**slug 與中文版完全相同**（例如 `/about/` ↔ `/en/about/`）。
- 同一頁只有一個正式網址：設 canonical，其他寫法 301 轉址；內部連結與 sitemap 統一格式。
- 網址一旦上線不再更改；若必須更改，一定要設 301 轉址。

### Slug 規則

slug 是網址中代表該頁的那一段英文（例如 `/membership/` 中的 `membership`）。

- 只用**小寫英文字母、數字與連字號 `-`**；不用中文、空格、底線、大寫。
- 用 2–4 個有意義的英文單字描述內容，字與字之間以 `-` 連接。
- 不放日期、流水號或檔名（避免 `/news/2026-11-02/`、`/page1/`、`.html`）。
- 去掉 a、the、and 等虛詞；同一概念全站用同一個字（例如統一用 `investment` 而不是混用 `invest`）。
- 文章與新聞的 slug 描述主題，不照抄完整中文標題的翻譯，以免標題修改後網址跟著變。

**主要頁面 slug（定案）**

| 頁面 | 中文網址 | 英文網址 |
|---|---|---|
| 首頁 | `/` | `/en/` |
| 關於 AIDA | `/about/` | `/en/about/` |
| 題目 | `/challenges/`、`/challenges/<題目-slug>/` | `/en/challenges/…` |
| 服務 | `/services/`、`/services/<服務-slug>/` | `/en/services/…` |
| 平台成員 | `/members/` | `/en/members/` |
| 會員方案 | `/membership/` | `/en/membership/` |
| 場域 | `/venues/` | `/en/venues/` |
| 論壇 | `/forum/`、`/forum/<主題>/`、`/forum/<主題>/<文章-slug>/` | `/en/forum/…` |
| 新聞 | `/news/`、`/news/<新聞-slug>/` | `/en/news/…` |
| 聯絡我們 | `/contact/` | `/en/contact/` |
| 隱私權政策 | `/privacy/` | `/en/privacy/` |

服務子頁 slug：`acceleration`、`accounting`、`patent-ip`、`ai-computing`、`investment-ipo`、`company-registration`。

論壇主題 slug（暫定，依主管提供的分類調整）：`war-footage`（戰爭影像）、`analysis`（現況分析）、`international`（國際資訊）。

文章 slug 範例：「烏克蘭反無人機戰術觀察」→ `/forum/analysis/ukraine-counter-drone-tactics/`。

### HTML 開發規則

- 重要內容直接寫在 HTML 裡，不用 JavaScript 產生；折疊、tab 內的內容也要存在 HTML 中。
- 每頁 `<head>` 寫好 title、description、canonical、OG、JSON-LD。
- 顏色、間距用 CSS 變數 / Tailwind theme 管理；區塊用 class 前綴切分。
- 少用 jQuery 操作 DOM；必要的互動用少量原生 JavaScript。
- 重複資料（題目、服務、論壇文章列表、FAQ）先整理成 JSON，方便日後轉 Nuxt 或接 CMS。

### Cloudflare Pages

- push 到 `main` 自動部署到正式站；其他分支會產生獨立預覽網址（`xxx.pages.dev`）。
- **預覽網址是公開的**：上線前所有頁面加 `<meta name="robots" content="noindex">` 或設密碼，避免測試站被收錄。
- 正式上線時：綁定公司網域、移除 `noindex`、提交 Google Search Console 與 Bing、`robots.txt` 放行 AI 爬蟲。
- 上線後每月抽查 ChatGPT、Perplexity、Gemini 對 AIDA 的描述是否正確。

### 日後轉 Nuxt 的規則

若之後決定改用 Nuxt：

- 對外公開頁面必須是 SSG（prerender）或 SSR，**不可設定 `ssr: false`**。
- 頁面資料用 `useFetch` 或 `useAsyncData` 取得，不要放在 `onMounted` 或 `<ClientOnly>` 裡。
- 設定 `trailingSlash: true`，網址必須與 HTML 版完全一致。
- meta 改用 `useSeoMeta()`，JSON-LD 改用 `useSchemaOrg()`，sitemap / robots 改用對應模組。
- 元件內的標題層級用 props 傳入，避免層級錯亂。
- 轉完後逐頁比對新舊版原始碼：網址、title、description、canonical、H1/H2、內文、JSON-LD、alt、OG、sitemap 頁數。

### 自我檢查（每頁完成後）

用瀏覽器「檢視網頁原始碼」（Ctrl+U；Mac 為 ⌘+Option+U），搜尋頁面上的一段文字：找得到才算合格。不要用 F12 開發者工具判斷。

## 開發 / 建置指令

**專案結構**

```
src/
  pages/            來源頁面（結構對應最終網址，例如 src/pages/about/index.html → /about/）
                    英文版放在 src/pages/en/ 底下，結構與中文版對應
  partials/         共用元件：head-common.zh.html / header.zh.html / nav.zh.html /
                    footer.zh.html / logo.html（英文版上線後補 .en.html），
                    用 <!-- include:partials/xxx.html --> 在 src/pages 的頁面中引入
  styles/main.css   Tailwind 進入點，品牌 design tokens 以 @theme 集中管理
  data/home.json    首頁重複資料（題目、服務、步驟、場域、新聞、FAQ）
  root/              原樣複製到 dist 根目錄的檔案：robots.txt、sitemap.xml、llms.txt、
                    _headers、favicon、assets/js/main.js（互動效果）、assets/images/（WebP）
scripts/build-pages.mjs   組裝 src/pages 的 include，並複製 src/root，輸出到 dist/
dist/                建置產物（已加入 .gitignore，不進版控；Cloudflare Pages 以此為發布目錄）
```

- `<!-- include:partials/xxx.html -->` 是 build time 的純字串替換（node 執行，無瀏覽器端 JavaScript），符合「主要內容須在初始 HTML 中就存在」的規範；最終部署的 HTML 檔案裡已經是展開後的完整內容。
- 新增頁面時：在 `src/pages/<路徑>/index.html` 寫結構骨架，用 include 引入對應語言的 header/footer，`<main>` 內容照該頁規範撰寫；英文版放在 `src/pages/en/<相同路徑>/index.html`。

**安裝**

```bash
npm install
```

**開發**（需要開兩個終端機分別跑 CSS 與頁面組裝的監看模式）

```bash
npm run dev:css
```
```bash
npm run dev:pages
```

**建置**（組裝頁面 + 編譯並壓縮 CSS，輸出到 `dist/`）

```bash
npm run build
```

**單獨指令**

- `npm run build:pages`：只組裝 `src/pages` 的 include，並複製 `src/root` 到 `dist/`。
- `npm run build:css`：只用 Tailwind CLI 編譯 `src/styles/main.css` 到 `dist/assets/css/main.css`（`--minify`）。

Cloudflare Pages 建置設定：Build command `npm run build`，Build output directory `dist`。

## 已決定事項

- [x] 內容更新：由開發者直接修改 HTML，約每週 1–2 次，暫不建 CMS。
- [x] 第一個上線版本為 HTML 版，網址與 slug 規則已定案（見「網址規則」「Slug 規則」）。
- [x] 網域暫定 `aida.com`（正式申請待名稱查證）。
- [x] 網站以 AIDA 加速器平台為主體，不另建挺立資本網站；不設獨立團隊頁（2026-10-27 會議決議）。
- [x] Tailwind 版本與建置方式：**Tailwind CSS v4**（CLI 套件 `@tailwindcss/cli`，無需 PostCSS 設定檔；`@theme` 於 `src/styles/main.css` 管理 design tokens）。頁面組裝用自寫的輕量 Node 腳本 `scripts/build-pages.mjs`（純字串 include 替換，無額外框架），詳見「開發 / 建置指令」。

## 待決定事項

- [ ] 確認 `aida.com` 是否可取得；若改用其他網域，更新本檔所有網址範例。
- [ ] AIDA 名稱是否可用：歐盟防務基金已有同名的 AIDA 計畫，同屬國防領域。
- [ ] AIDA 定義句與各項服務說明（主管確認）。
- [ ] 題目清單與內容（主管提供）。
- [ ] 會員方案：月費或年費、金額、折抵範圍、8 折適用項目（主管確認）。
- [ ] 論壇形式：專欄文章、系列課程或互動討論；主題分類與首批內容（主管提供）。
- [ ] 預約系統：能否串接升暘聚場現有系統。
- [ ] 升暘聚場照片（主管提供）。
