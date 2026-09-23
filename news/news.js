import { news, fillerTemplates } from "./data.js";
import { DATA as recipes } from "../recipe/data.js";
import { DATA as bestiary } from "../bestiary/data.js";
import { DATA as relics } from "../relics/data.js";
import { DATA as cosmetics } from "../cosmetics/data.js";
import { DATA as mainRecipes } from "../main_recipe/news-data.js";

const newsGrid = document.getElementById("newsGrid");
const fillerGrid = document.getElementById("fillerGrid");
const cardCount = 14;
const realNewsCount = 6;

function clean(value = "") {
  return String(value)
    .replace(/<br\s*\/?>(\s*)/gi, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function toSlug(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "");
}

function sourceRecord(record, fallbackName, getHref) {
  return {
    name: record?.name || record?.title || fallbackName,
    description: clean(record?.description || "A newly indexed entry from the wiki archive."),
    grade: record?.grade || "an ungraded entry",
    id: record?.id || "",
    href: getHref ? getHref(record) : ""
  };
}

function buildFillerCards() {
  const sources = [
    {
      type: "recipe",
      template: fillerTemplates.recipe,
      records: recipes.map((record) => sourceRecord(record, "Unknown recipe", (item) =>
        `../recipe/recipe_menu.html?page=${encodeURIComponent(toSlug(item.slug || item.name))}`
      ))
    },
    {
      type: "mainRecipe",
      template: fillerTemplates.mainRecipe,
      records: mainRecipes.map((record) => sourceRecord(record, "Unknown workshop recipe", (item) =>
        `../main_recipe/main_recipe.html?id=${encodeURIComponent(item.id)}`
      ))
    },
    {
      type: "bestiary",
      template: fillerTemplates.bestiary,
      records: bestiary.map((record) => sourceRecord(record, "Unknown creature", (item) =>
        `../bestiary/bestiary.html?name=${encodeURIComponent(item.name)}`
      ))
    },
    {
      type: "relic",
      template: fillerTemplates.relic,
      records: relics.map((record) => sourceRecord(record, "Unknown relic", (item) =>
        `../relics/relic.html?name=${encodeURIComponent(item.name)}`
      ))
    },
    {
      type: "cosmetics",
      template: fillerTemplates.cosmetics,
      records: [
        ...(cosmetics.hats || []),
        ...(cosmetics.backpacks || [])
      ].map((record) => sourceRecord(record, "Unknown cosmetic", () =>
        "../cosmetics/cosmetics.html"
      ))
    }
  ].filter((source) => source.records.length);

  return Array.from({ length: cardCount - realNewsCount }, (_, index) => {
    const source = sources[index % sources.length];
    const record = pickRandom(source.records);
    return {
      type: "filler",
      source: source.type,
      title: source.template.title.replace("{name}", record.name),
      href: record.href,
      description: source.template.description
        .replace("{name}", record.name)
        .replace("{description}", record.description)
        .replace("{grade}", record.grade)
    };
  });
}

function renderCard(card) {
  const article = document.createElement("article");
  article.className = `news-card${card.type === "filler" ? " filler" : ""}`;
  const content = card.href ? document.createElement("a") : article;

  if (card.href) {
    content.href = card.href;
    content.className = "card-link";
  }

  const label = document.createElement("span");
  label.className = "card-type";
  const archiveLabels = {
    recipe: "MOBDROP ARCHIVE",
    mainRecipe: "RECIPE ARCHIVE",
    bestiary: "BESTIARY ARCHIVE",
    relic: "RELIC ARCHIVE",
    cosmetics: "COSMETICS ARCHIVE"
  };
  label.textContent = card.type === "filler"
    ? archiveLabels[card.source]
    : "NEWS";
  content.appendChild(label);

  const title = document.createElement("h3");
  title.textContent = card.title;
  content.appendChild(title);

  if (card.time) {
    const date = document.createElement("time");
    date.dateTime = card.time;
    date.textContent = new Date(`${card.time}T00:00:00`).toLocaleDateString("en", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
    content.insertBefore(date, title);
  }

  const description = document.createElement("p");
  description.textContent = card.news || card.description;
  content.appendChild(description);
  if (card.href) article.appendChild(content);
  return article;
}

const prioritizedNews = [...news]
  .sort((a, b) => new Date(b.time) - new Date(a.time))
  .slice(0, realNewsCount)
  .map((item) => ({ ...item, type: "news" }));

newsGrid.replaceChildren(...prioritizedNews.map(renderCard));
fillerGrid.replaceChildren(...buildFillerCards().map(renderCard));
