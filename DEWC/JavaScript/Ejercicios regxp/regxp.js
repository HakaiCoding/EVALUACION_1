let text = " ";
let reg = " ";

//COMPROBAR NUMERO POSITIVO
text = prompt("Enter a positive number");
reg = /^\d+$/;

if (reg.test(text)) {
    alert("The number is valid");
}
else {
    alert("The number is not valid");
}

//COMPROBAR NUMERO ES BINARIO
text = prompt("Enter a binary number");
reg = /^[01]+$/;

if (reg.test(text)) {
    alert("The number is valid");
}
else {
    alert("The number is not valid");
}

//COMPROBAR NUMERO ES HEXADECIMAL
text = prompt("Enter a hexadecimal number");
reg = /^[0-9A-F]+$/i;

if (reg.test(text)) {
    alert("The number is valid");
}
else {
    alert("The number is not valid");
}


//COMPROBAR MATRICULA (4 NUMEROS Y 3 LETRAS)
text = prompt("Enter a string with 4 numbers and 3 letters");
reg = /^\d{4}[a-z]{3}$/i;

if (reg.test(text)) {
    alert("The string is valid");
}
else {
    alert("The string is not valid");
}

//COMPROBAR ISBN (13 CARACTERES, 3 PRIMEROS SON NUMEROS)
text = prompt("Enter a string that contains 13 characters and the first 3 are numbers");
reg = /^\d{3}[\w]{10}$/i;

if (reg.test(text)) {
    alert("The string is valid");
}
else {
    alert("The string is not valid");
}

//COMPROBAR QUE UNA STRING EMPIEZA POR MAYUSCULA
reg = /^[A-Z][a-z]+$/;

//COMPROBAR QUE UNA STRING CONTIENE 5 NUMEROS
reg = /^\d{5}$/;

//COMPROBAR QUE UN INTEGER COMIENZA POR 28
reg = /^28[0-9]{3}$/;