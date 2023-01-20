// Crea una aplicación web que dibuje un triángulo.
// ●	Se pide al usuario un número positivo (Validar el número).
// ●	La aplicación escribirá un triángulo a base de asteriscos. 
// ●	Será un triángulo rectángulo isósceles cuyos catetos tendrán el mismo número de asteriscos.
// ●	Usaremos para escribir los asteriscos, el tipo de letra monospace.


//regular expression for a positive integer
let reg = /^\d+$/;

let num = Number(prompt("Inserta un numero positivo"));

do {
   num = Number(prompt("Inserta un numero positivo"));
} while (reg.test(num) === false);