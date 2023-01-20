// let randomNum = Math.round(Math.random() * 100);
// console.log(randomNum);
let flag = true;
let flag2 = true;
let again = true;
let userNum = 0;
let acum = 0;

do {
    let randomNum = Math.round(Math.random() * 100);
    alert(`El número es ${randomNum}`);
    flag = true;
    flag2 = true;
    again = true;
    acum = 0;

    do {
        userNum = Number(prompt("Inserta un número entre el 1 y el 100"));

        if (userNum < 0 || userNum > 100 || userNum !== Number(userNum)) {
            userNum = Number(prompt("Número invalido, inserta un número entre el 1 y el 100"));
        }
        else {
            flag = false;
        }
    }
    while (flag == true)


    do {
        if (userNum < randomNum) {
            userNum = prompt("Estás por debajo, ingresa otro número");
            acum++;
        }
        else if (userNum > randomNum) {
            userNum = prompt("Estás por encima, ingresa otro número");
            acum++;
        }
        else {
            alert("HAS ACERTADO!!!");
            acum++;
            flag2 = false;
            alert(`Has necesitado ${acum} intento(s) para acertar el número`);
        }
    }
    while (flag2 == true);
    
    
    again = prompt("Quieres volver a jugar?");
    if (again == true) {
        again = true;
    }
    else if (String(again) === ""){
        again = true;
    }
    else {
        again = false;
        break;
    }
}
while (again == true);



