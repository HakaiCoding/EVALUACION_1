

// Si se cumple que la compra es mayor que 50€ se calcula un número aleatorio entre 1 y 25 (será el porcentaje descuento aplicado)
// y otro entre 1 y 31 (día del mes siguiente en que se aplicará el descuento, si el cliente realiza una compra ese día).
// Hay que tener en cuenta que el número máximo del día depende del mes siguiente (pudiendo ser en realidad 28,29,30 o 31).
// Finalmente se visualiza un mensaje del estilo: El próximo día de mes, tendrás un descuento de porcentaje%. Te esperamos, ¡Nombre de cliente!

// Prueba los ejemplos de los métodos toFixed y toPrecision del objeto number().

// Prueba los ejemplos de los métodos de string.

var meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

let fechaHoy = new Date();
mesHoy = fechaHoy.getMonth();
mesHoy = meses[mesHoy];

alert(`Hoy es ${fechaHoy.getDate()} de ${mesHoy} de ${fechaHoy.getFullYear()}`);

let nombre = prompt("Introduce tu nombre");
let total = Number(prompt("Introduce el total de la compra"));
let descuento = 0;


function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


if(total >= 50) {

    descuento = random(1, 25);

    
    
}
else {
    alert(`!Gracias por su compra,${nombre}`);
}