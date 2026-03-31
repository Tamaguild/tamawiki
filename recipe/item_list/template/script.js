let index = 0;

function render() {
  const item = DATA[index];

  document.querySelector(".title").innerText = item.name;
  document.querySelector(".mob").innerText = "- " + item.mob;

  const layerElement = document.querySelector(".layer");

  // clear badge cũ
  layerElement.innerHTML = "";

  const rawLayer = (item.layer || "").toString().trim().toLowerCase();
  const layerList = rawLayer === "" ? ["orth"] : rawLayer.split(/\s+/);

  layerList.forEach(lv => {
    const clean = lv === "" ? "orth" : lv;
  
    const badge = document.createElement("img");
    badge.className = "badge";
    badge.src = `../assets/${clean}_badge.png`;

    layerElement.appendChild(badge);
  });

  // IMAGE
  document.querySelector(".item-image img").src = item.image;

  // DESC
  document.querySelector(".rarity").innerText = item.rarity;
  document.querySelector(".text").innerText = item.description;

  // TRADE 
  const tradeContainer = document.querySelector(".trade-container");
  tradeContainer.innerHTML = "";

  if(item.trades){
    item.trades.forEach(t => {

      const trade = document.createElement("div");
      trade.className = "trade-recipe";

      // input 1
      const in1 = document.createElement("div");
      in1.className = "trade-slot trade-in1";
      in1.style.backgroundImage = `url(${t.input1})`;
      in1.dataset.name = t.name1 || "";

      if(t.link1){
        in1.style.cursor = "pointer";
        in1.onclick = () => window.location.href = t.link1;
      }

      // input 2
      const in2 = document.createElement("div");
      in2.className = "trade-slot trade-in2";
      in2.style.backgroundImage = `url(${t.input2})`;
      in2.dataset.name = t.name2 || "";

      if(t.link2){
        in2.style.cursor = "pointer";
        in2.onclick = () => window.location.href = t.link2;
      }

      // output
      const out = document.createElement("div");
      out.className = "trade-slot trade-out";
      out.style.backgroundImage = `url(${t.output})`;
      out.dataset.name = t.outputName || "";

      if(t.outputLink){
        out.style.cursor = "pointer";
        out.onclick = () => window.location.href = t.outputLink;
      }

      trade.appendChild(in1);
      trade.appendChild(in2);
      trade.appendChild(out);

      tradeContainer.appendChild(trade);
    });
  }

  // TIPS
  const tipContainer = document.querySelector(".left");
  const oldTips = document.querySelectorAll(".tip");
  oldTips.forEach(t => t.remove());

  item.tips.forEach(tip => {
    const div = document.createElement("div");
    div.className = "tip";

    div.innerHTML = `
      <img src="${tip.avatar}" class="tip-avatar">
      <div class="tip-box">${tip.text}</div>
    `;

    tipContainer.appendChild(div);
  });

  // RECIPES
  const right = document.querySelector(".recipes-container");
  const oldRecipes = document.querySelectorAll(".recipe");
  oldRecipes.forEach(r => r.remove());

  item.recipes.forEach(r => {

    const recipe = document.createElement("div");
    recipe.className = "recipe";

    const grid = document.createElement("div");
    grid.className = "grid";

    // tạo 9 ô
    for(let i=0;i<9;i++){
      const cell = document.createElement("div");
      cell.style.width = "50px";
      cell.style.height = "50px";
      cell.style.float = "left";

    if(r.grid[i]){
      cell.style.backgroundImage = `url(${r.grid[i]})`;
      cell.style.backgroundSize = "contain";
      cell.style.backgroundRepeat = "no-repeat";

      cell.dataset.name = r.names ? r.names[i] : "";

      // ADD LINK
      if(r.links && r.links[i]){
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

    if(r.outputLink){
      output.style.cursor = "pointer";
      output.onclick = () => window.location.href = r.outputLink;
    }
    recipe.appendChild(grid);
    recipe.appendChild(arrow);
    recipe.appendChild(output);

    right.appendChild(recipe);
    if(item.link){
      const img = document.querySelector(".item-image img");
      img.style.cursor = "pointer";
      img.onclick = () => window.location.href = item.link;
    }
  });

}

document.addEventListener("DOMContentLoaded", () => {

  render();
  // existing click logic if present
});

if(t.link1){
  in1.style.cursor = "pointer";
  in1.onclick = () => window.location.href = t.link1;
}

if(t.link2){
  in2.style.cursor = "pointer";
  in2.onclick = () => window.location.href = t.link2;
}

if(t.outputLink){
  out.style.cursor = "pointer";
  out.onclick = () => window.location.href = t.outputLink;
}
