-- DROP TABLE IF EXISTS 'Movie Title'
drop database if exists chris ;
CREATE DATABASE chris;

use chris;

CREATE TABLE `movies` (
  id INTEGER AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
);
