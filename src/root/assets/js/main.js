/*
 * AIDA 官網互動效果（原生 JavaScript，無相依套件）
 * 所有內容都已寫在 HTML 裡；這支檔案只負責動態效果，沒有載入也不影響內容閱讀與爬蟲收錄。
 *
 * 效果：
 *  1. Banner 輪播（每 6 秒切換，點圓點可切換）
 *  2. 區塊疊蓋：[data-stack] 區塊捲到底後釘住，下一區蓋上來，被蓋住的區塊縮小變暗
 *  3. 圖片在框內的視差位移 [data-img-parallax]，滑鼠移入時微放大
 *  4. 往下捲時收起頁首 [data-header]，往上捲時出現
 *  5. 標題隨滑鼠上下左右晃動 [data-mouse-sway]
 *  6. 文字隨捲動橫向位移 [data-parallax-x]
 *  7. 進入畫面時向上淡入 [data-reveal]（父層可用 data-reveal-step 設定依序間隔 ms）
 */
(() => {
  'use strict';

  const CONFIG = {
    parallaxIntensity: 2,   // 視差強度（0–2）
    carouselInterval: 6000, // 輪播間隔（ms）
    stackHold: 0.4,         // 區塊底部多捲過畫面幾成高度才開始被蓋住
    revealOffset: 72,       // 淡入前的位移距離（px）
    revealStep: 90          // 預設依序淡入的間隔（ms）
  };

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const motionOn = !reduceMotion;
  const k = motionOn ? CONFIG.parallaxIntensity : 0;
  const ease = 'cubic-bezier(.2,.7,.2,1)';

  /* ---------- 1. Banner 輪播 ---------- */
  const slides = [...document.querySelectorAll('[data-carousel] .aida-hero__slide')];
  const dots = [...document.querySelectorAll('[data-carousel-dots] button')];
  let current = 0;
  let timer = null;

  const showSlide = (n) => {
    if (!slides.length) return;
    current = (n + slides.length) % slides.length;
    slides.forEach((el, i) => {
      el.classList.toggle('is-active', i === current);
      if (i === current) el.loading = 'eager';
    });
    dots.forEach((el, i) => {
      el.classList.toggle('is-active', i === current);
      el.setAttribute('aria-current', i === current ? 'true' : 'false');
    });
  };
  const startCarousel = () => {
    clearInterval(timer);
    if (slides.length > 1) timer = setInterval(() => showSlide(current + 1), CONFIG.carouselInterval);
  };
  dots.forEach((dot, i) => dot.addEventListener('click', () => { showSlide(i); startCarousel(); }));
  document.addEventListener('visibilitychange', () => (document.hidden ? clearInterval(timer) : startCarousel()));
  // 頁面載入完成後再預先載入其他張，切換時不會閃白，也不影響首屏速度
  window.addEventListener('load', () => slides.slice(1).forEach((el) => { el.loading = 'eager'; }));
  startCarousel();

  /* ---------- 共用：捲動與滑鼠狀態 ---------- */
  const header = document.querySelector('[data-header]');
  const main = document.querySelector('main');
  const stacks = [...document.querySelectorAll('[data-stack]')];
  const parallaxImgs = [...document.querySelectorAll('[data-img-parallax]')];
  const swayEls = [...document.querySelectorAll('[data-mouse-sway]')];
  const parallaxX = [...document.querySelectorAll('[data-parallax-x]')];
  const reveals = [...document.querySelectorAll('[data-reveal]')];

  let mouseX = 0, mouseY = 0, swayX = 0, swayY = 0;
  let lastMainTop = null, headerHidden = false;

  if (motionOn) {
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX / (window.innerWidth || 1) - 0.5;
      mouseY = e.clientY / (window.innerHeight || 1) - 0.5;
    }, { passive: true });
  }

  /* ---------- 7. 淡入：先把還沒進入畫面的元素藏起來（只有 JS 執行時才會藏） ---------- */
  if (motionOn) {
    const vh = window.innerHeight;
    reveals.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > 0) { el.dataset.rv = 'done'; return; }
      const siblings = [...el.parentElement.children].filter((c) => c.hasAttribute('data-reveal'));
      const step = parseFloat(el.parentElement.dataset.revealStep) || CONFIG.revealStep;
      const delay = Math.max(0, siblings.indexOf(el)) * step;
      el.style.transition = `opacity 1.1s ${ease} ${delay}ms, transform 1.1s ${ease} ${delay}ms`;
      el.style.opacity = '0';
      el.style.transform = `translateY(${CONFIG.revealOffset}px)`;
      el.dataset.rv = 'wait';
      el.dataset.rvDelay = String(delay);
    });
  }

  const tick = () => {
    const vh = window.innerHeight || document.documentElement.clientHeight;

    /* 2. 區塊疊蓋 */
    if (motionOn) {
      stacks.forEach((s, i) => {
        const h = s.offsetHeight;
        const stickTop = Math.min(0, vh - h - vh * CONFIG.stackHold);
        s.style.position = 'sticky';
        s.style.top = `${stickTop}px`;
        s.style.zIndex = String(i + 1);
        if (i > 0) s.style.boxShadow = '0 -28px 64px rgba(0,0,0,0.38)';
        const next = stacks[i + 1];
        let p = 0;
        if (next) {
          const pinBottom = stickTop + h;
          const covered = (pinBottom - next.getBoundingClientRect().top) / Math.max(1, pinBottom);
          p = Math.min(1, Math.max(0, (covered - 0.5) * 2)); // 下一區蓋到一半才開始
        }
        if (p > 0) {
          s.style.transformOrigin = `50% ${(-stickTop + vh / 2).toFixed(0)}px`;
          s.style.transform = `scale(${(1 - 0.06 * p * Math.min(k, 1.5)).toFixed(4)})`;
          s.style.filter = `brightness(${(1 - 0.55 * p).toFixed(3)})`;
        } else if (s.style.transform) {
          s.style.transform = '';
          s.style.filter = '';
        }
      });
    }

    /* 3. 圖片視差 */
    parallaxImgs.forEach((img) => {
      const r = img.parentElement.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      const off = (r.top + r.height / 2 - vh / 2) / vh;
      const y = motionOn ? Math.max(-8, Math.min(8, -off * 9 * k)) : 0;
      const host = img.closest('figure, a, article');
      const zoom = host && host.matches(':hover') ? 1.26 : 1.18;
      if (!img.style.transition) img.style.transition = `transform .6s ${ease}`;
      img.style.transform = `translate3d(0,${y.toFixed(2)}%,0) scale(${zoom})`;
    });

    /* 4. 頁首收合 */
    if (header && main && motionOn) {
      const mt = main.getBoundingClientRect().top;
      if (lastMainTop !== null) {
        const d = mt - lastMainTop;
        if (d < -3 && mt < -160) headerHidden = true;
        else if (d > 3 || mt > -160) headerHidden = false;
      }
      lastMainTop = mt;
      header.classList.toggle('is-hidden', headerHidden);
    }

    /* 5. 滑鼠晃動 */
    if (motionOn) {
      swayX += (mouseX - swayX) * 0.07;
      swayY += (mouseY - swayY) * 0.07;
      swayEls.forEach((el) => {
        const amt = parseFloat(el.dataset.mouseSway) || 30;
        const tx = swayX * 2 * amt * k;
        const ty = swayY * 2 * amt * 0.75 * k;
        el.style.transform = `translate3d(${tx.toFixed(1)}px,${ty.toFixed(1)}px,0) rotate(${(swayX * 2.4).toFixed(2)}deg)`;
      });

      /* 6. 橫向位移 */
      parallaxX.forEach((el) => {
        const r = el.parentElement.getBoundingClientRect();
        const off = r.top + r.height / 2 - vh / 2;
        const x = parseFloat(el.dataset.parallaxX) * off * k;
        el.style.transform = `translate3d(${x.toFixed(1)}px,0,0)`;
      });

      /* 7. 淡入 */
      reveals.forEach((el) => {
        if (el.dataset.rv !== 'wait') return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          el.dataset.rv = 'done';
          // 動畫結束後清掉行內樣式，讓 hover 的位移效果可以作用
          const wait = 1800 + (parseFloat(el.dataset.rvDelay) || 0);
          setTimeout(() => { el.style.transition = ''; el.style.transform = ''; el.style.opacity = ''; }, wait);
        }
      });
    }

    requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
})();
