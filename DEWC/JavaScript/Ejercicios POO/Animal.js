const Animal = {
    nombre : String(prompt("Ingresa nombre del animal")),
    peso : Number(prompt("Ingresa peso del animal")),
    ingesta : 0,
    calcuar : cantidadComida
}

function cantidadComida() {
    return this.ingesta = this.peso * 50; 
}

console.log(Animal.calcuar());


// delete Animal.ingesta; //Borra propiedad de un objeto

//Bucle for para recorrer propiedades de un objeto
for(let i in Animal){
    document.write(`${i}: ${Animal[i]} <br>`);
}


Object.defineProperty(Animal, 'sexo', {value:String(prompt("Inserta sexo, M ó H")), writable:true}); //Añadir una propiedad a un objeto existente

while (Animal.sexo != "M" && Animal.sexo != "H") {
    Animal.sexo = String(prompt("Inserta M ó H"));
}