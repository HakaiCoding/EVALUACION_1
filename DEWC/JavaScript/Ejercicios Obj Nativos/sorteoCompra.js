//ARRAY MESES    0        1        2        3      4       5       6       7          8          9          10          11
const MESES = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

let nombre = String(prompt("Introduce nombre"));
let coste = Number(prompt("Introduce importe total de la compra"));
let descuento = 0;

let fechaActual = new Date(); //Fecha actual
let mesActual = fechaActual.getMonth(); //Mes de la fecha actual. INTEGER 0-11
let anoActual = fechaActual.getFullYear(); //Año de la fecha actual. INTEGER
let diaSorteo = 0; //Dia del sorteo. Solamente la inicializo con valor 0
let mesSorteo = mesActual +1; //Mes del sorteo. Un mes desde la fecha de la compra cuando corre el programa.

function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


if(coste > 50){

    descuento = random(1, 25); //Porcentaje a aplicar

    if(mesSorteo == 0 || mesSorteo == 2 || mesSorteo == 4 || mesSorteo == 6 || mesSorteo == 7 || mesSorteo == 9 || mesSorteo == 11){
        diaSorteo = random(1, 31);
        mesSorteo = MESES[mesSorteo];
        document.write(`Has ganado un descuento del ${descuento}% si haces una compra el ${diaSorteo} de ${mesSorteo}. Te esperamos! ${nombre} `);
    }
    else if(mesSorteo == 3 || mesSorteo == 5 || mesSorteo == 8 || mesSorteo == 10){
        diaSorteo = random(1, 30);
        mesSorteo = MESES[mesSorteo];
        document.write(`Has ganado un descuento del ${descuento}% si haces una compra el ${diaSorteo} de ${mesSorteo}. Te esperamos! ${nombre} `);
    }
    else if(mesSorteo == 1){
        if((anoActual % 4 == 0) && (anoActual % 100 != 0) || (anoActual % 400 == 0)){ //Comprobacion si el año es bisiesto
            diaSorteo = random(1, 29);
            mesSorteo = MESES[mesSorteo];
            document.write(`Has ganado un descuento del ${descuento}% si haces una compra el ${diaSorteo} de ${mesSorteo}. Te esperamos! ${nombre} `);
        }
        else{
            diaSorteo = random(1, 28);
            mesSorteo = MESES[mesSorteo];
            document.write(`Has ganado un descuento del ${descuento}% si haces una compra el ${diaSorteo} de ${mesSorteo}. Te esperamos! ${nombre} `);
        }
    }
}
else {
    document.write(`Gracias por su compra!, ${nombre}`);
}