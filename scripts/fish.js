import { getFish } from "./database.js";

const allFish = getFish();

export const FishArticle = () => {
  let fishHTML = `<div class="owned__article__ctn">`;
  for (const fish of allFish) {
    fishHTML += ` <article class="owned__article">
    <a>
        <img
          src="${fish.image}"
        />
      </a>
      <div class="owned__inner">
        <h2>${fish.customName}</h2>
        <p>${fish.species}, ${fish.length}</p>
        <p>Diet: ${fish.diet}</p>
        <p>Harvested at: ${fish.harvestLocation}</p>
        <button>Read more</button>
      </div>
      </article>
      `;
  }
  fishHTML += "</div>";
  return fishHTML;
};
