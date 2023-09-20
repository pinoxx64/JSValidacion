function abrir() {
    var contraseña = document.getElementById("contraseña").value;
    var consContraseña = "admin1234";

    if (contraseña == consContraseña) {
        window.location.href="pagina2.html";
    } else {
        alert("Contraseña incorrecta, vuelva a intentarlo");
    }
}


