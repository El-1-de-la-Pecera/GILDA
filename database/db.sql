
CREATE DATABASE gilda;
CREATE TABLE product(
  id SERIAL PRIMARY KEY,
  name VARCHAR(200),
  description VARCHAR(400),
  stock_bodega INTEGER,
  stock_sala INTEGER,
  price DECIMAL,
  sku VARCHAR(200),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) unique,
  name VARCHAR(50),
  password VARCHAR(50),
  tipo VARCHAR(50)
);
