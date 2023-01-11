const eletro = document.getElementsByClassName("eletro");
const moveisDecoracao = document.getElementsByClassName("moveis-decoracao");
const classeSoma = document.getElementsByClassName("soma")

let carrinhoCompleto = [
    {produto: "geladeira", tipo: "eletro", preço_1: 3499.00, preço_2: "R$ 3.499.99"},
    {produto: "smarphone", tipo: "eletro", preço_1: 809.10, preço_2: "R$ 809,10"},
    {produto: 'smart tv 50" 4k', tipo: "eletro", preço_1: 2199.99, preço_2: "R$ 2.199,99"},
    {produto: "console PS5", tipo: "eletro", preço_1: 4299.99, preço_2: "R$ 4.299,99"},
    {produto: "controle PS5", tipo: "eletro", preço_1: 449.99, preço_2: "R$449,99"},

    {produto: "air fryer", tipo: "eletro", preço_1: 345.50, preço_2: "R$ 345.50"},
    {produto: "batedeira", tipo: "eletro", preço_1: 320.50, preço_2: "R$ 320,50"},
    {produto: "sofá retrátil", tipo: "móvel e decoração", preço_1: 949.00, preço_2: "R$ 949,00"},
    {produto: "cadeira", tipo: "móvel e decoração", preço_1: 399.99, preço_2: "R$ 399,99"},
    {produto: "mesa de jantar", tipo: "móvel e decoração", preço_1: 412.41, preço_2: "R$412,41"},

    {produto: "guarda roupa", tipo: "móvel e decoração", preço_1: 586.00, preço_2: "R$ 586.00"},
    {produto: "rack para tv", tipo: "móvel e decoração", preço_1: 235.92, preço_2: "R$ 235,92"},
    {produto: "cama box casal", tipo: "móvel e decoração", preço_1: 416.76, preço_2: "R$ 416.76"},
    {produto: "espelho", tipo: "móvel e decoração", preço_1: 147.87, preço_2: "R$ 147,87"},
    {produto: "aparador de livros", tipo: "móvel e decoração", preço_1: 53.89, preço_2: "R$ 53,89"},
]

const A = localStorage.getItem("carrinhoUsuario")
const B = JSON.parse(A)

for (i=0; i<=6; i++) {
    if (B[i] == 1) {
        const divis = document.createElement("div")
        divis.innerHTML =`
        <div class="cards">
        <div><img src="assets/img/${i+1}.webp" width="125px" height="125px"></div>
        <div>
            <p><span class="setor">eletro</span></p>  
            <p><span class="nome-produto">${carrinhoCompleto[i].produto}</span></p>                
            <p><span class="preço">${carrinhoCompleto[i].preço_2}</span></p>   
  
            <button class="botao-subtrair-00" onclick="subtrair(${i})">-</button>
            <input class="quantidade-produto" id="quantidade-produto${i}" type="number" value="1" min="1">
            <button class="botao-adicionar-00" onclick="adicionar(${i})">+</button>             
 
        </div>
        </div>
        `
        eletro[0].appendChild(divis)
    }
}

for (i=7; i<15; i++) {
    if (B[i] == 1) {
        const divis = document.createElement("div")
        divis.innerHTML =`
        <div class="cards">
        <div><img src="assets/img/${i+1}.webp" width="125px" height="125px"></div>
        <div>
            <p><span class="setor">eletro</span></p>  
            <p><span class="nome-produto">${carrinhoCompleto[i].produto}</span></p>                
            <p><span class="preço">${carrinhoCompleto[i].preço_2}</span></p>

            <button class="botao-subtrair-00" onclick="subtrair(${i})">-</button>
            <input class="quantidade-produto" id="quantidade-produto${i}" type="number" value="1" min="1">
            <button class="botao-adicionar-00" onclick="adicionar(${i})">+</button>             
 
        </div>
        </div>
        `
        moveisDecoracao[0].appendChild(divis)
    }
}

const displaySoma = document.createElement("span")
classeSoma[0].appendChild(displaySoma)


function f_soma() {
    soma = 0
    for (i=0; i<B.length; i++) {
        if (B[i] == 1){
            soma = soma + (carrinhoCompleto[i].preço_1)*(Number(document.getElementById(`quantidade-produto${i}`).value))
        }
    }
    displaySoma.innerText = soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

function adicionar(adc) {
    if (Number(document.getElementById(`quantidade-produto${adc}`).value) >= 1) {
        document.getElementById(`quantidade-produto${adc}`).value = Number(document.getElementById(`quantidade-produto${adc}`).value) + 1;

        f_soma()
    }
}

function subtrair(sub) {
    if (Number(document.getElementById(`quantidade-produto${sub}`).value) > 1) {
        document.getElementById(`quantidade-produto${sub}`).value = Number(document.getElementById(`quantidade-produto${sub}`).value) - 1;
        
        f_soma()
    }
}

f_soma()

