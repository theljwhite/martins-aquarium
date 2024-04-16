import { FishArticle } from "./fish.js";

const fishArticle = FishArticle();

const listSection = document.querySelector(".owned-list");

listSection.innerHTML = fishArticle;
