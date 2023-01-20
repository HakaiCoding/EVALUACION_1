let articulo = new Object();
    articulo.codArti = Number(prompt("Ingresa código de artículo"));
    articulo.descArti = String(prompt("Ingresa descripción de artículo"));
    articulo.stockArti = Number(prompt("Ingresa stock de artículo"));
    articulo.precioArti = Number(prompt("Ingresa precio de artículo"));
    articulo.comprarArti = function(numUniArti) {
        this.stockArti = this.stockArti + numUniArti;
        check = confirm("Desea volver a incrementar el stock?");
        while(check == true){
            articulo.comprarArti(Number(prompt("Ingresa cantidad para aumentar stock")));
        }
    }


articulo.comprarArti(Number(prompt("Ingresa cantidad para aumentar stock")));

for(let i in articulo){
    document.write(`Atributo => ${i} Valor => ${articulo[i]} <br>`);
}
    