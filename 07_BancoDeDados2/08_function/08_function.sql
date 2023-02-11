drop TABLE demo;

CREATE TABLE clientes(
  id serial PRIMARY KEY,
  nome VARCHAR,
  data_cadastro DATE
);

INSERT INTO clientes
(nome, data_cadastro)
VALUES
('João da Silva','2022-01-01'),('Maria Silva','2022-01-01'),('José da Costa','2022-01-01'),
('Ana Maria','2022-01-02'),('Ricardo Souza','2022-01-02'),('Juliana Rios','2022-01-03'),
('Fernando Souza','2022-01-03'),('Rafaela Silva','2022-01-03'),('Fabio Oliveira','2022-01-03'),
('Felipe Silva','2022-01-04'),('Gabriela Rios','2022-01-04'),('Carlos Silva','2022-01-05'),
('Juliana Costa','2022-01-05'),('Rafael Oliveira','2022-01-05'),('Fabiana Rios','2022-01-05');

CREATE OR REPLACE FUNCTION cadastros_por_dia (data_entrada date)
RETURNS INTEGER AS $$
DECLARE
  resultado INTEGER;
BEGIN
  SELECT 
    COUNT(*) INTO resultado
  FROM 
    clientes
  WHERE 
    data_cadastro = data_entrada;

  RETURN resultado;
END; $$
LANGUAGE plpgsql;

SELECT cadastros_por_dia('2022-01-02');