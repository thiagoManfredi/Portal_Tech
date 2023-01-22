// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");
let idadeInput = document.getElementById("idade");
let idadeLabel = document.querySelector('label[for="idade"]');
let idadeHelper = document.getElementById("idade-helper");
let senhaHelper = document.getElementById("senha-helper");
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let confirmarSenhaInput = document.getElementById("confirmar-senha");
let confirmarSenhaLabel = document.querySelector('label[for="confirmar-senha"]');
let confirmarSenhaHelper = document.getElementById('confirma-senha-helper');
const form = document.getElementById("form")
let usernameStatus = false
let emailStatus = false
let idadeStatus = false
let senhaStatus = false
let confirmarSenhaStatus = false

// Validar username

usernameInput.addEventListener('blur', (e)=>{
    value = e.target.value
    if (value.length == 0) {  
        usernameLabel.classList.add('required-popup')
        usernameStatus = false
    } else if (value.length > 2 && value.length < 11) {
        usernameInput.classList.add('correct')
        usernameHelper.classList.remove('visible') 
        usernameLabel.classList.remove('required-popup')
        usernameStatus = true
    } else {
        usernameHelper.innerText = 'Nome tem que ter entre 2 e 10 letras'
        usernameInput.classList.add('error')
        usernameHelper.classList.add('visible')  
        usernameInput.classList.remove('correct')
        usernameLabel.classList.remove('required-popup')
        usernameStatus = false
    }
})

// Validar email

emailInput.addEventListener('blur', (e)=>{
    value = e.target.value
    if (value.length == 0) {  
        emailLabel.classList.add('required-popup')
        emailStatus = false
    } else if (value.includes('@') && value.includes('.com')) {
        emailInput.classList.add('correct')
        emailHelper.classList.remove('visible') 
        emailLabel.classList.remove('required-popup')
        emailStatus = true
    } else {
        emailInput.classList.add('error')
        emailHelper.innerText = 'email tem que conter "@" e ".com"'
        emailHelper.classList.add('visible')  
        emailInput.classList.remove('correct')
        emailLabel.classList.remove('required-popup')
        emailStatus = false
    }
})

// Validar idade

idadeInput.addEventListener('blur', (e)=>{
    value = e.target.value
    if (value.length == 0) {  
        idadeLabel.classList.add('required-popup')
        idadeStatus = false
    } else if (value >= 18) {
        idadeInput.classList.add('correct')
        idadeHelper.classList.remove('visible') 
        idadeLabel.classList.remove('required-popup')
        idadeStatus = true
    } else {
        idadeInput.classList.add('error')
        idadeHelper.innerText = 'idade mínima: 18 anos'
        idadeHelper.classList.add('visible')  
        idadeInput.classList.remove('correct')
        idadeLabel.classList.remove('required-popup')
        idadeStatus = false
    }
})

// Validar senha

senhaInput.addEventListener('blur', (e)=>{
    value = e.target.value
    if (value.length == 0) {  
        senhaLabel.classList.add('required-popup')
        senhaStatus = false
    } else if (value.includes('$') || value.includes('#')) {
        senhaInput.classList.add('correct')
        senhaHelper.classList.remove('visible') 
        senhaLabel.classList.remove('required-popup')
        senhaStatus = true
    } else {
        senhaInput.classList.add('error')
        senhaHelper.innerText = 'Use algum dos seguintes caracteres: $ ou #'
        senhaHelper.classList.add('visible')  
        senhaInput.classList.remove('correct')
        senhaLabel.classList.remove('required-popup')
        senhaStatus = false
    }
})

// Validar "confirmar senha"

confirmarSenhaInput.addEventListener('blur', (e)=>{
    value = e.target.value
    if (value.length == 0) {  
        confirmarSenhaLabel.classList.add('required-popup')
        confirmarSenhaStatus = false
    } else if (value.includes('$') || value.includes('#')) {
        confirmarSenhaInput.classList.add('correct')
        confirmarSenhaHelper.classList.remove('visible') 
        confirmarSenhaLabel.classList.remove('required-popup')
        confirmarSenhaStatus = true
    } else {
        confirmarSenhaInput.classList.add('error')
        confirmarSenhaHelper.innerText = 'Use algum dos seguintes caracteres: $ ou #'
        confirmarSenhaHelper.classList.add('visible')  
        confirmarSenhaInput.classList.remove('correct')
        confirmarSenhaLabel.classList.remove('required-popup')
        confirmarSenhaStatus = false
    }
})


// 1) Exibir mensagens "campo obrigatório" ao submeter o furmulário
// 2) Enviar para a API

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    if (usernameInput.value.length === 0) {
        usernameLabel.classList.add('required-popup')
    }
    if (emailInput.value.length === 0) {
        emailLabel.classList.add('required-popup')
    }
    if (idadeInput.value.length === 0) {
        idadeLabel.classList.add('required-popup')
    }
    if (senhaInput.value.length === 0) {
        senhaLabel.classList.add('required-popup')
    }
    if (confirmarSenhaInput.value.length === 0) {
        confirmarSenhaLabel.classList.add('required-popup')
    }

    enviarDadosParaAPI()
})

function enviarDadosParaAPI (){
    if (usernameStatus == true && emailStatus == true && idadeStatus == true && senhaStatus == true && confirmarSenhaStatus == true) {        
        console.log("DADOS ENVIADOS")
    }
}


