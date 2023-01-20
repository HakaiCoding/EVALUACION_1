let reg = "variable para regxp";
let flag = true;

let coche = {
    matricula: "matricula",
    apellido: "apellido",
    codigoPostal: 12345,
    color: "color"
};

do {
    //INGRESAR MATRICULA Y VALIDARLA CON REGEX
    coche.matricula = String(prompt("Ingresa matrícula"));
    do {
        reg = /^\d{4}[a-z]{3}$/i;
        if (reg.test(coche.matricula)) {
            alert("Matrícula válida");
            flag = true;
        }
        else {
            flag = false;
            coche.matricula = String(prompt("Matrícula no válida, ingresa matrícula válida"));
        }
    } while (flag === false)

    //INGRESAR APELLIDO Y VALIDARLO CON REGEX
    coche.apellido = String(prompt("Ingresa apellido"));
    do {
        reg = /^[A-Z][a-z]+$/;
        if (reg.test(coche.apellido)) {
            alert("Apellido válido");
            flag = true;
        }
        else {
            flag = false;
            coche.apellido = String(prompt("Apellido no válido, ingresa apellido válido"));
        }
    } while (flag === false)

    //INGRESAR CP Y VALIDARLO CON REGEX
    coche.codigoPostal = Number(prompt("Ingresa CP"));
    do {
        reg = /^\d{5}$/;
        if (reg.test(coche.codigoPostal)) {
            alert("CP válido");
            flag = true;
        }
        else {
            coche.codigoPostal = Number(prompt("CP no válido, ingresa un CP válido"));
            flag = false;
        }
    } while (flag === false)

    //INGRESAR COLOR
    coche.color = String(prompt("Ingresa color"));


    reg = /^28/;
    if(reg.test(coche.codigoPostal) && coche.color == "Rojo"){
        document.write(
            `Matrícula : ${coche.matricula}
            Apellido : ${coche.apellido}
            CP : ${coche.codigoPostal}
            Color : ${coche.color}`
            );
    }


} while (confirm("¿Quieres validar otro coche?") === true);