drop TABLE demo;

Create TABLE cliente (
  id serial PRIMARY KEY,
  nome varchar not NULL,
  sobrenome varchar not null,
  idade INT not null
);

create table produto (
  id serial PRIMARY KEY,
  item VARCHAR not NULL,
  marca VARCHAR not NULL
);

create table pedido (
  id serial PRIMARY KEY,
  fk_id_cliente INT not NULL,
  fk_id_produto INT not NULL,
  quantidade INT not NULL,
  CONSTRAINT fk_id_cliente FOREIGN KEY(fk_id_cliente) REFERENCES cliente (ID),
  CONSTRAINT fk_id_produto FOREIGN KEY(fk_id_produto) REFERENCES produto (ID)
);

insert INTO cliente
(nome, sobrenome, idade)
VALUES
('Rodolfo','Jeremias',78),
('Klovis','Thomas',56),
('Thilara','Silva',24),
('Thais','Pereira',14),
('Renato','Calcares',85),
('Regina','Soares',29);

insert into produto
(item, marca)
VALUES
('chocolate','nestle'),
('bala','fini'),
('agua','agua da pedra');

insert into pedido
(fk_id_cliente, fk_id_produto, quantidade)
VALUES
(1,3,5),
(6,1,2),
(3,2,20);

-- Consultas através do comando JOIN

select *
from pedido
inner JOIN cliente
ON pedido.fk_id_cliente = cliente.id;

select *
from pedido
RIGHT JOIN cliente
ON pedido.fk_id_cliente = cliente.id;

select *
from pedido
RIGHT JOIN cliente
ON pedido.fk_id_cliente = cliente.id
WHERE pedido.id is NULL;

select pedido.id AS Pedido, pedido.quantidade, cliente.id AS Cliente, cliente.nome
from pedido
JOIN cliente
on pedido.id = cliente.id;

SELECT *
FROM pedido
RIGHT JOIN cliente
ON fk_id_cliente = cliente.id
LEFT join produto
on fk_id_produto = produto.id;

SELECT nome, sobrenome, cliente.id 
FROM pedido
RIGHT JOIN cliente
ON fk_id_cliente = cliente.id
LEFT join produto
on fk_id_produto = produto.id;

SELECT cliente.id AS Cliente, nome, sobrenome, pedido.id AS Pedido, quantidade, item
FROM pedido
RIGHT JOIN cliente
ON fk_id_cliente = cliente.id
LEFT join produto
on fk_id_produto = produto.id;