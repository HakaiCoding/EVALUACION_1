let pares = 0;
let impares = 0;


for (let i = 1 ; i <= 100 ; i++) {
    if (i % 2 == 0) {
        pares = pares + i;
    }
    else {
        impares = impares + i;
    }
}

console.log(`La suma de todos los numeros impares es ${impares}`);

let num = 7 ;
let resultado = 0;
let total = 0;

for (let x = 1 ; x < 100 ; x++) {

    if (num * x > 100) {
        break
    }
    else {
        console.log(resultado = num * x);
        total = total + resultado;  
    }
}
console.log("La suma total es: " + total);

