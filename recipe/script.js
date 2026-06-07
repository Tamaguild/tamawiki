const pluh = new URLSearchParams(location.search);
const pageQuery = pluh.get("page");
let index = 0;

if (pageQuery) {
  const pageNum = Number(pageQuery);
  if (!Number.isNaN(pageNum) && pageNum >= 1 && pageNum <= DATA.length) {
    index = pageNum - 1;
  } else {
    const lowercase = pageQuery.toLowerCase();
    const nameIndex = DATA.findIndex(item => item.slug === lowercase || item.name.toLowerCase().replace(/\s+/g, "_") === lowercase);
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
  const page = item.slug || item.name.toLowerCase().replace(/\s+/g, "_");
  history.replaceState({}, "", `?page=${page}`);

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

function updatePagination() {
  const pageInput = document.getElementById("pageInput");
  if (pageInput) {
    pageInput.value = filteredData.length > 0 ? `${index + 1} / ${filteredData.length}` : "0 / 0";
  }

  document.getElementById("prevBtn").disabled = index === 0;
  document.getElementById("nextBtn").disabled = index >= filteredData.length - 1;
}

function filterData(term) {
  const query = term.toLowerCase().trim();
  filteredData = query === "" ? [...DATA] : DATA.filter(item =>
    item.name.toLowerCase().includes(query) ||
    item.mob.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query)
  );
  index = 0;
  updateSearchResults();
  render();
}

function updateSearchResults() {
  const results = document.getElementById("searchResults");
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  results.innerHTML = "";
  if (!query) return;
  filteredData.slice(0, 10).forEach((item, resultIndex) => {
    const li = document.createElement("li");
    li.innerText = item.name;
    li.onclick = () => {
      index = resultIndex;
      closeSearch();
      render();
    };
    results.appendChild(li);
  });
}

function toggleSearch() {
  const popup = document.getElementById("searchPopup");
  const hidden = popup.getAttribute("aria-hidden") === "true";
  popup.setAttribute("aria-hidden", hidden ? "false" : "true");
  if (hidden) {
    document.getElementById("searchInput").focus();
  }
}

function closeSearch() {
  const popup = document.getElementById("searchPopup");
  popup.setAttribute("aria-hidden", "true");
  document.getElementById("searchInput").value = "";
  filterData("");
}

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
  document.getElementById("searchBtn").addEventListener("click", toggleSearch);
  document.getElementById("searchClose").addEventListener("click", closeSearch);
  document.getElementById("searchInput").addEventListener("input", (e) => filterData(e.target.value));
  document.getElementById("nextBtn").addEventListener("click", nextItem);
  document.getElementById("prevBtn").addEventListener("click", prevItem);
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextItem();
    if (e.key === "ArrowLeft") prevItem();
    if (e.key === "Escape") closeSearch();
  });
  render();
});

