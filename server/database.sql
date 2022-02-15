CREATE DATABASE gottago

CREATE TABLE users(
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
);

CREATE TABLE locations(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  is_open BOOLEAN,
  open_time TIME NOT NULL,
  close_time TIME NOT NULL,
  accessible BOOLEAN NOT NULL,
  changing_table BOOLEAN NOT NULL,
  sharps_disposal BOOLEAN NOT NULL,
  requires_purchase BOOLEAN NOT NULL,
  privacy_rating INT NOT NULL
);

CREATE TABLE reviews(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES user(id) ON DELETE CASCADE,
  locations_id INTEGER REFERENCES locations(id) ON DELETE CASCADE,
  review_date DATE NOT NULL,
  review_body VARCHAR(255) NOT NULL,
  clean BOOLEAN NOT NULL,
  accessible BOOLEAN NOT NULL,
  changing_table BOOLEAN NOT NULL,
  sharps_disposal BOOLEAN NOT NULL,
  requires_purchase BOOLEAN NOT NULL,
  privacy_rating INT NOT NULL,
);