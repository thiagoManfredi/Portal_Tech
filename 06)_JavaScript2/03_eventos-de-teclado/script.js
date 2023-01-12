const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const LinkDados = document.getElementById("link-perfil-dados");
const voltar = document.getElementById("voltar");

// O subperfil pode ser acessado através dos digitos 1, 2 ou 3.
// Dentro do subperfil a página de dados do usuário só é acessível através do dígito 1.
// No lugar da propriedade "code" foi usada "key", assim também poderá ser usado o teclado numérico. 
// Dentro da página "Dados do usuário", a tecla Backspace pode ser usada para retornar à página principal.
// A tecla Escape retorna ao menu principal.

window.addEventListener('keyup', (e) => {
  console.log(e);

  if(e.key === "1" || e.key === "2" || e.key === "3") {
    if(navPerfil.style.display == 'block' & e.key === "1") {
      LinkDados.click()
    
    } else {
      navPerfil.style.display = 'block'
    }
  }

  if(e.code === 'Escape'){
    navPerfil.style.display = 'none'
  }
  if(e.code === 'Backspace'){
    voltar.click()
  }
})
