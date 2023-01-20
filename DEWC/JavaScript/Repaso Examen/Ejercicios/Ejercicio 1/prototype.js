function Articulo() { 
}

Articulo.prototype.codArti = prompt("Codigo articulo"),
Articulo.prototype.desArti = prompt("Descripcion articulo"),
Articulo.prototype.stockArti = Number(prompt("Stock articulo")),
Articulo.prototypeprecioArti = Number(prompt("Precio articulo")),
Articulo.prototype.comprarArti = function() {
    return Articulo.prototype.stockArti = Articulo.prototype.stockArti + Number(prompt("Cuantas unidades desea añadir al stock?"));
}

console.table(Articulo.prototype.codArti);