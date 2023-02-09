DROP TABLE demo;

CREATE table artista(
  ID serial PRIMARY key,
  nome VARCHAR(20) UNIQUE
);

CREATE table musica(
  ID serial PRIMARY key,
  nome VARCHAR(30) not NULL
);

CREATE table gravacao(
  ID serial PRIMARY key,
  duracao_seg INT not NULL
);

drop TABLE gravacao;

alter TABLE musica add COLUMN
duracao_seg INT not NULL;

INSERT into artista
(nome)
VALUES
('Djavan'),('Valeria'),('Anitta');

INSERT into musica
(nome,duracao_seg)
VALUES
('Flor de Lis',285),('Secrets',57),('Bang',251);

alter TABLE musica
add COLUMN fk_id_artista INT,

add CONSTRAINT fk_id_artista
FOREIGN KEY(fk_id_artista)
REFERENCES artista(ID);

UPDATE musica
set fk_id_artista = 1
WHERE nome = 'Flor de Lis';

UPDATE musica
set fk_id_artista = 2
WHERE nome = 'Secrets';

UPDATE musica
set fk_id_artista = 3
WHERE nome = 'Bang';

alter TABLE musica
drop CONSTRAINT fk_id_artista;

alter TABLE musica
add CONSTRAINT fk_id_artista
FOREIGN KEY(fk_id_artista)
REFERENCES artista(ID)
on delete CASCADE;

DELETE from artista
WHERE nome = 'Djavan';

SELECT * FROM musica
