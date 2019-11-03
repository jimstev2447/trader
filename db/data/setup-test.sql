DROP DATABASE IF EXISTS trader_test;
CREATE DATABASE trader_test;

\c trader_test;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(12),
  name VARCHAR(40)
);

CREATE TABLE cards (
  trader_card_id SERIAL PRIMARY KEY,
  mtgo_id INT,
  name VARCHAR,
  rarity VARCHAR,
  set_name VARCHAR,
  mana_cost VARCHAR,
  oracle_text TEXT,
  image VARCHAR
);

CREATE TABLE collections (
  collection_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(user_id),
  card_id INT REFERENCES cards(trader_card_id),
  quantity INT
);

CREATE TABLE wanted_cards (
  wanted_cards_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(user_id),
  card_id INT REFERENCES cards(trader_card_id),
  quantity INT
);