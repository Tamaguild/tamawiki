import { DATA } from "./data.js";
import { emote } from "../../emoji.js";

const pluh = new URLSearchParams(location.search);
let index = (Number(pluh.get("page")) || 1) - 1;

const div1 = document.getElementById("div1");
const div3 = document.getElementById("div3");
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

// Initialize Three.js
function init3D() {
  // Three.js viewer removed - replaced with GIF display
}

function updatePageText() {
  page.value = `Page ${index + 1} / ${DATA.length}`;
}

function render() {
  history.replaceState({}, "", `?page=${index + 1}`);
  const d = DATA[index];

  div1.textContent = d.name || "";
  div3.innerHTML = d.description || "";
  div6.innerHTML = emote(d.extra || "");

  // Load images
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

  setImg(imgA, d.imga, "GIF");
  setImg(imgB, d.imgb, "GIF");

  updatePageText();
}

// Flip card functionality
flipCard.addEventListener("click", () => {
  isFlipped = !isFlipped;
  flipCard.classList.toggle("flipped", isFlipped);
  flipCard.setAttribute("aria-pressed", isFlipped);
});

flipCard.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    flipCard.click();
  }
});

// Navigation
function prev() {
  index = (index - 1 + DATA.length) % DATA.length;
  render();
  isFlipped = false;
  flipCard.classList.remove("flipped");
}

function next() {
  index = (index + 1) % DATA.length;
  render();
  isFlipped = false;
  flipCard.classList.remove("flipped");
}

window.prev = prev;
window.next = next;

// Search functionality
function performSearch(query) {
  searchResults.innerHTML = "";

  if (!query.trim()) {
    searchResults.innerHTML = "";
    return;
  }

  const matches = DATA.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  matches.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = item.name;
    li.onclick = () => {
      index = DATA.indexOf(item);
      render();
      searchPopup.setAttribute('aria-hidden', 'true');
      searchPopup.style.display = 'none';
      isFlipped = false;
      flipCard.classList.remove("flipped");
    };
    searchResults.appendChild(li);
  });
}

searchInput.addEventListener("input", (e) => {
  performSearch(e.target.value);
});

searchBtn.addEventListener("click", () => {
  searchPopup.style.display = searchPopup.style.display === 'none' ? 'block' : 'none';
  searchPopup.setAttribute('aria-hidden', searchPopup.style.display === 'none' ? 'true' : 'false');
  if (searchPopup.style.display === 'block') {
    searchInput.focus();
  }
});

searchClose.addEventListener("click", () => {
  searchPopup.style.display = 'none';
  searchPopup.setAttribute('aria-hidden', 'true');
});

// Handle keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") prev();
  if (e.key === "ArrowRight") next();
});

// Initialize
init3D();
render();
