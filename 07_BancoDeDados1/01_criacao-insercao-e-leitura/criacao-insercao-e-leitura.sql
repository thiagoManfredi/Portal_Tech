DROP TABLE demo;

CREATE TABLE instrumento(
  ID_Instrumento SERIAL PRIMARY KEY,
  Nome varchar(10) not NULL,
  Preco DOUBLE PRECISION not NULL,
  Em_Promocao BOOLEAN not NULL,
  Tipo VARCHAR not NULL,
  Ano_de_Fabricacao VARCHAR
);

insert INTO instrumento
(nome, preco, em_promocao, tipo, ano_de_fabricacao)
VALUES
('Piano', 9499.00, FALSE, 'Corda', 1990);

insert INTO instrumento
(nome, preco, em_promocao, tipo)
VALUES
('Saxofone', 899.90, TRUE, 'Sopro');

insert INTO instrumento
(nome, preco, em_promocao, tipo)
VALUES
('Bateria', 599.90, FALSE, 'Percussão');

insert INTO instrumento
(nome, preco, em_promocao, tipo, ano_de_fabricacao)
VALUES
('Flauta', 199.90, FALSE, 'Sopro', 2015);

insert INTO instrumento
(nome, preco, em_promocao, tipo, ano_de_fabricacao)
VALUES
('Guitarra', 499.90, TRUE, 'Corda', 2010);

INSERT INTO instrumento
(nome, preco, em_promocao, tipo, ano_de_fabricacao)
VALUES
('Violão', 399.90, TRUE, 'Corda', 1997);

SELECT * FROM instrumento

--A partir daqui cada comando tem que ser inserido individualmente no simulador.

--00) Trazer os atributos nome, id_instrumento e preco dos registros cujo preco seja menor que 250.  
SELECT nome, id_instrumento, preco FROM instrumento WHERE preco < 250

--01) atributos em_promoção e preco , condição preco  >  400
SELECT em_promocao, preco FROM instrumento WHERE preco > 400

--02) trazer todos atributos dos registros em que em_promocao seja TRUE
SELECT * FROM instrumento WHERE em_promocao = TRUE

--03) trazer atributos nome e preco em que id_instrumento seja igual a 6
SELECT nome, preco FROM instrumento WHERE id_instrumento = 6

--04) trazer atributos id_instrumento, preco e em_promocao dos registros em que nome seja igual a violão
SELECT id_instrumento, preco, em_promocao FROM instrumento WHERE nome = 'Violão'