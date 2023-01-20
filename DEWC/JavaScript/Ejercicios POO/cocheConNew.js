let coche=new Object();
coche.Color="Negro";
coche.Marca="Renault";
coche.Modelo="Clio";
coche.Matricula="123ABC";
coche.Velocidad=0;

coche.Datos=function() {
    return `Color: ${coche.Color} Marca: ${coche.Marca} Modelo: ${coche.Modelo} Matricula: ${coche.Matricula}`;
}

coche.Acelerar=function() {
    return `${coche.Velocidad = coche.Velocidad + 10}`;
}

console.log(coche.Datos());
console.log(coche.Acelerar());
console.log(coche.Acelerar());
console.log(coche.Acelerar());