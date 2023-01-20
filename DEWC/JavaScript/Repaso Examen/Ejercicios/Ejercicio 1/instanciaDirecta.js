//INSTANCIA DIRECTA CON NEW OBJECT()

let fruta = new Object();
fruta.codArti = prompt("Codigo fruta");
fruta.descArti = prompt("Descripcion fruta");
fruta.stockArti = Number(prompt("Stock fruta"));
fruta.precioArti = Number(prompt("Precio fruta"));
fruta.comprarArti = function() {
    return fruta.stockArti = fruta.stockArti + Number(prompt("Cuantas unidades desea añadir al stock?"));
}

console.table(fruta);

do {
    fruta.comprarArti();
} while (confirm("Deseas añadir más stock?") === true);

console.table(fruta);



//INSTANCIA DIRECTA SIN NEW OBJECT()
let camiseta = {
    codArti: prompt("Codigo camiseta"),
    descArti: prompt("Descripcion camiseta"),
    stockArti: Number(prompt("Stock camiseta")),
    precioArti: Number(prompt("Precio camiseta")),
    comprarArti: function() {
        return camiseta.stockArti = camiseta.stockArti + Number(prompt("Cuantas unidades desea añadir al stock?"));
    }
}

console.table(camiseta);

do {
    camiseta.comprarArti();
} while (confirm("Deseas añadir más stock?") === true);

console.table(camiseta);



