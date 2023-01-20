let comprarArti = function (numUniArti) {
    this.stockArti = this.stockArti + numUniArti;
    check = confirm("Desea volver a incrementar el stock?");
    while (check == true) {
        LAPIZ.comprarArti(Number(prompt("Ingresa cantidad para aumentar stock")));
    }
}

const LAPIZ = new articulo(
    Number(prompt("Ingresa código de artículo")),
    String(prompt("Ingresa descripción de artículo")),
    Number(prompt("Ingresa stock de artículo")),
    Number(prompt("Ingresa precio de artículo"))
);

function articulo(codArti, descArti, stockArti, precioArti) {
    this.codArti = codArti;
    this.descArti = descArti;
    this.stockArti = stockArti;
    this.precioArti = precioArti;
    this.comprarArti = comprarArti;
}

LAPIZ.comprarArti(Number(prompt("Ingresa cantidad para aumentar stock")));


for (let i in LAPIZ) {
    document.write(`Atributo => ${i} Valor => ${LAPIZ[i]} <br>`);
}