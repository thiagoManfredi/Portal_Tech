CREATE TABLE emprestimo(
  Codigo SERIAL PRIMARY KEY,
  Data_hora VARCHAR(18),
  Data_devolucao VARCHAR(10),
  fk_alunoID INT NOT NULL
);

ALTER TABLE emprestimo
ADD CONSTRAINT emprestimo_alunoID
FOREIGN KEY (fk_alunoID)
REFERENCES "aluno" (id);

insert into emprestimo
(data_hora, data_devolucao, fk_alunoid)
VALUES
('12/03/2022 | 15:25', '15/03/2022', 1);

insert into emprestimo
(data_hora, data_devolucao, fk_alunoid)
VALUES
('15/03/2022 | 14:32', '18/03/2022', 2);

insert into emprestimo
(data_hora, data_devolucao, fk_alunoid)
VALUES
('20/03/2022 | 03:51', '23/03/2022', 3);

SELECT * FROM emprestimo