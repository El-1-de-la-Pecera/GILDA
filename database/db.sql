CREATE DATABASE gilda IF NOT EXISTS;

use gilda;

CREATE TABLE product(
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200),
  description VARCHAR(400),
  price DECIMAL,
  sku VARCHAR(200),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

describe product;

ALTER TABLE product ADD sku VARCHAR(200);
ALTER TABLE product ADD marca VARCHAR(200);
ALTER TABLE product ADD stock INTEGER(4);
