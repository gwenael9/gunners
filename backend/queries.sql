CREATE TABLE player
(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	firstname VARCHAR(100) NOT NULL,
	lastname VARCHAR(100) NOT NULL,
    country VARCHAR(100),
    number INT,
    age INT
);

INSERT INTO player (firstname, lastname, country, number, age) VALUES ('Bukayo', 'Saka', 'Angleterre', 7, 22),
('William', 'Saliba', 'France', 2, 22),
('Gabriel', 'Jesus', 'Brésil', 9, 26),
('Thomas', 'Partey', 'Ghana', 5, 30);

DROP TABLE player