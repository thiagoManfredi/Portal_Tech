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
let submit = document.getElementById("submit")
const form = document.getElementById("form")
let validados = []
let senhaValue = 0

// Validar username

usernameInput.addEventListener('blur', (e)=>{
    value = e.target.value
    if (value.length == 0) {  
        usernameInput.classList.remove('correct')
        usernameInput.classList.remove('error')
        usernameHelper.classList.remove('visible')
        usernameLabel.classList.add('required-popup')
        validados[0] = 0  
    } else if (value.length > 2 && value.length < 11) {
        usernameInput.classList.add('correct')
        usernameHelper.classList.remove('visible') 
        usernameLabel.classList.remove('required-popup')
        validados[0] = 1   
    } else {
        usernameHelper.innerText = 'Nome tem que ter entre 2 e 10 letras'
        usernameInput.classList.add('error')
        usernameHelper.classList.add('visible')  
        usernameInput.classList.remove('correct')
        usernameLabel.classList.remove('required-popup')
        validados[0] = 0  
    }
})

// Validar email

emailInput.addEventListener('blur', (e)=>{
    value = e.target.value
    if (value.length == 0) {
        emailInput.classList.remove('correct')
        emailInput.classList.remove('error')
        emailHelper.classList.remove('visible')
        emailLabel.classList.add('required-popup')
        validados[1] = 0     
    } else if (value.includes('@') && value.includes('.com')) {
        emailInput.classList.add('correct')
        emailHelper.classList.remove('visible') 
        emailLabel.classList.remove('required-popup')
        validados[1] = 1      
    } else {
        emailInput.classList.add('error')
        emailHelper.innerText = 'email tem que conter "@" e ".com"'
        emailHelper.classList.add('visible')  
        emailInput.classList.remove('correct')
        emailLabel.classList.remove('required-popup')
        validados[1] = 0
    }
})

// Validar idade

idadeInput.addEventListener('blur', (e)=>{
    value = e.target.value
    if (value.length == 0) { 
        idadeInput.classList.remove('correct')
        idadeInput.classList.remove('error')
        idadeHelper.classList.remove('visible')
        idadeLabel.classList.add('required-popup')
        validados[2] = 0
    } else if (value >= 18) {
        idadeInput.classList.add('correct')
        idadeHelper.classList.remove('visible') 
        idadeLabel.classList.remove('required-popup')
        validados[2] = 1      
    } else {
        idadeInput.classList.add('error')
        idadeHelper.innerText = 'idade mínima: 18 anos'
        idadeHelper.classList.add('visible')  
        idadeInput.classList.remove('correct')
        idadeLabel.classList.remove('required-popup')
        validados[2] = 0
    }
})

// Validar senha

senhaInput.addEventListener('blur', (e)=>{
    value = e.target.value
    senhaValue = value
    if (value.length == 0) {  
        senhaInput.classList.remove('correct')
        senhaInput.classList.remove('error')
        senhaHelper.classList.remove('visible')
        senhaLabel.classList.add('required-popup')
        validados[3] = 0
    } else if (value.includes('$') || value.includes('#')) {
        senhaInput.classList.add('correct')
        senhaHelper.classList.remove('visible') 
        senhaLabel.classList.remove('required-popup')
        validados[3] = 1        
    } else {
        senhaInput.classList.add('error')
        senhaHelper.innerText = 'Use algum dos seguintes caracteres: $ ou #'
        senhaHelper.classList.add('visible')  
        senhaInput.classList.remove('correct')
        senhaLabel.classList.remove('required-popup')
        validados[3] = 0
    }
})

// Validar "confirmar senha"

confirmarSenhaInput.addEventListener('blur', (e)=>{
    value = e.target.value
    if (value.length == 0) {  
        confirmarSenhaInput.classList.remove('correct')
        confirmarSenhaInput.classList.remove('error')
        confirmarSenhaHelper.classList.remove('visible')
        confirmarSenhaLabel.classList.add('required-popup')
        validados[4] = 0
    } else if (value != senhaValue) {
        confirmarSenhaInput.classList.remove('correct')
        confirmarSenhaLabel.classList.remove('required-popup')
        confirmarSenhaInput.classList.add('error')
        confirmarSenhaHelper.innerText = 'Senha diferente'
        confirmarSenhaHelper.classList.add('visible')
        validados[4] = 0        
    } else if ((value.includes('$') || value.includes('#')) && value == senhaValue) {
        confirmarSenhaHelper.classList.remove('visible')
        confirmarSenhaLabel.classList.remove('required-popup')
        confirmarSenhaInput.classList.add('correct')
        validados[4] = 1       
    } else {
        confirmarSenhaInput.classList.remove('correct')
        confirmarSenhaLabel.classList.remove('required-popup')
        confirmarSenhaInput.classList.add('error')
        confirmarSenhaHelper.innerText = 'Use algum dos seguintes caracteres: $ ou #'
        confirmarSenhaHelper.classList.add('visible')
        validados[4] = 0  
    }
})


// Checar se há algum campo vazio

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

// Enviar para a API

function enviarDadosParaAPI() {

    if (JSON.stringify(validados) == "[1,1,1,1,1]") {        
        alert("DADOS ENVIADOS")
        form.reset()
        usernameInput.classList.remove('correct')
        emailInput.classList.remove('correct')
        idadeInput.classList.remove('correct')
        senhaInput.classList.remove('correct')
        confirmarSenhaInput.classList.remove('correct')
    }
}