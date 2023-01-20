let articulo = {
    codArti : Number(prompt("Ingresa código de artículo")),
    descArti : String(prompt("Ingresa descripción de artículo")),
    stockArti : Number(prompt("Ingresa stock de artículo")),
    precioArti : Number(prompt("Ingresa precio de artículo")),
    comprarArti : function(numUniArti) {
        this.stockArti = this.stockArti + numUniArti;
        check = confirm("Desea volver a incrementar el stock?");
        while(check == true){
            articulo.comprarArti(Number(prompt("Ingresa cantidad para aumentar stock")));
        }
    }
}

articulo.comprarArti(Number(prompt("Ingresa cantidad para aumentar stock")));

for(let i in articulo){
    document.write(`Atributo => ${i} Valor => ${articulo[i]} <br>`);
}

//Borra propiedad descripcion (descArti)
delete articulo.descArti;

for(let i in articulo){
    document.write(`Atributo => ${i} Valor => ${articulo[i]} <br>`);
}

//Añadir propiedad descripcion (descArti) de nuevo
Object.defineProperty(articulo, 'descArti', {value:String(prompt("Inserta descripción otra vez")), writable:true}); 

