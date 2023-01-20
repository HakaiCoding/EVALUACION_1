const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N','J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let userNumber = Number(prompt ("Inserta número de DNI"));
let userLetter = prompt ("Inserta la letra de tu DNI").toUpperCase();


let generator = 0;
let dniLetter = " ";


if (userNumber < 1 || userNumber > 99999999) {
    alert ("Número proporcionado inválido");
}
else if (userNumber > 1 || userNumber < 99999999){
    generator = userNumber % 23;
    dniLetter = letras[generator];

    if (userLetter === dniLetter) {
        alert ("Número y letra correctos");
    }
    else {
        alert ("Letra incorrecta");
    }
}