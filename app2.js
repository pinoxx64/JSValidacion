function guardar() {
    
    var nombre = document.getElementById("nombre").value;
    var ape1 = document.getElementById("1ape").value;
    var ape2 = document.getElementById("2ape").value;
    var ndni = document.getElementById("ndni").value;
    var ldni = document.getElementById("ldni").value;
    
    var num = parseInt(ndni);
    var rnum = num % 23;
    var listaletras = ["T","R","W","A","G","M","Y","F","P","D","X","B",
    "N","J","Z","S","Q","V","H","L","C","K","E"];
        
    if (listaletras[rnum] == ldni) {
        alert("Datos guardados"); 
        var info = [nombre, ape1, ape2, ndni, ldni];
        console.log(info);
    } else {
        alert("DNI incorrecto, verifique si está bien escrito");
    }
}
