DROP DATABASE burgers_db IF EXISTS;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT(11) NOT NULL AUTO_INCREMENT,
    burgerName VARCHAR(255) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);



