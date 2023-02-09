DROP TABLE demo;

CREATE table categoria (
  id_categoria SERIAL PRIMARY KEY,
  opcoes VARCHAR
);

insert into categoria
(opcoes)
VALUES
('simples'),('simples com duas camas'),('casal');

CREATE TABLE vista (
  id_vista SERIAL PRIMARY KEY,
  opcoes VARCHAR
);

insert into vista
(opcoes)
VALUES
('vista para o mar'),('vista para a cidade');

CREATE TABLE quarto (
  numero INT PRIMARY KEY,
  categoria INT,
  vista INT	  
);

ALTER TABLE quarto
ADD CONSTRAINT tbquarto_categoria
FOREIGN KEY (categoria)
REFERENCES "categoria" (id_categoria);

ALTER TABLE quarto
ADD CONSTRAINT tbquarto_vista
FOREIGN KEY (vista)
REFERENCES "vista" (id_vista);

insert into quarto
(numero, categoria, vista)
VALUES
(101,1,2),(102,2,1),(103,1,2),(201,1,1),(202,2,1),(203,3,2);

CREATE table clientes (
  NomeResponsavel VARCHAR UNIQUE,
  RG VARCHAR(12) PRIMARY KEY,
  Telefone VARCHAR(15)
);

insert into clientes
(nomeresponsavel, RG, telefone)
VALUES
('Maria Silva','12.345.678-9','(11) 98765-4321'),
('João Ferreira','23.456.789-0','(21) 98765-1234'),
('Ana Paula Oliveira','34.567.890-1','(31) 98765-6789'),
('Pedro Rodrigues','45.678.901-2','(41) 98765-9876'),
('Gabriela Souza','56.789.012-3','(51) 98765-2345');

create TABLE meioPagamento (
  id_meioPagamento serial PRIMARY key,
  meioPagamento VARCHAR
);

insert into meiopagamento
(meiopagamento)
VALUES
('cartão de crédito'),('cartão de débito'),('dinheiro'),('Pix');

CREATE table registroAluguel (
  RG VARCHAR(12),
  numeroQuarto INT PRIMARY KEY,
  entrada DATE,
  saida DATE,
  meioPagamento INT,
  valorTotal INT
);

ALTER TABLE registroaluguel
ADD CONSTRAINT tbregistroaluguel_RG
FOREIGN KEY (RG)
REFERENCES "clientes" (RG);

ALTER TABLE registroaluguel
ADD CONSTRAINT tbregistroaluguel_meiopagamento
FOREIGN KEY (meiopagamento)
REFERENCES "meiopagamento" (id_meiopagamento);

INSERT into registroaluguel
(rg, numeroquarto, entrada, saida, meiopagamento, valortotal)
VALUES
('56.789.012-3',101,'2023-02-01 15:30:00','2023-02-05 10:15:00',1,800),
('45.678.901-2',102,'2023-02-03 13:15:00','2023-02-08 10:30:00',3,1000),
('23.456.789-0',103,'2023-02-05 12:00:00',NULL,NULL,NULL),
('34.567.890-1',201,'2023-02-02 07:00:30','2023-02-04 07:00:00',1,400),
('12.345.678-9',202,'2023-02-07 10:15:30',NULL,NULL,NULL);

SELECT RA.rg, RA.numeroquarto, RA.entrada, RA.saida, MP.meiopagamento, RA.valortotal
from registroaluguel AS RA
INNER JOIN meiopagamento AS MP
on RA.meiopagamento = MP.id_meiopagamento