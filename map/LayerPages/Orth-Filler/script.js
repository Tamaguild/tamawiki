import { TRADE_GROUPS } from "./data.js";

const tradeGroups = document.getElementById("tradeGroups");

TRADE_GROUPS.forEach(group => {
	const details = document.createElement("details");
	details.className = "trade-group";
	details.open = true;

	const summary = document.createElement("summary");
	summary.textContent = group.location;
	details.appendChild(summary);

	const trader = document.createElement("div");
	trader.className = "trader-heading";
	trader.innerHTML = `<strong>${group.trader}</strong><span class="toggle-label">[Collapse]</span>`;
	details.appendChild(trader);

	const toggleLabel = trader.querySelector(".toggle-label");
	details.addEventListener("toggle", () => {
		toggleLabel.textContent = details.open ? "[Collapse]" : "[Expand]";
	});

	const coordinates = document.createElement("p");
	coordinates.className = "coordinates";
	coordinates.textContent = `Coordinates: ${group.coordinates}`;
	details.appendChild(coordinates);

	const table = document.createElement("table");
	table.className = "trade-table";
	table.innerHTML = "<thead><tr><th>Give</th><th>Receive</th></tr></thead>";
	const body = document.createElement("tbody");

	group.rows.forEach(([give, receive]) => {
		const row = document.createElement("tr");
		row.innerHTML = `<td>${give}</td><td>${receive}</td>`;
		body.appendChild(row);
	});

	table.appendChild(body);
	details.appendChild(table);
	tradeGroups.appendChild(details);
});
