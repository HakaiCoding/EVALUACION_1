//USO PROTOTIPOS (SOLO EN OBJETOS CON CONSTRUCTOR)

function Alumno(id, name) {
    this.id = id;
    this.name = name;
}

//Agregar una propiedad a la función constructora
Alumno.prototype.age=0;

//Agregar una propiedad que guarda una función anónima
Alumno.prototype.datosAlumno = function(){
    return `Nombre: ${this.name} ID: ${this.id}`;
}


//Funcion tipica y mitica
function dimeNombre() {
    return `Nombre alumno: ${this.name}`;
}
//Agregar función a la función constructora usando prototype
Alumno.prototype.dimeNombre = dimeNombre;


//Creo objeto a partir de constructor e inicializo age dado que lo he creado antes con prototype
let Moleiro = new Alumno(1, "Moleiro");
Moleiro.age = 30;
console.log(Moleiro.datosAlumno());