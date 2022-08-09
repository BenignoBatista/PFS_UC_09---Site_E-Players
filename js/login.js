$(document).ready(function(){
    $('#btn-entrar').click(function (){
        validarLogin();
   });
});

function validarLogin() {   
    event.preventDefault();

    let usuario = document.querySelector('#usuario').value;
    let senha = document.querySelector('#senha').value;

    if(usuario.trim() == '' || senha.trim() == ''){
        alert('Favor preencher todos os campos')
    }else {
        alert ('Você preencheu corretamente');
    }
}