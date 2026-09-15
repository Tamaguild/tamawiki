import english from "./language_map/en/en.js";
import vietnamese from "./language_map/vi/vi.js";

const div = document.getElementById("changeLogList");
const languageButton = document.getElementById("languageButton");
const languageMenu = document.getElementById("languageMenu");
const languageSelect = document.getElementById("languageSelect");
const languages = { en: english, vi: vietnamese };

function renderLanguage(languageCode) {
    const language = languages[languageCode] || languages.en;
    languageSelect.value = language.code;
    document.documentElement.lang = language.code;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        element.textContent = language.text[element.dataset.i18n] || element.dataset.i18n;
    });
    document.getElementById("disclaimerText").innerHTML = language.text.disclaimerLines.map((line) => `${line}<br>`).join("");
    div.innerHTML = language.changeLog.map((entry) => `- [${entry.date}] ${entry.text}<br>`).join("");
}

renderLanguage(localStorage.getItem("language") || "en");

languageButton.addEventListener("click", () => {
    const open = languageMenu.getAttribute("aria-hidden") === "false";
    languageMenu.setAttribute("aria-hidden", String(open));
    languageButton.setAttribute("aria-expanded", String(!open));
});

languageSelect.addEventListener("change", () => {
    localStorage.setItem("language", languageSelect.value);
    renderLanguage(languageSelect.value);
});

document.addEventListener("click", (event) => {
    if (!event.target.closest(".language-control")) {
        languageMenu.setAttribute("aria-hidden", "true");
        languageButton.setAttribute("aria-expanded", "false");
    }
});