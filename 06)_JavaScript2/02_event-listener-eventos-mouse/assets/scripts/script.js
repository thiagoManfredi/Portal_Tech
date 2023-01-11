const botaoComprar = document.getElementsByClassName("botão-comprar");
const discoSoma = document.getElementsByClassName("disco-soma");

let somaProdutos = 0
let carrinhoUsuario = []

function produtoIncluido(n) {
    if (carrinhoUsuario[n]){
        console.log("Esse produto já está no carrinho.")
    } else {
        somaProdutos = somaProdutos + 1
        console.log(somaProdutos)
        discoSoma[0].classList.add('visible')
        botaoComprar[n].classList.add('muda-cor')
    }

    carrinhoUsuario[n] = 1
    discoSoma[0].innerText = somaProdutos
    
    console.log(carrinhoUsuario)
    localStorage.setItem("carrinhoUsuario", JSON.stringify(carrinhoUsuario));
}


