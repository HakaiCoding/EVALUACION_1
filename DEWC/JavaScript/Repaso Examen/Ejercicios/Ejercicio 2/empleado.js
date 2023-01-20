function Empleado(id, name) {
    this.id = id;
    this.name = name;
}

function sueldoNeto() {
    neto = this.bruto - (this.bruto * this.retencion / 100);
    alert(`Sueldo neto es: ${neto}€`);
    return neto;
}

let newEmpleado = new Empleado();

do {
    newEmpleado = new Empleado(
        prompt("Inserta ID"),
        prompt("Inserta name")
    );

    Empleado.prototype.bruto = Number(prompt("Ingresa sueldo bruto"));
    while (Empleado.prototype.bruto < 1500 || Empleado.prototype.bruto > 4500  || isNaN(Empleado.prototype.bruto)) {
        Empleado.prototype.bruto = Number(prompt("Inserta un sueldo entre 1500 y 4500"));
    }

    Empleado.prototype.retencion = Number(prompt("Ingresa % de retención"));
    while (Empleado.prototype.retencion < 2 || Empleado.prototype.retencion > 25 || isNaN(Empleado.prototype.retencion)) {
        Empleado.prototype.retencion = Number(prompt("Inserta un porcentaje entre 5 y 25"));
    }

    Empleado.prototype.calcularNeto = sueldoNeto;


    document.write(`ID: ${newEmpleado.id}<br>
    Nombre: ${newEmpleado.name}<br>
    Sueldo bruto: ${newEmpleado.bruto}€<br>
    Retención: ${newEmpleado.retencion}%<br>
    Sueldo neto: ${newEmpleado.calcularNeto()}€<br>`);
} while(confirm("¿Desea continuar?"));



// for (let z in newEmpleado) {
//     console.log(`${z} = ${newEmpleado[z]}`);
// }