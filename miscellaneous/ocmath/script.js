import { PRODUCTS } from "./data.js";

const productTable = document.getElementById("productTable");
const totalValue = document.getElementById("totalValue");

const cart = PRODUCTS.map(item => ({ ...item, qty: 0 }));

function formatNumber(value) {
  return value.toLocaleString();
}

function formatQuantity(qty) {
  if (qty < 64) return qty.toString();
  const stacks = Math.floor(qty / 64);
  const remainder = qty % 64;
  const stackText = stacks === 1 ? 'stack' : 'stacks';
  if (remainder === 0) return `${stacks} ${stackText}`;
  return `${stacks} ${stackText} + ${remainder}`;
}

function renderProducts() {
  productTable.innerHTML = cart
    .map(
      (item, index) => `
        <tr data-index="${index}">
          <td>
            <div class="product-cell">
              <img class="product-icon" src="${item.img}" alt="${item.name}">
              <div>
                <div class="product-name">${item.name}</div>
                <div class="product-desc">${item.desc}</div>
              </div>
            </div>
          </td>
          <td class="text-right">${formatNumber(item.amount)}</td>
          <td>
            <div class="qty-display">${formatQuantity(item.qty)}</div>
            <div class="qty-controls">
              <button class="qty-btn dec" data-action="decrease" type="button">-</button>
              <input class="qty-input" type="number" min="0" value="${item.qty}" aria-label="Quantity for ${item.name}">
              <button class="qty-btn inc" data-action="increase" type="button">+</button>
            </div>
            <button class="qty-big" type="button" data-action="add64">+64</button>
          </td>
          <td class="text-right subtotal">${formatNumber(Math.floor(item.qty / item.amount))}</td>
        </tr>`
    )
    .join("");

  updateTotal();
}

function updateTotal() {
  const total = cart.reduce((sum, item) => sum + Math.floor(item.qty / item.amount), 0);
  totalValue.textContent = formatNumber(total);
}

function clampQuantity(value) {
  const num = Number(value);
  if (Number.isNaN(num) || num < 0) return 0;
  return Math.floor(num);
}

productTable.addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const row = button.closest("tr");
  const index = Number(row.dataset.index);
  const item = cart[index];

  if (button.dataset.action === "decrease") {
    item.qty = Math.max(0, item.qty - 1);
  }
  if (button.dataset.action === "increase") {
    item.qty = item.qty + 1;
  }
  if (button.dataset.action === "add64") {
    item.qty = item.qty + 64;
  }

  renderProducts();
});

productTable.addEventListener("input", event => {
  const input = event.target.closest(".qty-input");
  if (!input) return;

  const row = input.closest("tr");
  const index = Number(row.dataset.index);
  const item = cart[index];
  item.qty = clampQuantity(input.value);
  renderProducts();
});

renderProducts();
