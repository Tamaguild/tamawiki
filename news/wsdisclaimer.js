import english from "../language_map/en/en.js";

document.documentElement.lang = english.code;

document.querySelectorAll("[data-i18n]").forEach((element) => {
  element.textContent = english.text[element.dataset.i18n] || element.dataset.i18n;
});

const disclaimer = document.getElementById("disclaimerText");

if (disclaimer) {
  disclaimer.innerHTML = english.text.disclaimerLines
    .map((line) => `${line}<br>`)
    .join("");
}