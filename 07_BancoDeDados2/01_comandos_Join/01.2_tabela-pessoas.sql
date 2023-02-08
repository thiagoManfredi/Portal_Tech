CREATE table Pessoas(
  id_pessoa SERIAL PRIMARY KEY,
  nome VARCHAR not NULL,
  time_id INT
);

insert into pessoas
(nome, time_id)
VALUES
('Marcio',1), ('Jorge',NULL), ('Ana',1),
('Paulo',3), ('Thiago',1), ('Mariana',1),
('Gustavo',2), ('Beatriz',2), ('Daniel',NULL),
('Patrícia',3);

--=====================================

ALTER TABLE pessoas
add constraint pessoas_time_id
FOREIGN KEY (time_id)
REFERENCES "time" (id_time);

SELECT * FROM pessoas