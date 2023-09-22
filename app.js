function abrir() {
    var contraseña = document.getElementById("contraseña").value;
    var consContraseña = "admin1234";
    var con=contraseña.length
    if (con>=8) {
        if (contraseña == consContraseña) {
            window.location.href="pagina2.html";
        } else {
            alert("Contraseña incorrecta, vuelva a intentarlo");
        }
    }else{
        msg += 'La contraseña es demasiado corta, por favor ponga mas de 8 dígitos'
    }
}
function validarEmail() {
    var email=document.getElementById('email').value;
    email.charArt(0);
    var dd=true;
    if(email.includes('@')){
        msg += 'No incluye @'
        dd=false
    }
    if (email.charArt(0)=='@') {
        msg +='\nNo puede empezar en @'
        dd=false
    }
    for (let i = email.length-3; i < email.length-1; i++) {
        if (email.charArt(i)=='@') {
            msg += '\nNo puede contener @ en las ultimas 3 letras'
            dd=false
        }
    }
}


