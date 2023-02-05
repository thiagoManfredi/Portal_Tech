DROP TABLE demo;
 
CREATE TABLE ALUNO(
  Matrícula INT NOT NULL,
  Telefone VARCHAR(13) NOT NULL
);

ALTER TABLE aluno
ADD COLUMN ID SERIAL PRIMARY KEY;

alter TABLE aluno
add COLUMN nome VARCHAR(20);

alter TABLE aluno
add COLUMN email VARCHAR;

alter TABLE aluno
add COLUMN endereço VARCHAR;

insert into aluno
(nome,matrícula,email,endereço,telefone)
VALUES
('João Carlos', 1234, 'Jcarlos@gmail.com', 'Rua 13 de maio', '(11)7825-4489');

insert into aluno
(nome,matrícula,email,endereço,telefone)
VALUES
('José Vitor', 2345, 'Jvitor@gmail.com', 'Rua da Saudade', '(11)7825-6589');

insert into aluno
(nome,matrícula,email,endereço,telefone)
VALUES
('Paulo André', 3456, 'Pandr@gmail.com', 'Rua do Sol', '(11)7825-4495');

--Mudando a ordem das colunas

BEGIN;

CREATE TABLE aluno2 (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(20),
  matrícula INT NOT NULL,
  email VARCHAR,
  endereço VARCHAR,
  telefone VARCHAR(13) NOT NULL
);

INSERT INTO aluno2
SELECT id, nome, matrícula, email, endereço, telefone
FROM aluno;

DROP TABLE aluno;

ALTER TABLE aluno2
RENAME TO aluno;

COMMIT;

SELECT * FROM aluno