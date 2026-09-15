import { GALLERY_ITEMS } from "./data.js";
const galleryGrid = document.getElementById("galleryGrid");

galleryGrid.innerHTML = GALLERY_ITEMS.map((item) => `
		<article class="gallery-card">
			<div class="gallery-image-wrap">
				<img src="${item.image}" alt="${item.title}">
			</div>
			<div class="gallery-card-content">
				<h2>${item.title}</h2>
				<p>${item.description}</p>
			</div>
		</article>
	`).join("");
