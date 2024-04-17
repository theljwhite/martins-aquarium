import { database } from "./database.js";

const { fish: fishDB } = database;

//TODO test these

export const mostHolyFish = () => {
  const holyFish = [];

  for (const fish of fishDB) {
    if (fish.size % 3 === 0) {
      holyFish.push(fish);
    }
    return holyFish;
  }
};

export const soldierFish = () => {
  const multOfFiveFish = [];
  for (const fish of fishDB) {
    if (fish.size % 5 === 0) {
      multOfFiveFish.push(fish);
    }
  }
};

export const nonHolyFish = () => {
  const regularFish = [];
  for (const fish of fishDB) {
    if (fish.size % 3 !== 0 || fish.size % 5 !== 0) {
      regularFish.push(fish);
    }
  }
  return regularFish;
};
