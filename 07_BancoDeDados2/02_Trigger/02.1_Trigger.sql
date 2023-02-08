drop TABLE demo;

CREATE TABLE numeros (
  id serial PRIMARY KEY,
  numero_1 REAL not NULL,
  numero_2 REAL not null,
  Soma REAL,
  Subtração REAL,
  Multiplicação REAL,
  Divisão REAL
);

CREATE or REPLACE FUNCTION realizarOPRs()
RETURNs TRIGGER as $$
BEGIN
  UPDATE numeros
  SET 
  soma = NEW.numero_1 + NEW.numero_2,
  subtração = NEW.numero_1 - NEW.numero_2,
  multiplicação = NEW.numero_1 * NEW.numero_2,
  divisão = NEW.numero_1 / NEW.numero_2
  WHERE id = NEW.id;
RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tg_realizaOPRs
AFTER
	INSERT
ON numeros
	FOR EACH ROW
EXECUTE
	PROCEDURE
		realizarOPRs();
	
INSERT into numeros
(numero_1,numero_2)
VALUES
(4,5),(2,1.5),(0,4),(6,3.75);

SELECT * FROM numeros;