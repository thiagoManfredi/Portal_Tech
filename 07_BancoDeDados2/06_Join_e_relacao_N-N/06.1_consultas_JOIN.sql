drop TABLE demo;

Create TABLE cliente (
  id serial PRIMARY KEY,
  nome varchar not NULL,
  sobrenome varchar not null,
  idade INT not null
);

Create TABLE pedido (
  id serial PRIMARY KEY,
  item varchar not NULL,
  quantidade INT not null,
  fk_id_cliente INT not null,
  CONSTRAINT fk_id_cliente FOREIGN KEY(fk_id_cliente) REFERENCES cliente(ID)
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

insert INTO pedido
(item, quantidade, fk_id_cliente)
VALUES
('roda',3,1),
('guitarra',2,2),
('palmito',5,3),
('teclado',10,4);

-- Consultas através do comando JOIN

select * from pedido
inner JOIN cliente
ON pedido.fk_id_cliente = cliente.id;

select * from pedido
RIGHT JOIN cliente
ON pedido.fk_id_cliente = cliente.id;

select * from pedido
RIGHT JOIN cliente
ON pedido.fk_id_cliente = cliente.id
WHERE pedido.id is NULL;

select pedido.id, pedido.item, cliente.id, cliente.nome
from pedido
JOIN cliente
on pedido.id = cliente.id;