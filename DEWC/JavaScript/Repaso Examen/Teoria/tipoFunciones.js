//TIPOS DE FUNCIONES

//Funcion simple
function sumaNumeros(num1, num2) {
    return num1 + num2;
}
console.log(sumaNumeros(5, 5));


//Pasar una funcion como valor (guardar en una variable)
const variableQueGuardaFuncion = sumaNumeros;
console.log(variableQueGuardaFuncion(10, 10));


//Funcion anónima
const nombreFuncion = function(q, w) {
    return q-w;
}
console.log(nombreFuncion(10, 2));


//Funcion flecha
const FLECHA =()=>{
    return "Soy una funcion flecha";
}
console.log(FLECHA());