let persona = {
    altura: 160,
    peso: 55,
    sexo: "F",
    calcular: function () {
        imc = this.peso / Math.pow(this.altura, 2);
        imc = imc * 10000;
        imc = imc.toFixed(2);
        return imc;
    },
    comprobar: comprobarIMC
}

function comprobarIMC() {
    if (persona.sexo === "F") {
        if (persona.calcular() <= 24) {
            mensaje = "Su IMC no supera el recomendable, no debe ir al médico";
        }
        else {
            mensaje = "Su IMC supera el recomendable, debe ir al médico";
        }
    }

    if (persona.sexo === "M") {
        if (persona.calcular() <= 25) {
            mensaje = "Su IMC no supera el recomendable, no debe ir al médico";
        }
        else {
            mensaje = "Su IMC supera el recomendable, debe ir al médico";
        }
    }
    return mensaje;
}

console.log(`Su IMC es ${persona.calcular()}`);
console.log(persona.comprobar());