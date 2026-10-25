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
	trader.innerHTML = `<strong>${group.trader}</strong><span class="toggle-label"></span>`;
	details.appendChild(trader);

	const toggleLabel = trader.querySelector(".toggle-label");

	const coordinates = document.createElement("p");
	coordinates.className = "coordinates";
	coordinates.textContent = `Coordinates: ${group.coordinates}`;
	details.appendChild(coordinates);

	const instruction = document.createElement("p");
	instruction.className = "instruction";
	instruction.textContent = `Instruction: ${group.instruction}`;
	details.appendChild(instruction);

	const table = document.createElement("table");
	table.className = "trade-table";
	table.innerHTML = "<thead><tr><th>Give</th><th>Receive</th></tr></thead>";
	const body = document.createElement("tbody");

	group.rows.forEach(([give, receive], index) => {
		const row = document.createElement("tr");

		[give, receive].forEach((value, column) => {
			const cell = document.createElement("td");
			const item = document.createElement("div");
			item.className = "trade-item";

			const imageBox = document.createElement("span");
			imageBox.className = "trade-item-image";
			const imageSource = group.images?.[index]?.[column];
			if (imageSource) {
				const image = document.createElement("img");
				image.src = imageSource;
				image.alt = "";
				imageBox.appendChild(image);
			}
			item.appendChild(imageBox);

			const link = group.links?.[index]?.[column];
			if (link) {
				const anchor = document.createElement("a");
				anchor.href = link;
				anchor.textContent = value;
				item.appendChild(anchor);
			} else {
				const text = document.createElement("span");
				text.textContent = value;
				item.appendChild(text);
			}

			cell.appendChild(item);
			row.appendChild(cell);
		});

		body.appendChild(row);
	});

	table.appendChild(body);
	details.appendChild(table);
	tradeGroups.appendChild(details);
});
