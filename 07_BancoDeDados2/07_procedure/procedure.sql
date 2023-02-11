drop table demo;

create table produtos(
  id serial PRIMARY KEY,
  Dia DATE NOT NULL,
  Arroz INT,
  Feijão INT,
  Leite INT,
  Acucar INT,
  Azeite INT
);

INSERT INTO produtos
(dia,arroz,feijão,leite,acucar,azeite)
VALUES
('2023-01-01',20,25,30,35,40),
('2023-01-02',21,26,31,36,41),
('2023-01-03',22,27,32,37,42),
('2023-01-04',23,28,33,38,43),
('2023-01-05',24,29,34,39,44),
('2023-01-06',25,30,35,40,45),
('2023-01-07',26,31,36,41,46),
('2023-01-08',27,32,37,42,47),
('2023-01-09',28,33,38,43,48),
('2023-01-10',29,34,39,44,49);

CREATE or REPLACE PROCEDURE vendas_diarias(data_entrada DATE)
RETURNS TABLE (id_dia INT, dia DATE, arroz INT, feijão INT, leite INT, acucar INT, azeite INT) AS $$
BEGIN
  RETURN QUERY
  SELECT *
  FROM produtos
  WHERE produtos.dia = data_entrada;
END; $$
LANGUAGE plpgsql;

SELECT * FROM vendas_diarias('2023-01-05');