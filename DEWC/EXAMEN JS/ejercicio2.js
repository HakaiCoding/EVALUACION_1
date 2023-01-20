let cont1 = 0;
let cont2 = 0;

do {
    let nombre = String(prompt("Ingresa nombre"));
    reg = /^[A-Z][a-z]+$/;
    while (reg.test(nombre) == false) {
        nombre = String(prompt("Nombre no valido. Ingresa un nombre que empieze por mayúscula"));
    }


    let sexo = String(prompt("Ingresa sexo"));
    reg = /^[F]$/;
    reg2 = /^[M]$/;
    while (reg.test(sexo) == false && reg2.test(sexo) == false) {
        sexo = String(prompt("Sexo no válido. Ingresa F (mujer) o M (hombre)"));
    }


    let altura = Number(prompt("Ingresa altura en cm"));
    while (altura < 100 || altura > 250 || isNaN(altura) == true) {
        altura = Number(prompt("Número no válido. Ingresa altura entre 100cm y 250cm"));
    }


    let peso = Number(prompt("Ingresa peso en kg"));

    function calcularIMC(altura, peso) {
        imc = peso / Math.pow(altura, 2);
        imc = imc * 10000;
        imc = imc.toFixed(2);
        return imc;
    }


    console.log(calcularIMC(altura, peso));

    if (sexo == "F") {
        if (calcularIMC(altura, peso) > 24) {
            cont1++;
            alert(`${nombre}, su IMC supera el recomendable, debe ir al médico`);
        }
        else {
            cont2++;
            alert(`${nombre}, su IMC no supera el recomendable, no debe ir al médico`);
        }
    }


    if (sexo == "M") {
        if (calcularIMC(altura, peso) > 25) {
            cont1++;
            alert(`${nombre}, su IMC supera el recomendable, debe ir al médico`);
        }
        else {
            cont2++;
            alert(`${nombre}, su IMC no supera el recomendable, no debe ir al médico`);
        }
    }
   
} while (confirm("¿Deseas consultar el IMC de otra persona?"));

if (cont1 > cont2) {
    alert("El número de personas que superan el IMC recomendable es muy elevado.");
}