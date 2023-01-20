
function checkNumber() {
    let num;
    num = prompt("inserta un numero");

    if (Number(num)) {
      alert("Número válido");
    }
    else if (isNaN(num)) {
      alert("No es un número");
    }
    else {
       alert("What the fuck dude");
    }
}

checkNumber();