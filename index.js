const { readFile } = require("fs");

readFile("./db/data/scryfall-cards.json", "utf8", (err, data) => {
  workingData = JSON.parse(data);

  onlyM20 = workingData.filter(card => {
    return card.set === "m20" && card.rarity === "rare";
  });
  console.log(onlyM20[0]);
  onlym20RareCardNames = onlyM20.map(
    ({ name, rarity, mana_cost, oracle_text, image_uris }) => {
      let returningCardObj = {
        name,
        rarity,
        mana_cost,
        oracle_text,
        image: image_uris.normal
      };
      return returningCardObj;
    }
  );

  //console.log(onlym20RareCardNames);
});
