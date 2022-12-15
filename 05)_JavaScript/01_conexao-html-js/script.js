//---------------------------------------------------------
// Seleção do elemento por ID
//---------------------------------------------------------

const coment = document.getElementById("comentario");

coment.innerText = "E aí cara, o que tu achou?"

//---------------------------------------------------------
// Seleção do elemento por Classe
//---------------------------------------------------------

const nome = document.getElementsByClassName("post-autor")[0];

nome.innerHTML = "<strong>Autor:</strong> Mbappé da Silva Sauro </p>"

console.log(nome.innerText)

//---------------------------------------------------------
// Seleção por CSS - Query Selector
//---------------------------------------------------------

const nome2 = document.querySelector("#post02 .post-autor");

nome2.innerHTML = "<strong>Autor:</strong> Luiza Sonza do Nascimento </p>"

console.log(nome2.innerText)

//---------------------------------------------------------
// Adicionando um trecho de HTML
//---------------------------------------------------------

let novaAvaliacao = document.createElement("Article");

novaAvaliacao.innerHTML =
`
<h3>Aprendi muito:</h3>
<p class="post-autor"><strong>Autor:</strong> Thiago Manfredi </p>
<p class="post-data"><strong>Data:</strong> 15/12/2022</p>
<p class="post-texto">
  Tive a oportunidade de aprender uma gama variada de conteúdos em um tempo relativamente pequeno. Não é fácil encontrar oportunidades assim em outros lugares. <strong>Espero</strong> que esse seja apenas o início de uma carreira de sucesso no mundo da programação.
</p>
`;

novaAvaliacao.classList = "post";
novaAvaliacao.id = "post03";

document.getElementById("posts").appendChild(novaAvaliacao);

console.log(novaAvaliacao)




