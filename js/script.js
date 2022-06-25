function mostraEscondeMenu() {
    let navbar = document.getElementById("menu-principal");

    navbar.classList.toggle("navbarShow");

}

function entrar() {
    
    let usuario = document.querySelector('#usuario')
    let senha = document.querySelector('#senha')
    let msgError = document.querySelector('#msgError')
    if( usuario.value == 'benigno' && senha.value == '123'){
        // alert('OK')
        window.location.href = 'index ER04.html'
    }else{
        msgError.innerHTML = 'Usuário ou senha incorretos!'
    }
    
  
    
}