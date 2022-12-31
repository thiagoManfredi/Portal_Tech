const title = document.getElementsByClassName("title")
const error_text = document.getElementsByClassName('error-text')
const username_input = document.getElementById('login-usuario')
const password_input = document.getElementById('login-senha')
const success_message = document.getElementsByClassName('success-message')
const fail_message = document.getElementsByClassName('fail-message')

function validateForms() {
    if (username_input.value != 'Thiago') {
        error_text[0].classList.add('visible')
    } else {
        error_text[0].classList.remove('visible')        
    }
    if (password_input.value != '123') {
        error_text[1].classList.add('visible')
    } else {
        error_text[1].classList.remove('visible')
    }
}

validateForms()

function showSuccessMessage() {
    if (username_input.value == 'Thiago' && password_input.value == '123') {
        success_message[0].classList.add('visible')
        fail_message[0].classList.remove('visible')
    } else {
        success_message[0].classList.remove('visible')
        fail_message[0].classList.add('visible')        
    }
}

