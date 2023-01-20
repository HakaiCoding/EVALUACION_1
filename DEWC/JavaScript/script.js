//Crear funcion constructura Alumno con 3 propiedades (id, name, age) y 1 metodo (datos Alumno).
//validar con regex -> id(0-500) edad(>18)
//Con PROTOTYPE, añadir las propiedas y metodos siguientes:
//pagoMatricula -> 200 o 400
//tipoMatricula -> 200 = mitad 400-> total
//fechaMatricula -> momento en que se verifica que esta matriculado usando DATE
//Añador la propiedad matriculado(boolean)


function Alumno(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.datosAlumno = function () {
        for (let i in newAlumno) {
            console.log(newAlumno[i]);
        }
    }
}

Alumno.matriculado = false;

//FUNCION PAGO MATRICULA
Alumno.prototype.pagoMatricula = function () {
    let check = false;
    do {
        let pago = Number(prompt("Introduce el pago de la matricula"));
        if (pago !== 200 && pago !== 400) {
            check = true;
            alert("El pago no es correcto, ingresa 200 o 400");
        }
        else if (pago === 200) {
            check = false;
            return 200;
        }
        else {
            check = false;
            return 400;
        }
    } while (check === true);
}

Alumno.prototype.tipoMatricula = function (cantidad) {
    if (cantidad === 200) {
        newAlumno.matriculado = true;
        return "Mitad";
    }
    else {
        newAlumno.matriculado = true;
        return "Total";
    }
}

Alumno.prototype.fechaMatricula = function () {
    let fecha = new Date();
    return fecha;
}


let newAlumno = new Alumno(1, "Juan", 20);
// newAlumno.fechaMatricula(newAlumno.tipoMatricula(newAlumno.pagoMatricula()));2
