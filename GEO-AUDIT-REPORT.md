# GEO 稽核報告：AIDA（AI DefTech Accelerator）

**稽核日期：** 2026-11-06
**網址：** http://localhost:4173/（本機建置版；正式網址暫定 `https://aida.com`）
**網站類型：** 服務型組織（加速器平台，Agency/Services 為主，兼具 Local 場域資訊）
**分析頁數：** 1（目前只有首頁；首頁連到的 25 個內部頁面尚未建立）

> **前提說明：** 網站尚未上線，首頁有 `noindex`，網域也還沒確定。所以「品牌權威」「平台曝光」這兩項分數本來就會很低。這份報告的重點在**上線前能先修好的站內問題**。

---

## 摘要

**整體 GEO 分數：43/100（Poor）**

站內技術基礎很好：純靜態 HTML、AI 爬蟲全部放行、有 `llms.txt`、JSON-LD 完整、定義句與 FAQ 寫法符合規範。分數被拉低的原因有三個：
1. 網路上完全沒有這個 AIDA 的品牌資料，而且名稱和美國國防部、歐盟 EDF 的 AIDA 計畫，以及新加坡的 AIDA Technologies 撞名。
2. 頁面缺少可信度訊號：沒有聯絡方式、案例全是佔位文字、新聞是示意內容。
3. 首頁連到的 25 個內部頁面都還沒做，目前全是 404。

### 分數明細

| 類別 | 分數 | 權重 | 加權分數 |
|---|---|---|---|
| AI 可引用性（Citability） | 58/100 | 25% | 14.5 |
| 品牌權威（Brand Authority） | 10/100 | 20% | 2.0 |
| 內容 E-E-A-T | 35/100 | 20% | 7.0 |
| 技術 GEO | 62/100 | 15% | 9.3 |
| 結構化資料（Schema） | 72/100 | 10% | 7.2 |
| 平台優化（Platform） | 25/100 | 10% | 2.5 |
| **整體 GEO 分數** | | | **42.5 ≈ 43/100** |

**預估：** 下面「上線前必修」的項目都做完、網站正式上線後，站內三項（可引用性、技術、Schema）可以達到 75–85 分，整體分數大約 55–60。之後要再往上，要靠站外的品牌建立。

---

## Critical（上線前必修）

1. **頁面有 `noindex, nofollow`**：位置在 `src/pages/index.html` 第 8 行，搜尋引擎和 AI 都不會收錄這個頁面。
   - 現在是刻意加的（避免 `*.pages.dev` 預覽站被收錄），沒有問題。
   - 但正式上線當天一定要移除。建議把這件事寫進上線檢查清單。
2. **網域 `https://aida.com` 還是佔位網址**：canonical、og:url、sitemap、robots.txt、llms.txt、JSON-LD 的 `@id` 都指向它。
   - `aida.com` 很可能是別人的網域。如果沒替換就上線，canonical 會告訴搜尋引擎「正式版本在別人的網站」，整站權重都會流到別人那裡。
   - 修法：網域確定後，在 `src/` 全站搜尋並取代。
3. **首頁連到的 25 個內部頁面都是 404**：例如 `/about/`、`/challenges/*`、`/services/*`、`/forum/*`、`/news/*`、`/contact/`、`/privacy/`、`/en/`。
   - 爬蟲遇到大量死連結，會降低對整個網站的信任。JSON-LD 裡 6 個 Service 的 `url` 也都指向不存在的頁面。
   - 修法：上線前先把頁面做出來；還沒做的，先把連結拿掉，或改成連到首頁內的錨點。

## High（1 週內）

4. ~~升暘聚場的地址違反專案規範~~ **已確認不需修改（2026-11-06）**：規範已改成「升暘聚場不需寫地址，目前沒有強制」。現在頁面上的地址可以保留，頁尾、場域區塊、JSON-LD、llms.txt 四處的地址也都一致。
5. **沒有聯絡方式**：全頁沒有電話、Email（沒有 `mailto:` 或 `tel:`），Organization 也沒有 `contactPoint`。
   - 規範要求 Organization 要有聯絡方式和 `sameAs`。這兩樣也是 AI 判斷「這是真實組織」的關鍵訊號。
   - 修法：頁尾加上電話和 Email，Organization 加 `contactPoint`；資料要和 PT 網站、Google 商家一致。
