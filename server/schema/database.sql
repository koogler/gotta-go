CREATE DATABASE gottago;

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS locations CASCADE;
CREATE TABLE locations(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  open_time TIME NOT NULL,
  close_time TIME NOT NULL,
  accessible BOOLEAN NOT NULL,
  changing_table BOOLEAN NOT NULL,
  sharps_disposal BOOLEAN NOT NULL,
  requires_purchase BOOLEAN NOT NULL,
  privacy_rating INTEGER NOT NULL CHECK(privacy_rating BETWEEN 1 and 5)
);

DROP TABLE IF EXISTS reviews CASCADE;
CREATE TABLE reviews(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  location_id INTEGER REFERENCES locations(id) ON DELETE CASCADE,
  review_date DATE NOT NULL DEFAULT CURRENT_DATE,
  review_body VARCHAR(255) NOT NULL,
  privacy_rating INTEGER NOT NULL CHECK(privacy_rating BETWEEN 1 and 5)
);