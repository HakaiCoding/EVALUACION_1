function Animal(nombreAnimal, pesoAnimal){
    this.nombre=nombreAnimal;
    this.peso=pesoAnimal;
    this.datos=function(){
        alert(`${this.nombre} pesa ${this.peso} kilos`);
    }

}

const perro=new Animal("Puchi", 20);
const gato=new Animal("Michi", 5);

perro.datos();
gato.datos();



// CON PROMPT

function Coche(marcaCoche, modeloCoche) {
    this.marca=marcaCoche;
    this.modelo=modeloCoche;
    this.datosCoche=function(){
        alert(`Marca: ${this.marca} Modelo: ${this.modelo}`);
    }
}

const coche1=new Coche(String(prompt("Marca")), String(prompt("Modelo")));
coche1.datosCoche();