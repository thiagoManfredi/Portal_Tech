const arrayPostagens = [
  {
    titulo: "Pop Vegan (filial)",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto: "Restaurante em <strong>Ipanema</strong> com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
  },
  {
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina."
  },
  {
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
  },
  {
    titulo: "Vegan Food",
    subtitulo: "Sabor e saúde!",
    data: "30/02/2022",
    texto: "Venha conhecer nossos pratos e se apaixonar pelo sabor. Certeza de que vai querer voltar!"
  },
]

//----------------------------------------------------------------
// 1) Primeiro forma:
//    a) Criando um elemento por meio do método CreateElement;
//    b) Gerando conteúdo através do innerHTML;
//    b) Adicionando ao HTML usando o appendChild.
//----------------------------------------------------------------

/*
const article = document.createElement("article")
article.id = "post-1";
article.innerHTML =`
<h3>Pop Vegan</h3>
<p class="subtitulo">Comida vegana para todos!</p>
<div class="data">06/07/2022</div>
<p>
  Restaurante em <strong>Consolação</strong> com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)
</p>
<style>    
  #post-1 {background-color: rgb(179, 159, 219)};
</style>
`
const main = document.querySelector("main")
main.appendChild(article)
*/

//----------------------------------------------------------------
// 2) Segunda forma:
//    a) Gerando um laço de repetição para englobar o processo;
//    b) Criando um elemento por meio do método CreateElement;
//    c) Gerando conteúdo através do innerHTML;
//    d) Gerando uma cor de fundo randômica por meio de uma função criada;
//    e) Adicionando ao HTML usando o appendChild.
//    f) Novo objeto adicionado a array para testar a iteração;
//----------------------------------------------------------------

for (let i=0; i < arrayPostagens.length; i++){
  const article = document.createElement('article')
  
  article.id = `post-${i+1}`;

  article.innerHTML =`
    <h3>${arrayPostagens[i].titulo}</h3>
    <p class="subtitulo">${arrayPostagens[i].subtitulo}</p>
    <div class="data">${arrayPostagens[i].data}</div>
    <p>${arrayPostagens[i].texto}</p>
    
    <style>    
    #post-${i+1} {background-color: ${
      "#" + Math.floor(Math.random()*16777215).toString(16)
    };
    </style>
  `
    
  const main = document.querySelector("main")
  main.appendChild(article)
}
