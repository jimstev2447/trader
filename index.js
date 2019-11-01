const { readFile, writeFile } = require("fs");

readFile("./db/data/scryfall-cards.json", "utf8", (err, data) => {
  workingData = JSON.parse(data);

  const onlyM20 = workingData.filter(card => {
    return card.set === "m20" && card.rarity === "rare";
  });
  //console.log(onlyM20[0]);
  const onlym20RareCards = onlyM20.map(
    ({
      name,
      rarity,
      mana_cost,
      oracle_text,
      image_uris,
      mtgo_id,
      set_name
    }) => {
      let returningCardObj = {
        mtgo_id,
        name,
        rarity,
        set_name,
        mana_cost,
        oracle_text,
        image: image_uris.normal
      };
      return returningCardObj;
    }
  );

  writeFile(
    "./db/data/test-data.js",
    JSON.stringify(onlym20RareCards),
    "utf8",
    (err, data) => {
      console.log("file written");
    }
  );

  //console.log(onlym20RareCardNames[0]);
});
