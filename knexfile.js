const ENV = process.env.NODE_ENV || "development";

const dbConfig = {
  development: {
    client: "pg",
    connection: {
      database: "trader"
    },
    seeds: { directory: "./db/seeds" }
  },
  test: {
    client: "pg",
    connection: {
      database: "trader_test"
    },
    seeds: { directory: "./db/seeds" }
  }
};

module.exports = dbConfig[ENV];
