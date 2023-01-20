
//CREACION OBJETO CON METODO CONSTRUCTOR
function Consola(codArti, descArti, stockArti, precioArti) {
    this.codArti = codArti;
    this.descArti = descArti;
    this.stockArti = stockArti;
    this.precioArti = precioArti;
    this.comprarArti = masStock;

}

function masStock() {
    return this.stockArti = this.stockArti + Number(prompt("Cuantas unidades desea añadir al stock?"));
}

let newConsola = new Consola(
    prompt("Codigo consola"),
    prompt("Desc consola"),
    Number(prompt("Stock consola")),
    Number(prompt("Precio consola"))
);


do {
    newConsola.comprarArti();
    
} while (confirm("Deseas añadir más stock?") === true);

console.table(newConsola);

delete newConsola.precioArti;

Object.defineProperty(newConsola, 'score', {value: 5, writable:true}); 

console.table(newConsola);
