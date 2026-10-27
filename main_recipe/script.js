import { recipeTree, selectedDefault } from "./data.js";

const treeRoot = document.getElementById("treeRoot");
const itemTitle = document.getElementById("itemTitle");
const recipePanels = document.getElementById("recipePanels");
const searchBtn = document.getElementById("searchBtn");
const searchPopup = document.getElementById("searchPopup");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const searchClose = document.getElementById("searchClose");
const tipsSection = document.getElementById("tipsSection");
const tipsBox = document.getElementById("tipsBox");
const tipsCharacter = document.getElementById("tipsCharacter");
const defaultTipImage = "../general/textures/icons/orby.png";

tipsCharacter.addEventListener("error", () => {
  if (tipsCharacter.src.endsWith(defaultTipImage)) return;
  tipsCharacter.src = defaultTipImage;
});

function toSlug(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^\w-]/g, "");
}

function findNodeById(nodes, id) {
  for (const node of nodes) {
    if (node.id === id) return node;
    if (node.children && node.children.length) {
      const nested = findNodeById(node.children, id);
      if (nested) return nested;
    }
  }
  return null;
}

function isRecipeNode(node) {
  return ["recipes", "brewings", "furnaces", "blasts"].some((key) => Array.isArray(node[key]));
}

function getFlattenedData(nodes) {
  const items = [];

  function walk(list) {
    list.forEach((node) => {
      if (isRecipeNode(node)) {
        items.push(node);
      }
      if (node.children && node.children.length) {
        walk(node.children);
      }
    });
  }

  walk(nodes);
  return items;
}

function getRecipeItems(nodes, result = []) {
  nodes.forEach((node) => {
    if (isRecipeNode(node)) result.push(node);
    if (node.children && node.children.length) getRecipeItems(node.children, result);
  });
  return result;
}

function findPath(nodes, target, path = []) {
  for (const node of nodes) {
    const nextPath = [...path, node];
    if (node === target) return nextPath;
    if (node.children && node.children.length) {
      const match = findPath(node.children, target, nextPath);
      if (match) return match;
    }
  }
  return null;
}

function getNodeSlug(node) {
  return toSlug(node.slug || node.label || node.title || node.id).replace(/_buh$/, "");
}

function getNodeSlugPath(node) {
  return (findPath(recipeTree, node) || []).map(getNodeSlug).join("/");
}

function findNodeByIdPath(pathValue) {
  const ids = pathValue.split("/").map((part) => part.trim()).filter(Boolean);
  let nodes = recipeTree;
  let current = null;

  for (const id of ids) {
    current = nodes.find((node) => node.id === id);
    if (!current) return null;
    nodes = current.children || [];
  }

  return current;
}

function findNodeBySlugPath(pathValue) {
  const slugs = pathValue.split("/").map((part) => part.trim()).filter(Boolean);
  let nodes = recipeTree;
  let current = null;

  for (const slug of slugs) {
    current = nodes.find((node) => getNodeSlug(node) === slug);
    if (!current) return null;
    nodes = current.children || [];
  }

  return current;
}

function getFirstRecipeItem(node) {
  if (!node) return null;
  if (isRecipeNode(node)) return node;
  for (const child of node.children || []) {
    const item = getFirstRecipeItem(child);
    if (item) return item;
  }
  return null;
}

function renderTreeBranch(nodes, depth = 0, parentSlugPath = []) {
  if (!nodes || !nodes.length) return "";

  return nodes
    .map((node) => {
      const hasChildren = node.children && node.children.length > 0;
      const isExpanded = Boolean(node.expanded);
      const isSelected = node.active || node.id === selectedDefault;
      const nodeSlugPath = [...parentSlugPath, getNodeSlug(node)];
      const nodePath = nodeSlugPath.join("/");

      const label = `
        <div class="tree-node ${hasChildren ? "has-children" : "leaf"} ${isSelected ? "selected" : ""}" data-id="${node.id}" data-node-path="${nodePath}" style="--depth:${depth};">
          ${hasChildren ? `<button class="tree-toggle ${isExpanded ? "open" : "closed"}" type="button" aria-label="Toggle ${node.label}">▾</button>` : `<span class="tree-spacer"></span>`}
          <button class="tree-link" type="button" data-slug="${nodePath}">${node.label}</button>
        </div>
      `;

      const childMarkup = hasChildren ? `<div class="tree-children ${isExpanded ? "visible" : "hidden"}">${renderTreeBranch(node.children, depth + 1, nodeSlugPath)}</div>` : "";
      return `${label}${childMarkup}`;
    })
    .join("");
}

