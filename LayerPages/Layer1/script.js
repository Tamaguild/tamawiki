import { DATA } from "./data.js";
import { emote } from "../../emoji.js";

const DATA_VERSION = 2;

const basicHeader = document.getElementById("basicHeader");
const basicContent = document.getElementById("basicContent");

const placeHeader = document.getElementById("placeHeader");
const placeContent = document.getElementById("placeContent");

const tipHeader = document.getElementById("tipHeader");
const tipContent = document.getElementById("tipContent");

let mustVisit;
let tips;

const savedVersion = localStorage.getItem("data_version");

if (savedVersion != DATA_VERSION) {
    mustVisit = DATA.mustVisit;
    tips = DATA.tips;

    localStorage.setItem("must_visit", JSON.stringify(mustVisit));
    localStorage.setItem("tips", JSON.stringify(tips));
    localStorage.setItem("data_version", DATA_VERSION);
} else {
    mustVisit = JSON.parse(localStorage.getItem("must_visit")) || DATA.mustVisit;
    tips = JSON.parse(localStorage.getItem("tips")) || DATA.tips;
}

function toggle(section) {
    section.style.display =
        section.style.display === "none" ? "block" : "none";
}

/* ===== BASIC ===== */
basicContent.innerHTML = `
    <p>${emote(DATA.basic.content)}</p>
`;

/* ===== MUST VISIT ===== */
function renderPlaces() {
    placeContent.innerHTML = "";

    mustVisit.forEach(place => {
        const div = document.createElement("div");
        div.classList.add("place");

        div.innerHTML = `
            <h3>${emote(place.name)}</h3>
            <p><strong>Location:</strong> ${emote(place.location)}</p>
            <p><strong>Danger Level:</strong> ${emote(place.danger)}</p>
            <p>${emote(place.note)}</p>
            <div class="divider"></div>
        `;

        placeContent.appendChild(div);
    });

    localStorage.setItem("must_visit", JSON.stringify(mustVisit));
}

/* ===== TIPS ===== */
function renderTips() {
    tipContent.innerHTML = "";

    tips.forEach(tip => {
        const div = document.createElement("div");
        div.classList.add("tip");

        div.innerHTML = `
            <h3>${emote(tip.title)}</h3>
            <p>${emote(tip.content)}</p>
            <div class="divider"></div>
        `;

        tipContent.appendChild(div);
    });

    localStorage.setItem("tips", JSON.stringify(tips));
}

basicHeader.addEventListener("click", () => toggle(basicContent));
placeHeader.addEventListener("click", () => toggle(placeContent));
tipHeader.addEventListener("click", () => toggle(tipContent));

renderPlaces();
renderTips();
