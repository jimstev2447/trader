const { readFile } = require("fs");

exports.readScryfallData = () => {
  return new Promise((resolve, reject) => {
    readFile("./db/data/scryfall-cards.json", "utf8", (err, cardArray) => {
      if (err) reject(err);
      else resolve(JSON.parse(cardArray));
    });
  });
};
