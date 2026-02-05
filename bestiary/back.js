import { DATA } from "./data.js";
import { emote } from "../emoji.js";
let index = 0;

const div1 = document.getElementById("div1");
const div4 = document.getElementById("div4");
const div3 = document.getElementById("div3");
const div5 = document.getElementById("div5");
const div6 = document.getElementById("div6");
const page = document.getElementById("page");
const imgA = document.getElementById("imgA");
const imgB = document.getElementById("imgB");
const flipCard = document.getElementById("flipCard");
const searchBtn = document.getElementById('searchBtn');
const searchPopup = document.getElementById('searchPopup');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const searchClose = document.getElementById('searchClose');
const bookmarks = document.querySelectorAll('.bookmark');
const levelBadge = document.getElementById('levelBadge');

// Create a single tooltip element for drop hover text
const _dropTooltipEl = (function(){
  const el = document.createElement('div');
  el.className = 'drop-tooltip';
  el.setAttribute('aria-hidden', 'true');
  document.body.appendChild(el);
  return el;
})();

function showDropTooltip(text, x, y) {
  if (!_dropTooltipEl) return;
  _dropTooltipEl.textContent = text || '';
  _dropTooltipEl.style.display = 'block';
  const pad = 8;
  // measure after setting text
  const rect = _dropTooltipEl.getBoundingClientRect();
  const w = rect.width || 160;
  const h = rect.height || 24;
  let left = (x || 0) + 12;
  let top = (y || 0) + 12;
  if (left + w + pad > window.innerWidth) left = window.innerWidth - w - pad;
  if (top + h + pad > window.innerHeight) top = window.innerHeight - h - pad;
  _dropTooltipEl.style.left = left + 'px';
  _dropTooltipEl.style.top = top + 'px';
  _dropTooltipEl.setAttribute('aria-hidden','false');
}

function hideDropTooltip(){
  if (!_dropTooltipEl) return;
  _dropTooltipEl.setAttribute('aria-hidden','true');
  _dropTooltipEl.style.display = 'none';
}

function attachDropTooltips(container){
  if (!container) return;
  const anchors = container.querySelectorAll('a[data-tooltip]');
  anchors.forEach(a => {
    const txt = a.dataset.tooltip || a.title || (a.querySelector('img') && a.querySelector('img').alt) || '';
    a.removeAttribute('title');
    a.addEventListener('mouseenter', (e) => { showDropTooltip(txt, e.clientX, e.clientY); });
    a.addEventListener('mousemove', (e) => { showDropTooltip(txt, e.clientX, e.clientY); });
    a.addEventListener('mouseleave', hideDropTooltip);
    a.addEventListener('focus', (e) => { const r = a.getBoundingClientRect(); showDropTooltip(txt, r.left + r.width/2, r.top); });
    a.addEventListener('blur', hideDropTooltip);
  });
}

// Hide tooltip on Escape for accessibility
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') hideDropTooltip(); });

function updatePageText() {
  page.value = `Page ${index + 1} / ${DATA.length}`;
}

function render() {
  const d = DATA[index];

  div1.textContent = d.name || "";
  div4.textContent = d.grade || "";

  div3.innerHTML = emote(d.description || "");
  // Render drops (structured list) so images/links are easy to edit via data.js
  div5.innerHTML = '';
  if (Array.isArray(d.drops) && d.drops.length) {
    const li = document.createElement('li');
    li.innerHTML = (
      emote(d.details || '') + ' ' +
      d.drops.map(dp =>
        `<a href="${dp.href || '#'}" data-tooltip="${dp.alt || ''}">
          <img src="${dp.src}" alt="${dp.alt || ''}" class="drop-img">
        </a>`
      ).join(' ')
    ).trim();
    div5.appendChild(li);
    attachDropTooltips(li);
  } else if (d.details) {
    const li = document.createElement('li');
    li.innerHTML = emote(d.details);
    div5.appendChild(li);
  }

  div6.innerHTML = emote(d.extra || "");

  function setImg(el, src, altSuffix) {
    if (!el) return;
    if (!src || String(src).toLowerCase().startsWith("placeholder")) {
      el.style.display = "none";
      el.removeAttribute('src');
      return;
    }
    el.src = src;
    el.alt = (d.name || "") + " " + altSuffix;
    el.style.display = "block";
  }

  // Images: use "imga" and "imgb" from data; hide if placeholder or missing
  function setImg(el, src, altSuffix) {
    if (!el) return;
    if (!src || String(src).toLowerCase().startsWith("placeholder")) {
      el.style.display = "none";
      el.removeAttribute('src');
      return;
    }
    el.src = src;
    el.alt = (d.name || "") + " " + altSuffix;
    el.style.display = "block";
  }

  setImg(imgA, d.imga, "A");
  setImg(imgB, d.imgb, "B");

  // Apply per-mob scaling for front and back images if provided
  if (imgA) {
    if (d.imgaScale) imgA.style.setProperty('--img-scale', String(d.imgaScale));
    else imgA.style.removeProperty('--img-scale');
  }
  if (imgB) {
    if (d.imgbScale) imgB.style.setProperty('--img-scale', String(d.imgbScale));
    else imgB.style.removeProperty('--img-scale');
  }

  // Flip behavior: enable only when both images exist
  const hasA = imgA && imgA.getAttribute('src');
  const hasB = imgB && imgB.getAttribute('src');
  if (flipCard) {
    flipCard.classList.remove('flipped');
    flipCard.setAttribute('aria-pressed', 'false');
    if (hasA && hasB) {
      flipCard.style.cursor = 'pointer';
      flipCard.onclick = () => {
        const flipped = flipCard.classList.toggle('flipped');
        flipCard.setAttribute('aria-pressed', flipped ? 'true' : 'false');
      };
      // keyboard accessibility
      flipCard.onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          flipCard.click();
        }
      };
    } else {
      flipCard.style.cursor = 'default';
      flipCard.onclick = null;
      flipCard.onkeydown = null;
    }
  }

  updatePageText();

  if (levelBadge) {
    const pnum = index + 1;
    if (pnum >= 1 && pnum <= 15) {
      levelBadge.textContent = 'L1';
      levelBadge.classList.add('l1');
      levelBadge.classList.remove('l2');
      levelBadge.style.display = 'flex';
    } else if (pnum >= 16 && pnum <= 34) {
      levelBadge.textContent = 'L2';
      levelBadge.classList.add('l2');
      levelBadge.classList.remove('l1');
      levelBadge.style.display = 'flex';
    } else {
      levelBadge.textContent = '';
      levelBadge.classList.remove('l1', 'l2');
      levelBadge.style.display = 'none';
    }
  }
}
/* SEARCH UI */
function openSearch() {
  if (!searchPopup) return;
  searchPopup.setAttribute('aria-hidden','false');
  searchInput.focus();
  searchInput.select();
}

