import { FishArticle } from "./fish/Fishlist.js";
import { TipsList } from "./tips/TipsList.js";
import { LocationsList } from "./locations/LocationsList.js";

const fishArticle = FishArticle();
const tipList = TipsList();
const locationList = LocationsList();

const listSection = document.querySelector(".owned-list");
const tipUl = document.querySelector(".tips__list-ctn");
const locations = document.querySelector(".locations");

listSection.innerHTML = fishArticle;
tipUl.innerHTML = tipList;
locations.innerHTML = locationList;
