let coche = {
    Color : "Negro",
    Marca : "Renault",
    Modelo : "Clio",
    Matricula : "123ABC",
    Velocidad : 0,
    Datos : function() {
        return `Color: ${coche.Color} Marca: ${coche.Marca} Modelo: ${coche.Modelo} Matricula: ${coche.Matricula}`;
    },
    Acelerar : function() {
        return `${coche.Velocidad = coche.Velocidad + 10}`;
    }
}

console.log(coche.Datos());
console.log(coche.Acelerar());
console.log(coche.Acelerar());
console.log(coche.Acelerar());