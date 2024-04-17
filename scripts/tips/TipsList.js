import { getTips } from "../database.js";

const tips = getTips();

export const TipsList = () => {
  let tipHTML = `<ul class="tips__list">`;

  for (const item of tips) {
    tipHTML += `<li>
            <p class="tip">${item.tip}</p>
            <p class="tip">For tanks: ${item.tankTip}</p>
        </li> 
        `;
  }
  tipHTML += "</ul>";

  return tipHTML;
};
