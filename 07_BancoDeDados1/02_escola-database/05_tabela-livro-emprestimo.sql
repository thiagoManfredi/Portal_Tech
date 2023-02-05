CREATE TABLE livro_emprestimo(
  Cod_livro INT PRIMARY KEY,
  Cod_Emprestimo INT
);

INSERT into livro_emprestimo
(cod_livro, cod_emprestimo)
VALUES
(3,1);

INSERT into livro_emprestimo
(cod_livro, cod_emprestimo)
VALUES
(1,3);

INSERT into livro_emprestimo
(cod_livro, cod_emprestimo)
VALUES
(2,2);

ALTER TABLE livro_emprestimo
ADD CONSTRAINT livroemprestimo_livroCod_Livro
FOREIGN KEY (cod_livro)
REFERENCES "livro" (cod_livro);

ALTER TABLE livro_emprestimo
ADD CONSTRAINT livroemprestimo_emprestimoCodigo
FOREIGN KEY (cod_emprestimo)
REFERENCES "emprestimo" (codigo);

SELECT * FROM livro_emprestimo