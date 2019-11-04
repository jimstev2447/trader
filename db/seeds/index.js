const { cardData, userData, wantedData, collectionsData } = require("../data");
//console.log(cardData, userData, wantedData, collectionsData);

exports.seed = function(knex) {
  console.log("seeding db ...");
  return knex
    .insert(userData)
    .into("users")
    .returning("*")
    .then(() => {
      return knex
        .insert(cardData)
        .into("cards")
        .returning("*")
        .then(() => {
          console.log(cardData);
        })
        .then(() => {
          return knex
            .insert(collectionsData)
            .into("collections")
            .returning("*")
            .then(collectionsData => {
              console.log(collectionsData);
            });
        });
    });
};
