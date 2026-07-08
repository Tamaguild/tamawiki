const container = document.getElementById('recipeList');

const items = [...DATA]
  .map((item) => ({ name: item.name }))
  .sort((a, b) => a.name.localeCompare(b.name));

const grouped = items.reduce((acc, item) => {
  const firstLetter = (item.name || '')[0]?.toUpperCase() || '#';
  if (!acc[firstLetter]) acc[firstLetter] = [];
  acc[firstLetter].push(item);
  return acc;
}, {});

const sections = Object.entries(grouped)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([letter, list]) => {
    const links = list.map((item) => `
      <a class="item-link" href="./recipe_menu.html?page=${encodeURIComponent(item.name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, ''))}">${item.name}</a>
    `).join('');
    return `
      <section class="alphabet-section">
        <div class="alphabet-letter">${letter}/</div>
        <div class="item-links">${links}</div>
      </section>
    `;
  })
  .join('');

container.innerHTML = sections;
