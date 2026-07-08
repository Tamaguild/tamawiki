import { DATA } from './data.js';

const container = document.getElementById('relicList');

const relics = [...DATA]
  .map((item) => ({
    name: item.name,
    grade: item.grade || ''
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

const grouped = relics.reduce((acc, item) => {
  const firstLetter = (item.name || '')[0]?.toUpperCase() || '#';
  if (!acc[firstLetter]) acc[firstLetter] = [];
  acc[firstLetter].push(item);
  return acc;
}, {});

const sections = Object.entries(grouped)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([letter, items]) => {
    const links = items.map((item) => `
      <a class="relic-link" href="./relic.html?name=${encodeURIComponent(item.name)}">${item.name}</a>
    `).join('');
    return `
      <section class="alphabet-section">
        <div class="alphabet-letter">${letter}/</div>
        <div class="relic-links">${links}</div>
      </section>
    `;
  })
  .join('');

container.innerHTML = sections;
