import { getAllLocations } from "../database.js";

const locations = getAllLocations();

export const LocationsList = () => {
  let locationHTML = `<div class="locations__grid">`;

  for (const location of locations) {
    locationHTML += `
    <div class="locations__box">
    <img class="locations__img" src="${location.image}" />
        <p class="tip">${location.name}</p> </div>
    `;
  }
  locationHTML += "</div>";

  return locationHTML;
};
