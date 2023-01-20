//OBJETOS MEDIANTE INSTANCIA DIRECTA

//Objeto literal
let animal = new Object();
animal.nombre = "Michi";
animal.peso = 5;
animal.edad = 10;
animal.datosAnimal = function() {
    return `Nombre: ${animal.nombre} Peso: ${animal.peso} Edad: ${animal.edad}`
}
console.log(animal.datosAnimal());

//Sin usar new Object()
let coche = {
    marca : "Renault",
    modelo : "Clio",
    potencia : 120
}


//OBJETO MEDIANTE FUNCION CONSTRUCTORA

function Juego(name, genre, score) {
    this.name = name;
    this.genre = genre;
    this.score = score;
    this.datosJuego = function() {
        return `Nombre: ${this.name} Género: ${this.genre} Score: ${this.score}`;
    }
}
let newGame = new Juego("LoL", "MOBA", 1);
console.log(newGame.datosJuego());