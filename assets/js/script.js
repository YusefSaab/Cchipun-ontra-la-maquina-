function jugar () {
    //Pregunta cuantas veces quiere Jugar
var numJuegos = parseInt(prompt("Cuantas veces desea Jugar"));


//Obtiene aleatoriamente la opcion de la Maquina
function maquina(max) {
    return Math.floor(Math.random()*max);
}

//Variables
var cuentaMaquina = 1;
var cuentaHumano = 1;
var cuentaEmpate = 1;

function incrementarM () {
    document.getElementById("puntos_maquina").innerHTML = (cuentaMaquina++);
}   
function incrementarH () {
    document.getElementById("puntos_humano").innerHTML = (cuentaHumano++);
}
function IncrementarE () {
    document.getElementById("empates").innerHTML = (cuentaEmpate++);
}

function PPTH () {
    switch (opcionHumano) {
        case "0":
            humanoMano = "Piedra"
            break;
        case "1":
            humanoMano = "Papel"
            break;
        case "2":
            humanoMano = "Tijeras"
        default:
            "Invalida"
            break;
    }
}
function PPTM () {
    switch (opcionMaquina) {
        case 0:
            maquinaMano = "Piedra"
            break;
        case 1:
            maquinaMano = "Papel"
            break;
        case 2:
            maquinaMano = "Tijeras"
        default:
            "Invalida"
            break;
    }
}


    //Pregunta la opcion al Humano
for (i = 0 ; i < numJuegos ; i++) {
    var opcionHumano = prompt("ingrese un numero entre 0 y 2. 0 = piedra, 1 = papel y 2 = tijeras");
    var opcionMaquina = maquina(3);
    var resultado = `${opcionHumano}${opcionMaquina}`;
    var humanoMano;
    var maquinaMano;

    PPTH();
    PPTM();
    if (opcionHumano==opcionMaquina){
        IncrementarE()
        alert(`Ambos eligieron ${humanoMano}, es un EMPATE\n Humano[${cuentaHumano-1}] - Maquina[${cuentaMaquina-1}]`);
    } else if (resultado == "01"||resultado == "12"||resultado == "20") {
        incrementarM();
        alert(`tu opcion fue ${humanoMano} y la opcion de la maquina fue ${maquinaMano}, has perdido este juego\n Humano[${cuentaHumano-1}] - Maquina[${cuentaMaquina-1}]`);
    } else if (resultado == "02"||resultado == "10"||resultado == "21") {
        incrementarH ();
        alert(`tu opcion fue ${humanoMano} y la opcion de la maquina fue ${maquinaMano}, has ganado este juego\n Humano[${cuentaHumano-1}] - Maquina[${cuentaMaquina-1}]`);
    } else {
        incrementarM ();
        alert (`Error "${opcionHumano}" no es un opcion valida. punto para la maquina por longi\n Humano[${cuentaHumano-1}] - Maquina[${cuentaMaquina-1}]`);
    }
}

}