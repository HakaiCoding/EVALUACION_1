let name = prompt ("Inserta Nombre");
let surname = prompt ("Inserta Apellido");
let age = prompt ("Inserta Edad");
let salary = prompt ("Inserta Salario");

age = Number(age);
salary = Number(salary);

if (salary < 1000) {
    if (age < 30) {
        salary = 1100;
    }
    if (age > 45) {
        salary = salary * 1.15;
    }
    else {
        salary = salary * 1.03;
    }

console.log(`Nombre: ${name}, Apellido: ${surname}, Edad: ${age}, Salario: ${salary}`);
}

if (salary > 999 && salary < 2001) {
    if (age > 45) {
        salary = salary * 1.03;
    }
    else {
        salary = salary * 1.10;
    }
    
console.log(`Nombre: ${name}, Apellido: ${surname}, Edad: ${age}, Salario: ${salary}`);
}

if (salary > 2000) {

console.log(`Nombre: ${name}, Apellido: ${surname}, Edad: ${age}, Salario: ${salary}`);
}