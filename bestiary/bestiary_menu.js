import { DATA } from './data.js';

const container = document.getElementById('bestiaryList');

const mobs = [...DATA]
  .map((item) => ({ name: item.name }))
  .sort((a, b) => a.name.localeCompare(b.name));

const grouped = mobs.reduce((acc, item) => {
  const firstLetter = (item.name || '')[0]?.toUpperCase() || '#';
  if (!acc[firstLetter]) acc[firstLetter] = [];
  acc[firstLetter].push(item);
  return acc;
}, {});

const sections = Object.entries(grouped)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([letter, items]) => {
    const links = items.map((item) => `
      <a class="mob-link" href="./bestiary.html?name=${encodeURIComponent(item.name)}">${item.name}</a>
    `).join('');
    return `
      <section class="alphabet-section">
        <div class="alphabet-letter">${letter}/</div>
        <div class="mob-links">${links}</div>
      </section>
    `;
  })
  .join('');

container.innerHTML = sections;
