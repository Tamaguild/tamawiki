import { DATA } from "./data.js";

function toSlug(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "");
}

const pluh = new URLSearchParams(location.search);
const pageQuery = pluh.get("page");
let index = 0;
const searchBtn = document.getElementById("searchBtn");
const searchPopup = document.getElementById("searchPopup");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const searchClose = document.getElementById("searchClose");

if (pageQuery) {
  const pageNum = Number(pageQuery);
  if (!Number.isNaN(pageNum) && pageNum >= 1 && pageNum <= DATA.length) {
    index = pageNum - 1;
  } else {
    const normalizedQuery = toSlug(pageQuery);
    const nameIndex = DATA.findIndex(item =>
      toSlug(item.slug) === normalizedQuery || toSlug(item.name) === normalizedQuery
    );
    if (nameIndex !== -1) {
      index = nameIndex;
    }
  }
}

let filteredData = [...DATA];

function render() {
  if (filteredData.length === 0) {
    document.querySelector(".title").innerText = "No items found";
    document.querySelector(".mob").innerText = "";
    document.querySelector(".item-image img").src = "";
    document.querySelector(".rarity").innerText = "";
    document.querySelector(".text").innerText = "";
    document.querySelector(".trade-container").innerHTML = "";
    document.querySelector(".tip-container").innerHTML = "";
    document.querySelector(".recipes-container").innerHTML = "";
    updatePagination();
    return;
  }

  const item = filteredData[index];
  const page = toSlug(item.slug || item.name);
  history.replaceState({}, "", `?page=${encodeURIComponent(page)}`);

  document.querySelector(".title").innerText = item.name;
  const buh = document.querySelector(".mob");
  if (item.mobLink) {buh.innerHTML = `- <a href="${item.mobLink}">${item.mob}</a>`}
  else {buh.innerText = `- ${item.mob}`}

  const layerElement = document.querySelector(".layer");
  layerElement.innerHTML = "";

  const rawLayer = (item.layer || "").toString().trim().toLowerCase();
  const layerList = rawLayer === "" ? ["orth"] : rawLayer.split(/\s+/);

  layerList.forEach(lv => {
    const clean = lv === "" ? "orth" : lv;
    const badge = document.createElement("img");
    badge.className = "badge";
    badge.src = `./assets/${clean}_badge.png`;
    layerElement.appendChild(badge);
  });

  document.querySelector(".item-image img").src = item.image;
  document.querySelector(".rarity").innerText = item.rarity;
  document.querySelector(".text").innerText = item.description;

  const tradeContainer = document.querySelector(".trade-container");
  tradeContainer.innerHTML = "";

  if (item.trades) {
    item.trades.forEach(t => {
      const trade = document.createElement("div");
      trade.className = "trade-recipe";

      const in1 = document.createElement("div");
      in1.className = "trade-slot trade-in1";
      in1.style.backgroundImage = `url(${t.input1})`;
      in1.dataset.name = t.name1 || "";
      if (t.link1) {
        in1.style.cursor = "pointer";
        in1.onclick = () => window.location.href = t.link1;
      }

      const in2 = document.createElement("div");
      in2.className = "trade-slot trade-in2";
      in2.style.backgroundImage = `url(${t.input2})`;
      in2.dataset.name = t.name2 || "";
      if (t.link2) {
        in2.style.cursor = "pointer";
        in2.onclick = () => window.location.href = t.link2;
      }

      const out = document.createElement("div");
      out.className = "trade-slot trade-out";
      out.style.backgroundImage = `url(${t.output})`;
      out.dataset.name = t.outputName || "";
      if (t.outputLink) {
        out.style.cursor = "pointer";
        out.onclick = () => window.location.href = t.outputLink;
      }

      trade.appendChild(in1);
      trade.appendChild(in2);
      trade.appendChild(out);
      tradeContainer.appendChild(trade);
    });
  }

  const tipContainer = document.querySelector(".tip-container");
  tipContainer.innerHTML = "";

  if (item.tips) {
    item.tips.forEach(tip => {
      const div = document.createElement("div");
      div.className = "tip";
      div.innerHTML = `
        <img src="${tip.avatar}" class="tip-avatar">
        <div class="tip-box">${tip.text}</div>
      `;
      tipContainer.appendChild(div);
    });
  }

  const right = document.querySelector(".recipes-container");
  right.innerHTML = "";

  if (item.recipes) {
    item.recipes.forEach(r => {
      const recipe = document.createElement("div");
      recipe.className = "recipe";
      const grid = document.createElement("div");
      grid.className = "grid";

      for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.style.width = "50px";
        cell.style.height = "50px";
        cell.style.float = "left";

        if (r.grid[i]) {
          cell.style.backgroundImage = `url(${r.grid[i]})`;
          cell.style.backgroundSize = "contain";
          cell.style.backgroundRepeat = "no-repeat";
          cell.dataset.name = r.names ? r.names[i] : "";
          if (r.links && r.links[i]) {
            cell.style.cursor = "pointer";
            cell.onclick = () => window.location.href = r.links[i];
          }
        }

        grid.appendChild(cell);
      }

      const arrow = document.createElement("div");
      arrow.className = "arrow";
      arrow.innerText = "";

      const output = document.createElement("div");
      output.className = "output";
      output.style.backgroundImage = `url(${r.output})`;
      output.style.backgroundSize = "contain";
      output.style.backgroundRepeat = "no-repeat";
      output.dataset.name = r.outputName || "";
      if (r.outputLink) {
        output.style.cursor = "pointer";
        output.onclick = () => window.location.href = r.outputLink;
      }

      recipe.appendChild(grid);
      recipe.appendChild(arrow);
      recipe.appendChild(output);
      right.appendChild(recipe);
    });
  }

  updatePagination();
}

