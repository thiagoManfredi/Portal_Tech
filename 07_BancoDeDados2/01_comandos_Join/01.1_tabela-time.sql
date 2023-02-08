DROP TABLE demo;

CREATE table Time(
  id_time SERIAL PRIMARY KEY,
  time VARCHAR not NULL
);

insert into time
(time)
VALUES
('Flamengo'),('Vasco'),('Fluminense'),('Botafogo');

SELECT * FROM time