function closeSearch() {
  if (!searchPopup) return;
  searchPopup.setAttribute('aria-hidden','true');
  searchResults.innerHTML = '';
  searchInput.value = '';
  searchBtn.focus();
}

function levenshtein(a, b) {
  if (a === b) return 0;
  const al = a.length, bl = b.length;
  if (al === 0) return bl;
  if (bl === 0) return al;
  const row = new Array(bl + 1);
  for (let j = 0; j <= bl; j++) row[j] = j;
  for (let i = 1; i <= al; i++) {
    let prev = row[0];
    row[0] = i;
    for (let j = 1; j <= bl; j++) {
      const tmp = row[j];
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + cost);
      prev = tmp;
    }
  }
  return row[bl];
}

function performSearch(query) {
  const q = (query || '').trim().toLowerCase();
  if (!q) return [];
  // substring matches first
  const list = DATA.map((item, idx) => ({name: item.name || '', idx}));
  const results = list.map(it => {
    const nameL = it.name.toLowerCase();
    let score = 9999;
    if (nameL.includes(q)) score = 0;
    else score = levenshtein(nameL, q);
    return {...it, score};
  }).sort((a,b) => a.score - b.score).slice(0,10);
  return results;
}

function showSearchResults(query) {
  if (!searchResults) return;
  const hits = performSearch(query);
  searchResults.innerHTML = '';
  if (hits.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'No matches';
    searchResults.appendChild(li);
    return;
  }
  hits.forEach(h => {
    const li = document.createElement('li');
    li.textContent = DATA[h.idx].name + (h.score > 0 ? ` — ${h.score}` : '');
    li.tabIndex = 0;
    li.onclick = () => {
      index = h.idx;
      render();
      closeSearch();
    };
    li.onkeydown = (e) => { if (e.key === 'Enter') li.click(); };
    searchResults.appendChild(li);
  });
}

if (searchBtn && searchPopup && searchInput && searchResults) {
  searchBtn.addEventListener('click', (e) => { openSearch(); });
  searchClose && searchClose.addEventListener('click', (e) => { closeSearch(); });
  searchInput.addEventListener('input', (e) => { showSearchResults(e.target.value); });
  // ESC to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchPopup && searchPopup.getAttribute('aria-hidden') === 'false') {
      closeSearch();
    }
  });
}

// Bookmarks wiring: set index based on data-page (1-based)
if (bookmarks && bookmarks.length) {
  bookmarks.forEach(btn => {
    btn.addEventListener('click', () => {
      const p = parseInt(btn.getAttribute('data-page')) || 1;
      const idx = Math.max(0, Math.min(DATA.length - 1, p - 1));
      index = idx;
      render();
    });
    btn.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); } });
  });
}

/* PREV / NEXT */
window.next = function () {
  if (index < DATA.length - 1) {
    index++;
    render();
  }
};

window.prev = function () {
  if (index > 0) {
    index--;
    render();
  }
};

/* PAGE INPUT LOGIC */

// Khi click → chỉ hiện số trang hiện tại
page.addEventListener("focus", () => {
  page.classList.add("active");
  page.value = index + 1;
});

// Chỉ cho nhập số
page.addEventListener("input", () => {
  page.value = page.value.replace(/[^0-9]/g, "");
});

// Enter → nhảy trang
page.addEventListener("keydown", e => {
  if (e.key !== "Enter") return;

  const num = parseInt(page.value);
  if (!isNaN(num) && num >= 1 && num <= DATA.length) {
    index = num - 1;
  }

  page.blur();
  render();
});

// Blur → luôn quay về format Page X / Y
page.addEventListener("blur", () => {
  page.classList.remove("active");
  updatePageText();
});

render();

const goingbck = document.getElementById('go_back');

goingbck.addEventListener("mouseover", hover);
function hover(){
  goingbck.style.transform = "scale(1.2)"; 
}
goingbck.addEventListener("mouseout", unhover);
function unhover(){
  goingbck.style.transform = "scale(1.0)";
  goingbck
}