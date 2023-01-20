
let flag = true;
let factorial = 1;

// || num == String(num)

do {
    let num = Number(prompt("Inserta un número para calcular su factorial"));

    if (num < 0 || num !== Number(num)) {
        alert("Número inválido");
    }
    else {

        for (let i = 0; i < num; i++) {
            factorial = factorial * (num - i);
        }

        console.log(factorial);

        if(confirm("Quieres calcular otro factorial?") == true) {
            flag = true;
        }
        else {
            flag = false;
        }
    }
}
while (flag == true);