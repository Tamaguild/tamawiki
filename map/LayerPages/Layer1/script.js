import { DATA } from "./data.js";

const mapStage = document.getElementById("mapStage");
const imageViewer = document.getElementById("imageViewer");
const imageViewerImage = document.getElementById("imageViewerImage");
const imageViewerClose = document.getElementById("imageViewerClose");

function closeImageViewer() {
    imageViewer.hidden = true;
    imageViewerImage.removeAttribute("src");
}

function openImageViewer(place) {
    if (!place.image) return;
    imageViewerImage.src = place.image;
    imageViewerImage.alt = place.name;
    imageViewer.hidden = false;
}

function createWaypoint(place) {
    const waypoint = document.createElement("div");
    waypoint.className = "waypoint";
    waypoint.style.left = `${Math.max(0, Math.min(100, place.x))}%`;
    waypoint.style.top = `${Math.max(0, Math.min(100, place.y))}%`;
    waypoint.setAttribute("tabindex", "0");
    waypoint.setAttribute("aria-label", place.name);
    waypoint.addEventListener("click", () => openImageViewer(place));

    const popup = document.createElement("div");
    popup.className = "waypoint-popup";
    popup.innerHTML = `
        ${place.image ? `<img src="${place.image}" alt="${place.name}">` : ""}
        <strong>${place.name}</strong>
        <span>Layer: ${place.layer}</span>
        <span>Section: ${place.section}</span>
        <span>Coordinate: ${place.coordinate.x}, ${place.coordinate.y}, ${place.coordinate.z}</span>
        <p>${place.description}</p>
    `;

    waypoint.appendChild(document.createElement("span"));
    waypoint.appendChild(popup);
    mapStage.appendChild(waypoint);
}

DATA.waypoints.forEach(createWaypoint);

imageViewerClose.addEventListener("click", closeImageViewer);
imageViewer.addEventListener("click", event => {
    if (event.target === imageViewer) closeImageViewer();
});
document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeImageViewer();
});
