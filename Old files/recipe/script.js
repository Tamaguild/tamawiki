const list = document.getElementById("tocList");
const search = document.getElementById("searchInput");

// sort A → Z
ITEMS.sort((a, b) => a.name.localeCompare(b.name));

function renderList(filter = ""){
  list.innerHTML = "";

  ITEMS
    .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(item => {

      const div = document.createElement("div");
      div.className = "toc-item";
      div.innerText = item.name;

      div.onclick = () => window.location.href = item.link;

      list.appendChild(div);
    });
}

// search event
search.addEventListener("input", () => {
  renderList(search.value);
});

// first render
document.addEventListener("DOMContentLoaded", () => {
  renderList();
});