function renderRecipePanel(data) {
  const recipeSteps = data.recipeSteps && data.recipeSteps.length ? data.recipeSteps : Array(9).fill({});

  const panelMarkup = `
    <div class="craft-panel">
      <div class="craft-grid">
        ${recipeSteps
          .map((step, index) => {
            const isFilled = Boolean(step.name);
            const tintClass = step.palette === "dark" ? "dark-block" : step.palette === "light" ? "light-block" : "empty-block";
            return `<div class="craft-slot ${isFilled ? tintClass : "empty-slot"}" data-index="${index}">${isFilled ? `<span class="slot-glyph">${step.name.slice(0, 1)}</span>` : ""}</div>`;
          })
          .join("")}
      </div>
      <div class="craft-output">
        <div class="mini-block dark-block"></div>
      </div>
    </div>
  `;

  return panelMarkup;
}

function renderDetail(node, showTips = true) {
  if (!node) return;

  itemTitle.textContent = node.title || node.label;

  const tipData = node.tips && typeof node.tips === "object" && !Array.isArray(node.tips)
    ? node.tips
    : { text: Array.isArray(node.tips) ? node.tips.join("\n") : String(node.tips || "") };
  const tips = tipData.text || "";
  tipsBox.textContent = tips;
  tipsSection.hidden = !showTips || !tips.trim();
  tipsCharacter.src = tipData.image;

  const recipes = node.recipes || [];
  recipePanels.innerHTML = recipes.map((recipe) => {
    const cells = Array.from({ length: 9 }, (_, index) => recipe.grid[index] || "");
    const names = recipe.names || [];
    const links = recipe.links || [];
    const slots = cells.map((cell, index) => `
      <div class="craft-slot ${cell ? "filled-slot" : "empty-slot"}"
        ${cell ? `data-name="${names[index] || ""}" style="background-image: url('${cell}')"` : ""}
        ${links[index] ? `data-link="${links[index]}"` : ""}></div>
    `).join("");

    return `
      <div class="craft-card">
        <div class="craft-grid">${slots}</div>
        <div class="output-mini ${recipe.output ? "filled-slot" : "empty-slot"}"
          ${recipe.output ? `data-name="${recipe.outputName || ""}" style="background-image: url('${recipe.output}')"` : ""}
          ${recipe.outputLink ? `data-link="${recipe.outputLink}"` : ""}></div>
      </div>
    `;
  }).join("");

  const brewings = node.brewings || [];
  recipePanels.insertAdjacentHTML("beforeend", brewings.map((brew) => `
    <div class="brew-card">
      <div class="brew-grid">
        ${(brew.slots || []).map((slot) => `
          <div class="brew-slot filled-slot"
            data-name="${slot.name || ""}"
            style="left: ${slot.x || 0}px; top: ${slot.y || 0}px; background-image: url('${slot.image}')"
            ${slot.link ? `data-link="${slot.link}"` : ""}></div>
        `).join("")}
      </div>
      <div class="output-mini ${brew.output ? "filled-slot" : "empty-slot"}"
        ${brew.output ? `data-name="${brew.outputName || ""}" style="background-image: url('${brew.output}')"` : ""}
        ${brew.outputLink ? `data-link="${brew.outputLink}"` : ""}></div>
    </div>
  `).join(""));

  recipePanels.querySelectorAll("[data-link]").forEach((element) => {
    element.addEventListener("click", () => {
      window.location.href = element.dataset.link;
    });
  });

  const furnaces = node.furnaces || [];
  recipePanels.insertAdjacentHTML("beforeend", furnaces.map((brew) => `
    <div class="furnace-card">
      <div class="furnace-grid">
        ${(brew.slots || []).map((slot) => `
          <div class="brew-slot filled-slot"
            data-name="${slot.name || ""}"
            style="left: ${slot.x || 0}px; top: ${slot.y || 0}px; background-image: url('${slot.image}')"
            ${slot.link ? `data-link="${slot.link}"` : ""}></div>
        `).join("")}
      </div>
      <div class="output-mini ${brew.output ? "filled-slot" : "empty-slot"}"
        ${brew.output ? `data-name="${brew.outputName || ""}" style="background-image: url('${brew.output}')"` : ""}
        ${brew.outputLink ? `data-link="${brew.outputLink}"` : ""}></div>
    </div>
  `).join(""));

  recipePanels.querySelectorAll("[data-link]").forEach((element) => {
    element.addEventListener("click", () => {
      window.location.href = element.dataset.link;
    });
  });

  const blasts = node.blasts || [];
  recipePanels.insertAdjacentHTML("beforeend", blasts.map((brew) => `
    <div class="blast-card">
      <div class="blast-grid">
        ${(brew.slots || []).map((slot) => `
          <div class="brew-slot filled-slot"
            data-name="${slot.name || ""}"
            style="left: ${slot.x || 0}px; top: ${slot.y || 0}px; background-image: url('${slot.image}')"
            ${slot.link ? `data-link="${slot.link}"` : ""}></div>
        `).join("")}
      </div>
      <div class="output-mini ${brew.output ? "filled-slot" : "empty-slot"}"
        ${brew.output ? `data-name="${brew.outputName || ""}" style="background-image: url('${brew.output}')"` : ""}
        ${brew.outputLink ? `data-link="${brew.outputLink}"` : ""}></div>
    </div>
  `).join(""));

  recipePanels.querySelectorAll("[data-link]").forEach((element) => {
    element.addEventListener("click", () => {
      window.location.href = element.dataset.link;
    });
  });
}

