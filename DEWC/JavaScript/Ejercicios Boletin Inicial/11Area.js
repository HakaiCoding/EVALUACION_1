flag = true;

// let altura = prompt ("Teclee metros o pulse ‘N’ para finalizar");
// let anchura = prompt ("Teclee metros");

let pared = 0;


do {
    let altura = prompt ("Teclee metros o pulse ‘N’ para finalizar");

    if (altura == "N" || altura == "n") {
        flag = false;
    }
    else {
        let anchura = prompt ("Teclee metros");
        document.write(`La pared tiene ${pared = altura * anchura} metros cuadrados de superficie`)
        flag = false;
    }
}
while (flag == true);