INSERT INTO users (id, username, password)
VALUES (1, 'johnsmith', 'test');

INSERT INTO users (id, username, password)
VALUES (2, 'test', 'test');

INSERT INTO users (id, username, password)
VALUES (3, 'username', 'password');

ALTER SEQUENCE users_id_seq RESTART WITH 4;