function bindTreeInteractions() {
  const toggleButtons = treeRoot.querySelectorAll(".tree-toggle");
  toggleButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const nodeEl = button.closest(".tree-node");
      const node = findNodeBySlugPath(nodeEl.dataset.nodePath);

      if (!node || !node.children || !node.children.length) return;

      node.expanded = !node.expanded;
      renderTree();
    });
  });

  const itemButtons = treeRoot.querySelectorAll(".tree-link");
  itemButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const nodeEl = button.closest(".tree-node");
      const matched = findNodeBySlugPath(button.dataset.slug);

      if (!matched) return;

      if (matched.children && matched.children.length) {
        matched.expanded = !matched.expanded;
        renderTree();
        return;
      }

      selectRecipe(matched);
    });
  });
}

function renderTree() {
  treeRoot.innerHTML = renderTreeBranch(recipeTree);
  bindTreeInteractions();
}

function selectRecipe(node, showTips = true) {
  const path = findPath(recipeTree, node) || [];
  recipeTree.forEach((root) => {
    root.active = false;
  });
  path.forEach((part) => {
    part.active = part === node;
    if (part.children && part.children.length) part.expanded = true;
  });
  history.replaceState({}, "", `?id=${encodeURIComponent(getNodeSlugPath(node))}`);
  renderTree();
  renderDetail(node, showTips);
}

function openSearch() {
  searchPopup.setAttribute("aria-hidden", "false");
  searchInput.focus();
  searchInput.select();
}

function closeSearch() {
  searchPopup.setAttribute("aria-hidden", "true");
  searchInput.value = "";
  searchResults.innerHTML = "";
  searchBtn.focus();
}

function showSearchResults(query) {
  const normalized = query.trim().toLowerCase();
  searchResults.innerHTML = "";
  if (!normalized) return;

  const matches = getRecipeItems(recipeTree).filter((item) =>
    (item.title || item.label).toLowerCase().includes(normalized)
  );

  if (!matches.length) {
    const empty = document.createElement("li");
    empty.textContent = "No matches";
    searchResults.appendChild(empty);
    return;
  }

  matches.slice(0, 10).forEach((item) => {
    const result = document.createElement("li");
    result.textContent = item.title || item.label;
    result.tabIndex = 0;
    result.addEventListener("click", () => {
      selectRecipe(item);
      closeSearch();
    });
    result.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") result.click();
    });
    searchResults.appendChild(result);
  });
}

searchBtn.addEventListener("click", openSearch);
searchClose.addEventListener("click", closeSearch);
searchInput.addEventListener("input", (event) => showSearchResults(event.target.value));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && searchPopup.getAttribute("aria-hidden") === "false") closeSearch();
});

function initialize() {
  const items = getFlattenedData(recipeTree);
  const params = new URLSearchParams(location.search);
  const slugParam = params.get("slug");
  const idParam = params.get("id");
  const nameParam = params.get("name");
  const pageParam = params.get("page");
  let target = null;

  if (idParam) {
    target = getFirstRecipeItem(findNodeBySlugPath(idParam) || findNodeByIdPath(idParam));
  } else if (slugParam) {
    target = getFirstRecipeItem(findNodeBySlugPath(slugParam));
  } else if (nameParam) {
    const targetSlug = toSlug(nameParam);
    target = items.find((item) =>
      [item.id, item.label, item.title].some((value) => toSlug(value) === targetSlug)
    ) || null;
  } else if (pageParam) {
    const pageIndex = Number.parseInt(pageParam, 10) - 1;
    if (Number.isInteger(pageIndex) && pageIndex >= 0 && pageIndex < items.length) {
      target = items[pageIndex];
    }
  }

  target = target || findNodeById(recipeTree, selectedDefault) || items[0];

  if (target) {
    selectRecipe(target, false);
  } else {
    renderTree();
    renderDetail({ title: "Recipe", label: "Recipe" }, false);
  }
}

initialize();
