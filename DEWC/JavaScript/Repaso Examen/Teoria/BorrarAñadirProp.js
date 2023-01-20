let alumno = {
    name : "Rulo",
    age : 22,
    score : [1, 2, 3, 4, 5],
    course : "DAW"
}
console.log(JSON.parse(JSON.stringify(alumno)));

//Borrar una propiedad de un objeto
delete alumno.score;
console.log(JSON.parse(JSON.stringify(alumno)));


//Añadir una propiedad a un objeto con defineProperty
Object.defineProperty(alumno, "phone", {value : 655443322, writable:true});
console.log(JSON.parse(JSON.stringify(alumno)));


Object.defineProperty(alumno, "testArray", {value : [1, 2, 3], writable:true});
console.table(alumno);

//Añadir una propiedad directamente
alumno.sexo = "MachoAlfa";
console.table(alumno);