6. **Organization 沒有 `sameAs`**：AI 沒有任何外部連結可以比對這個實體，加上名稱撞名，很容易把你們跟美國國防部的 AIDA 搞混。
   - 修法：建立 LinkedIn 公司頁、Google 商家檔案（台中會議中心），把網址加進 `sameAs`。挺立資本官網、升暘科技官網也要互相連結。
7. **案例區是 6 張佔位卡片**：標題都是 `[ 案例標題：新創名稱與成果，一到兩行 ]`，內文是 `[ 新創／合作單位名稱 ]`。
   - 佔位文字被收錄，會直接傷害可信度。
   - 修法：上線前換成真實案例；沒有案例就先把整個區塊隱藏。

## Medium（1 個月內）

8. **論壇和新聞是示意內容**：1 篇論壇文章、3 則新聞都標註 `sample`。
   - 修法：換成真的文章；每篇加作者、`<time>` 發布日期、`Article` / `NewsArticle` 結構化資料。
9. **服務說明太短，AI 很難引用**：6 項服務每項只有 15–33 個字，例如「新創營運所需的財務與會計支援。」，沒有具體做什麼、給誰用、怎麼申請。
   - 修法：首頁維持短版，但每項服務頁要有 40–80 字的定義句、適用對象、流程和 FAQ（見下方「改寫範例」）。
10. **缺少「新創如何加入 AIDA？」的直接答案**：CLAUDE.md 範例列了這個問句，但頁面和 FAQ 都沒有。這是新創最常問的問題。
    - 修法：在 FAQ 加一題，並同步更新 `FAQPage` 結構化資料。條件是會員方案價格要先經主管確認。
11. **導覽列有連到 `/en/`，但英文版還沒做**：修法是英文版上線前先隱藏這個連結。

## Low（有空再做）

13. **Google Fonts 會延遲首屏顯示**：頁面一次載入 3 個字型家族，其中 Noto Sans TC 是很大的中文字型，在手機上會拖慢 LCP（最大內容繪製）。可以考慮減少字重，或把字型放在自己的網站上。
14. **`_headers` 缺少 HSTS 和 CSP**：Cloudflare 可以在後台開 HSTS；CSP 等外部資源固定下來後再加。
15. **`venue-dusk-lawn-sm.webp` 有 85 KB**：它是「小圖」版本，但比其他小圖大很多，可以再壓縮。
16. **英文副標在字中間用 `<br>` 斷行**：例如 `What is<br>AIDA`、`Join the<br>Mission`。多數爬蟲會把 `<br>` 當成換行，影響不大；但比較簡單的文字擷取工具會把字黏成 `What isAIDA`。保險的做法是在 `<br>` 前補一個空格。

---

## 各類別細節

### AI 可引用性（58/100）

**做得好的：**
- 定義句完全符合規範的句型（主詞用全名、約 100 字、可以單獨被引用），而且放在「AIDA 是什麼？」下面的第一句。
- 有問句式標題：「AIDA 是什麼？」「AIDA 如何運作？」。
- 運作方式是 4 個步驟的清單，結構清楚。
- 每張圖片都有具體的 alt，例如「台中會議中心會議室：長桌、多張座椅、壁掛螢幕與白板」。

**問題：**
- 頁面可見的內文大約 2,700 字元，其中很大一部分是英文裝飾小標（`ABOUT`、`CHALLENGES`…）和佔位文字。真正有資訊量的段落只有 4–5 段。
- 「精選題目」只有標題和負責成員，沒有說明題目在解決什麼問題。這是 AIDA 最有特色的內容，卻最單薄。
- 「加速燃料」是內部用語，AI 和使用者都不懂它在講什麼。建議在旁邊並列「服務」這個詞（規範也要求先經主管確認）。

