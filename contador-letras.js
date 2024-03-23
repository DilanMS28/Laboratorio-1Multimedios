
function contador(cadena) {
    var contador = [];

    for (var i = 0; i < cadena.length; i++) {
        var letra = cadena[i].toLowerCase(); 

        if (contador[letra]) {
            contador[letra]++;
        } else {
            contador[letra] = 1;
        }
    }
    console.log("Contador de letras:");
    for (var letra in contador) {
        console.log("'" + letra + "': " + contador[letra]);
    }
}

//PRUEBA
var cadena = "Hola Mundo";
var cadena1 = "anita"
contador(cadena);
console.log("----------")
contador(cadena1)
