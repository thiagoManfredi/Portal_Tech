CREATE TABLE livro(
  Cod_Livro SERIAL PRIMARY KEY,
  Titulo VARCHAR Not NULL,
  Autor VARCHAR Not NULL,
  Cod_Sessao INT Not NULL
);

insert into livro
(titulo, autor, cod_sessao)
VALUES
('Modelo Conceitual e Diagramas ER', 'Pressman, Roger S.', '3');

insert into livro
(titulo, autor, cod_sessao)
VALUES
('Livro 2: Modelo Relacional e Álgebra Relacional', 'Heuser, Carlos Alberto', '1');

insert into livro
(titulo, autor, cod_sessao)
VALUES
('Livro 3: Linguagem SQL', 'Beighley, Lynn', '2');

ALTER TABLE livro
ADD CONSTRAINT livro_sessaoCodigo
FOREIGN KEY (cod_sessao)
REFERENCES "sessao" (codigo);

SELECT * FROM livro