DROP DATABASE IF EXISTS trader_test;
CREATE DATABASE trader_test;

\c trader_test;



CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(12),
  name VARCHAR(40)
);