**改寫範例（題目卡片）：**
- 現在：「快速製造無人機」＋「負責成員：SRA 升暘科技」
- 建議：「快速製造無人機題目：針對 ⟨軍方實際需求⟩，徵求能在 ⟨時程⟩ 內完成 ⟨規格⟩ 的新創團隊，由 SRA 升暘科技負責技術輔導。」（尖括號內的內容需主管提供）

### 品牌權威（10/100）

- 用「AI DefTech Accelerator」「挺立資本」搜尋，找不到任何跟本網站有關的結果。
- 撞名很嚴重，搜尋「AIDA accelerator defense AI」會出現：
  - 美國國防部的 **AI and Data Accelerator（ADA）／AIDA initiative**
  - 歐盟 EDF 的 **Artificial Intelligence Deployable Agent（AIDA）**
  - 新加坡的 **AIDA Technologies**（Mastercard 投資的 AI 公司）
- 頁面已經有「與美國國防部、歐盟 EDF 的 AIDA 無關」的說明（llms.txt），這個做法很好。建議把同一句話也放進首頁可見的 FAQ。
- 平台曝光現況：Wikipedia 無、Reddit 無、YouTube 無、LinkedIn 未確認。
- 建議一律使用完整名稱「AIDA AI DefTech Accelerator」，加上「台灣」「挺立資本」等限定詞，跟其他同名組織做出區隔。

### 內容 E-E-A-T（35/100）

- **經驗（Experience）**：沒有真實案例、成果數字，也沒有新創的推薦證言。
- **專業（Expertise）**：服務說明很籠統；論壇是專業內容的主要來源，但目前是示意內容。
- **權威（Authoritativeness）**：沒有合作單位 logo，也沒有任何外部引用。
- **可信度（Trustworthiness）**：
  - 好的地方：有實體地址、營業時間，有「不是美國國防部 AIDA」的澄清。
  - 缺少的：電話、Email、隱私權政策頁（目前 404）、公司登記資訊。
- 規範規定不寫個別成員背景、不做團隊頁，所以「誰在運作」要改用組織層級的資訊來補，例如挺立資本的公司資料、與升暘科技的關係說明。

### 技術 GEO（62/100，上線後預估 85）

| 項目 | 狀態 |
|---|---|
| 伺服器端／靜態 HTML | ✅ 所有內容都在初始 HTML 裡，不依賴 JS |
| robots.txt AI 爬蟲 | ✅ GPTBot、OAI-SearchBot、ChatGPT-User、ClaudeBot、Claude-SearchBot、Claude-User、PerplexityBot、Google-Extended、Applebot-Extended 全部放行 |
| llms.txt | ✅ 有，結構清楚；⚠️ 列出的 10 個頁面都還不存在 |
| sitemap.xml | ✅ 有；⚠️ 只列首頁 |
| noindex | ❌ 有（刻意的，上線前要移除） |
| canonical／網域 | ❌ 是佔位網址 `aida.com` |
| 內部連結 | ❌ 25 個連結都是 404 |
| lang／hreflang | ✅ `zh-Hant-TW`、x-default |
| 語意化 landmark | ✅ 有 header、nav、main、footer，只有一個 H1，標題層級沒有跳級 |
| 圖片 | ✅ 15 張都有 alt 和寬高，有 srcset，首屏圖有 preload |
| 檔案大小 | ✅ HTML 55 KB、CSS 27 KB、JS 8 KB |
| 安全標頭 | 🟡 有 nosniff、Referrer-Policy、X-Frame-Options、Permissions-Policy；缺 HSTS、CSP |
| 首屏渲染 | 🟡 Google Fonts 會阻擋渲染 |

### 結構化資料（72/100）

**已有：** 一個 `@graph`，包含 Organization、WebSite、WebPage、兩個 Place、ItemList（6 個 Service）、FAQPage（3 題）。JSON 格式檢查通過，FAQ 的內容和頁面可見文字一致，Organization 有 `funder: 挺立資本`，正確表達了兩者的關係。

