const { readScryfallData } = require("./utils");

readScryfallData().then(data => {
  console.log(data[0]);
});
