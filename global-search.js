import { DATA as relics } from "./relics/data.js";
import { DATA as bestiary } from "./bestiary/data.js";
import { DATA as mobdrops } from "./recipe/data.js";

function stripMarkup(value = "") {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function toSlug(value) {
  return String(value).trim().toLowerCase().replace(/\s+/g, "_").replace(/[^\w-]/g, "");
}

function pageUrl(path) {
  return new URL(path, import.meta.url).href;
}

const searchIndex = [
  { title: "Relics", description: "Browse the relic collection", url: pageUrl("./relics/relic_menu.html"), keywords: "relic item artifact" },
  { title: "Bestiary", description: "Browse creatures and their drops", url: pageUrl("./bestiary/bestiary_menu.html"), keywords: "bestiary creature mob monster" },
  { title: "Mob Drops", description: "Browse mob drop items", url: pageUrl("./recipe/recipe_list.html"), keywords: "mob drop item recipe" },
  { title: "Guides", description: "Beginner, intermediate, expert, ore, and skeleton guides", url: pageUrl("./guide/guide.html"), keywords: "guide tutorial ore skeleton" },
  { title: "Gallery", description: "Browse the Tama Guild gallery", url: pageUrl("./gallery/gallery.html"), keywords: "gallery image picture" },
  ...relics.map(item => ({
    title: item.name,
    description: `${item.grade || "Relic"} ${stripMarkup(item.description)}`,
    url: pageUrl(`./relics/relic.html?name=${encodeURIComponent(toSlug(item.name))}`),
    keywords: "relic"
  })),
  ...bestiary.map(item => ({
    title: item.name,
    description: `${item.grade || "Creature"} ${stripMarkup(item.description)}`,
    url: pageUrl(`./bestiary/bestiary.html?name=${encodeURIComponent(toSlug(item.name))}`),
    keywords: "bestiary creature mob"
  })),
  ...mobdrops.map(item => ({
    title: item.name,
    description: `${item.layer || "Mob drop"} ${stripMarkup(item.description)}`,
    url: pageUrl(`./recipe/recipe_menu.html?page=${encodeURIComponent(toSlug(item.name))}`),
    keywords: "mob drop item recipe"
  }))
];

const searchButton = document.getElementById("searchButton");
const searchPanel = document.getElementById("searchPanel");
const searchInput = document.getElementById("globalSearchInput");
const searchResults = document.getElementById("searchResults");

if (searchButton && searchPanel && searchInput && searchResults) {
  function renderResults(value) {
    const query = value.trim().toLowerCase();
    searchResults.replaceChildren();
    if (!query) return;

    const matches = searchIndex.filter(item =>
      `${item.title} ${item.description} ${item.keywords}`.toLowerCase().includes(query)
    ).slice(0, 12);

    if (!matches.length) {
      const empty = document.createElement("p");
      empty.className = "search-empty";
      empty.textContent = "No matching pages found.";
      searchResults.appendChild(empty);
      return;
    }

    matches.forEach(item => {
      const link = document.createElement("a");
      link.className = "search-result";
      link.href = item.url;
      link.innerHTML = "<strong></strong><span></span>";
      link.querySelector("strong").textContent = item.title;
      link.querySelector("span").textContent = item.description;
      searchResults.appendChild(link);
    });
  }

  searchButton.addEventListener("click", () => {
    const open = searchPanel.getAttribute("aria-hidden") === "false";
    searchPanel.setAttribute("aria-hidden", String(open));
    searchButton.setAttribute("aria-expanded", String(!open));
    if (!open) searchInput.focus();
  });

  searchInput.addEventListener("input", event => renderResults(event.target.value));
  document.addEventListener("click", event => {
    if (!event.target.closest(".global-search")) {
      searchPanel.setAttribute("aria-hidden", "true");
      searchButton.setAttribute("aria-expanded", "false");
    }
  });
}
