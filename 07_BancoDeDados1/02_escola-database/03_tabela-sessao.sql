CREATE TABLE SESSAO(
  Codigo SERIAL PRIMARY KEY,
  Descricao VARCHAR,
  Localizacao VARCHAR
);

insert into sessao
(descricao, localizacao)
VALUES
('Sessao1', 'Pratilheira1');

insert into sessao
(descricao, localizacao)
VALUES
('Sessao2', 'Pratilheira2');

insert into sessao
(descricao, localizacao)
VALUES
('Sessao3', 'Pratilheira3');

SELECT * FROM sessao