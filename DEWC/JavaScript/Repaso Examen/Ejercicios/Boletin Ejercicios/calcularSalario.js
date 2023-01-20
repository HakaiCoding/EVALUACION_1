let nombre = prompt("Nombre empleado");
let apellido = prompt("Apellido empleado");
let edad = Number(prompt("Edad empleado"));
let salario = Number(prompt("Salario empleado"));

if(salario < 1000) {

    if(edad < 30) {
        salario = 1100;
    }
    else if(edad >=30 && edad <=45) {
        salario = salario + salario * 0.03;
    }
}

else if(salario >= 1000 && salario <= 2000) {
    
    if(edad > 45) {
        salario = salario + salario * 0.03;
    }
    else {
        salario = salario + salario * 0.10;
    }

}

else {
    salario = salario;
}


console.log(salario);