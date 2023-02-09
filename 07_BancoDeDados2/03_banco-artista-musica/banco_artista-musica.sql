DROP TABLE demo;

CREATE table artista (
  ID SERIAL PRIMARY KEY,
  nome VARCHAR(20) UNIQUE
);

INSERT into artista
(nome)
VALUES
('Chico Buarque'),
('Renato Russo'),
('Anitta'),
('Guns N Roses'),
('Paramore');

create table musica(
  id serial PRIMARY key,
  nome varchar not NULL,
  duracao_seg int not NULL
);

insert into musica
(nome, duracao_seg)
VALUES
('Envolver', 180),
('Eduardo e Monica', 250),
('Patience', 190),
('The Only Exception', 267),
('Patience', 356);

CREATE TABLE artista_musica (
  fk_id_artista INT,
  fk_id_musica INT,
  CONSTRAINT artista_musica_pk PRIMARY KEY(fk_id_artista,fk_id_musica), 
  CONSTRAINT fk_id_artista FOREIGN key(fk_id_artista) REFERENCES artista(ID),
  CONSTRAINT fk_id_musica FOREIGN key(fk_id_musica) REFERENCES musica(ID)
);

insert into artista_musica VALUES
(1,3),(2,2),(3,1),(4,5),(5,4);

SELECT * FROM artista_musica