-- Método INNER JOIN

SELECT nome, time
FROM pessoas
INNER JOIN time
ON pessoas.time_id = time.id_time;

-- Método LEFT JOIN

SELECT nome, time
FROM pessoas
LEFT JOIN time
ON pessoas.time_id = time.id_time;

-- Método RIGHT JOIN

SELECT nome, time
FROM pessoas
RIGHT JOIN time
ON pessoas.time_id = time.id_time;

-- Método OUTER JOIN, FULL OUTER JOIN ou FULL JOIN

SELECT nome, time
FROM pessoas
LEFT JOIN time
ON pessoas.time_id = time.id_time
UNION
SELECT nome, time
FROM pessoas
RIGHT JOIN time
ON pessoas.time_id = time.id_time;