function openSearch() {
  searchPopup.setAttribute("aria-hidden", "false");
  searchBtn.setAttribute("aria-expanded", "true");
  searchInput.focus();
  searchInput.select();
}

function closeSearch() {
  searchPopup.setAttribute("aria-hidden", "true");
  searchBtn.setAttribute("aria-expanded", "false");
  searchResults.replaceChildren();
  searchInput.value = "";
  searchBtn.focus();
}

function levenshtein(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  const row = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i++) {
    let previous = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const old = row[j];
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, previous + cost);
      previous = old;
    }
  }
  return row[b.length];
}

function showSearchResults(query) {
  const normalizedQuery = query.trim().toLowerCase();
  searchResults.replaceChildren();
  if (!normalizedQuery) return;

  const matches = DATA.map((item, itemIndex) => {
    const name = (item.name || "").toLowerCase();
    const containsQuery = name.includes(normalizedQuery);
    return {
      item,
      itemIndex,
      containsQuery,
      score: containsQuery ? 0 : levenshtein(name, normalizedQuery)
    };
  })
    .filter(result => result.containsQuery || result.score <= Math.max(2, Math.floor(normalizedQuery.length / 3)))
    .sort((a, b) => a.score - b.score || a.item.name.localeCompare(b.item.name))
    .slice(0, 10);

  if (!matches.length) {
    const empty = document.createElement("li");
    empty.textContent = "No matches";
    searchResults.appendChild(empty);
    return;
  }

  matches.forEach(({ item, itemIndex, score }) => {
    const result = document.createElement("li");
    result.textContent = item.name + (score > 0 ? ` — ${score}` : "");
    result.tabIndex = 0;
    result.setAttribute("role", "option");
    result.addEventListener("click", () => {
      filteredData = [...DATA];
      index = itemIndex;
      render();
      closeSearch();
    });
    result.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        result.click();
      }
    });
    searchResults.appendChild(result);
  });
}

if (searchBtn && searchPopup && searchInput && searchResults && searchClose) {
  searchBtn.addEventListener("click", openSearch);
  searchClose.addEventListener("click", closeSearch);
  searchInput.addEventListener("input", event => showSearchResults(event.target.value));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && searchPopup.getAttribute("aria-hidden") === "false") {
      closeSearch();
    }
  });
}

function updatePagination() {
  const pageInput = document.getElementById("pageInput");
  if (pageInput) {
    pageInput.value = filteredData.length > 0 ? `${index + 1} / ${filteredData.length}` : "0 / 0";
  }

  document.getElementById("prevBtn").disabled = index === 0;
  document.getElementById("nextBtn").disabled = index >= filteredData.length - 1;
}

const pageInput = document.getElementById("pageInput");

pageInput.addEventListener("focus", () => {
  pageInput.classList.add("active");
  pageInput.value = filteredData.length > 0 ? index + 1 : "";
  pageInput.select();
});

pageInput.addEventListener("input", () => {
  pageInput.value = pageInput.value.replace(/[^0-9]/g, "");
});

pageInput.addEventListener("keydown", event => {
  if (event.key !== "Enter") return;

  const pageNumber = parseInt(pageInput.value, 10);
  if (!Number.isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= filteredData.length) {
    index = pageNumber - 1;
  }

  pageInput.blur();
  render();
});

pageInput.addEventListener("blur", () => {
  pageInput.classList.remove("active");
  updatePagination();
});

function nextItem() {
  if (index < filteredData.length - 1) {
    index++;
    render();
  }
}

function prevItem() {
  if (index > 0) {
    index--;
    render();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nextBtn").addEventListener("click", nextItem);
  document.getElementById("prevBtn").addEventListener("click", prevItem);
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextItem();
    if (e.key === "ArrowLeft") prevItem();
  });
  render();
});
