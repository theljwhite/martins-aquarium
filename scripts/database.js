export const database = {
  fish: [
    {
      id: 0,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Alligator_Gar_10.JPG/1280px-Alligator_Gar_10.JPG",
      species: "Alligator Gar",
      length: "2ft",
      customName: "Johny",
      harvestLocation: "Cambodia",
      diet: "Plastic",
    },
    {
      id: 1,
      image:
        "https://static.fishingbooker.com/public/images/fish/275x160/bass-australian.png",
      species: "Bass (Australian)",
      length: "1ft",
      customName: "Jimbo",
      harvestLocation: "Florida",
      diet: "Trash",
    },
    {
      id: 2,
      image:
        "https://static.fishingbooker.com/public/images/fish/275x160/bluefish.png",
      species: "Bluefish",
      length: "1ft",
      customName: "Blue",
      harvestLocation: "Virginia",
      diet: "Some Plastics",
    },
    {
      id: 3,
      image:
        "https://static.fishingbooker.com/public/images/fish/275x160/brown-trout.png",
      species: "Brown Trout",
      length: "1ft",
      customName: "Richard",
      harvestLocation: "Florida",
      diet: "Beer cans",
    },
  ],
  locations: [],
};

export const getFish = () => {
  const fish = database.fish.map((fish) => ({ ...fish }));
  return fish;
};
