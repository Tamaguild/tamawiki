import { DATA } from './data.js';

// BASIC
const basicDiv = document.getElementById("basicContent");
basicDiv.innerHTML = `<p>${DATA.basic.content}</p>`;

// TIPS
const tipDiv = document.getElementById("tipContent");

DATA.tips.forEach(tip => {
    const tipElement = document.createElement("div");
    tipElement.innerHTML = `
        <h3>${tip.title}</h3>
        <p>${tip.content}</p>
    `;
    tipDiv.appendChild(tipElement);
});

// MUST VISIT
const placeDiv = document.getElementById("placeContent");

DATA.mustVisit.forEach(place => {
    const placeElement = document.createElement("div");
    placeElement.innerHTML = `
        <h3>${place.name}</h3>
        <p><strong>Location:</strong> ${place.location}</p>
        <p><strong>Danger:</strong> ${place.danger}</p>
        <p>${place.note}</p>
    `;
    placeDiv.appendChild(placeElement);
});