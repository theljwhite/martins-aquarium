export const database = {
  fish: [
    {
      id: 0,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Alligator_Gar_10.JPG/1280px-Alligator_Gar_10.JPG",
      species: "Alligator Gar",
      size: 2,
      customName: "Johny",
      harvestLocation: "Cambodia",
      food: "Plastic",
    },
    {
      id: 1,
      image:
        "https://fish-on.net.au/wp-content/uploads/2014/02/BASS-AUSTRALIAN-1.jpg",
      species: "Bass (Australian)",
      size: 3,
      customName: "Jimbo",
      harvestLocation: "Australia",
      food: "Trash",
    },
    {
      id: 2,
      image:
        "https://www.onthewater.com/wp-content/uploads/2020/06/bluefish-diamond-jig.jpg",
      species: "Bluefish",
      size: 1,
      customName: "Blue",
      harvestLocation: "Virginia",
      food: "Some Plastics",
    },
    {
      id: 3,
      image:
        "https://www.ginkandgasoline.com/wp-content/uploads/2016/02/DSC_5533-2.jpg",
      species: "Brown Trout",
      size: 2,
      customName: "Richard",
      harvestLocation: "Florida",
      food: "Beer cans",
    },
  ],
  locations: [
    {
      id: 0,
      name: "Cambodia",
      image:
        "https://www.experiencetravelgroup.com/blog/wp-content/uploads/2022/12/Dollarphotoclub_73953575-2-scaled.jpg",
    },
    {
      id: 1,
      name: "Australia",
      image:
        "https://www.celebritycruises.com/blog/content/uploads/2022/03/most-beautiful-places-in-australia-the-great-ocean-roads-12-apostles-hero-1920x890.jpg",
    },
    {
      id: 2,
      name: "Florida",
      image:
        "https://swampfeverairboatadventures.com/wp-content/uploads/2022/03/Swamps-in-Florida-Swamp-Fever-Airboat-Adventures.jpg",
    },
    {
      id: 3,
      name: "Virginia",
      image:
        "https://keepvirginiabeautiful.org/wp-content/uploads/2011/09/forest-on-2011-09-27-at-15-14-59.jpg",
    },
  ],
  tips: [
    { id: 0, tip: "tip here", tankTip: "tank tip here" },
    { id: 1, tip: "tip here", tankTip: "tank tip here" },
    { id: 2, tip: "tip here", tankTip: "tank tip here" },
  ],
};

export const getFish = () => {
  const fish = database.fish.map((fish) => ({ ...fish }));
  return fish;
};

export const getTips = () => {
  const tips = database.tips.map((tip) => ({ ...tip }));
  return tips;
};

export const getAllLocations = () => {
  const locations = database.locations.map((location) => ({ ...location }));
  return locations;
};
