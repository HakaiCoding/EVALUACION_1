do {
    //FUNCION CONSTRUCTORA
    function empleado (id, nombre){
        this.id=id;
        this.nombre=nombre;
    }

    //OBJETO QUE VA A SOBREESCRIBIR LOS DATOS EN CADA VUELTA DEL BUCLE
    const NEWEMPLEADO = new empleado(
        Number(prompt("Ingresa id empleado")),
        String(prompt("Ingresa nombre empleado")),
    )

    //Nuevo atributo "bruto" usando prototype
    empleado.prototype.bruto = Number(prompt("Sueldo bruto del empleado"));

    while (empleado.prototype.bruto < 1500 || empleado.prototype.bruto > 4500) {
        empleado.prototype.bruto = Number(prompt("Inserta un sueldo entre 1500 y 4500"));
    }

    //Nuevo atributo "retención" usando prototype
    empleado.prototype.retencion = Number(prompt("Porcentaje a descontar del sueldo"));

    while (empleado.prototype.retencion < 2 || empleado.prototype.retencion > 25) {
        empleado.prototype.retencion = Number(prompt("Inserta un porcentaje entre 5 y 25"));
    }

    //Funcion anonima que hace el cálculo de sueldo neto  => !!! REVISAR NO ESTÁ BIEN PAGINA 14 APUNTES
    // empleado.calcularNeto = function () {
    //     empleado.neto = empleado.prototype.bruto - ((empleado.prototype.bruto * empleado.prototype.retencion) / 100);
    //     return alert(`Sueldo neto: ${empleado.neto}€`);
    // }

    //Llamada a la función
    // empleado.calcularNeto();

    
    function calculo() {
        empleado.neto = empleado.prototype.bruto - ((empleado.prototype.bruto * empleado.prototype.retencion) / 100);
        return alert(`Sueldo neto: ${empleado.neto}€`);
    }

    empleado.calcularNeto = calculo();


    //Imprimir todos los atributos en cada vuelta del bucle
    document.write(`El trabajador con id ${NEWEMPLEADO.id} y nombre ${NEWEMPLEADO.nombre} tiene un sueldo neto de ${empleado.neto}€ <br>`)


}while(confirm("¿Desea ingresar otro empleado?") == true);