**缺少／要修的：**
- Organization 缺 `sameAs` 和 `contactPoint`（規範要求）。
- 6 個 Service 的 `url` 都指向還不存在的頁面。
- 可以補 `Organization.foundingDate`、`areaServed: TW`。
- 新聞和論壇改成真實內容後，要加 `NewsArticle`、`Article`（含作者、`datePublished`）；課程和論壇活動加 `Event`。

### 平台優化（25/100）

| 平台 | 準備程度 | 主要障礙 |
|---|---|---|
| Google AI Overviews | 低 | noindex、沒有外部權威訊號 |
| ChatGPT 搜尋 | 低 | 沒有品牌實體，撞名 |
| Perplexity | 中低 | 爬蟲有放行，但內容太少 |
| Gemini | 低 | 沒有 Google 商家檔案 |
| Bing Copilot | 低 | 還沒提交到 Bing Webmaster |

---

## 本週就能做的（Quick Wins）

1. **在升暘聚場的區塊加上連到它自己網站的連結**（規範第 92 行），讓兩個網站互相連結。
2. **頁尾加上電話和 Email**，Organization 補 `contactPoint`。這是可信度最基本的訊號。
3. **還沒做的頁面先處理掉連結**：拿掉、改成錨點，或先做簡單的頁面，消除 25 個 404。
4. **案例區先隱藏**，等有真實案例再放上來。
5. **在 FAQ 加「這個 AIDA 和美國國防部的 AIDA 有什麼不同？」**，並同步更新 FAQPage。這能直接緩解撞名問題。

## 30 天行動計畫

### 第 1 週：上線前修正
- [ ] 處理 25 個死連結和 `/en/` 連結
- [ ] 隱藏案例佔位區塊
- [ ] 頁尾和 Organization 加上電話、Email（`contactPoint`）

### 第 2 週：必備頁面
- [ ] 做出 `/about/`、`/services/`、`/contact/`、`/privacy/`（規範列為必備頁）
- [ ] 每頁都要有獨立的 title、description、canonical、BreadcrumbList
- [ ] 服務頁各自補上 40–80 字的定義句和 FAQ
- [ ] 更新 sitemap.xml 和 llms.txt

### 第 3 週：上線
- [ ] 確定網域，全站取代 `aida.com`
- [ ] 移除 `noindex`
- [ ] 提交 Google Search Console 和 Bing Webmaster
- [ ] 在 Cloudflare 開啟 HSTS

### 第 4 週：站外實體建立
- [ ] 建立 LinkedIn 公司頁、台中會議中心的 Google 商家檔案
- [ ] 把這些網址加進 `sameAs`
- [ ] 挺立資本官網、升暘科技官網、PT 網站互相連到 AIDA，公司資料保持一致
- [ ] 發布第一篇真實的論壇文章和新聞（含作者、日期、Article 結構化資料）

---

## 附錄：分析頁面

| 網址 | 標題 | 問題數 |
|---|---|---|
| http://localhost:4173/ | AIDA AI DefTech Accelerator｜AI 國防科技加速器 | 15 |
| /about/、/challenges/、/services/、/members/、/membership/、/venues/、/forum/、/news/、/en/、/contact/、/privacy/ 及 14 個子頁 | — | 404（尚未建立） |

**參考來源：**
- [Mastercard joins investment round for Singapore AI start-up AIDA](https://fintechfutures.com/?p=15185414)
- [AI Algorithms Could Rapidly Deploy to the Battlefield Under New Initiative (Nextgov)](https://nextgov.com/emerging-tech/2022/02/ai-algorithms-could-rapidly-deploy-battlefield-under-new-initiative/361790)
- [DOD rolling out new AI and data accelerator initiative (Inside Defense)](https://insidedefense.com/node/211865)
- [Thales and partners selected for first European project to develop sovereign AI for embedded cyberdefence (EDR Magazine)](https://www.edrmagazine.eu/intelligence-thales-and-partners-selected-for-first-european-project-to-develop-sovereign-ai-for-embedded-cyberdefence)
