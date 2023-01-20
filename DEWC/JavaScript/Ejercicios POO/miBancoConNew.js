let miBanco = new Object();
    miBanco.numeroCuenta = Number(prompt("Ingresa número de cuenta"));
    miBanco.nombreTitular = String(prompt("Ingresa nombre del titular"));
    miBanco.Nacionalidad = String(prompt("Ingresa nacionalidad del titular"));
    miBanco.DNI = String(prompt("Ingresa DNI del titular"));
    miBanco.Banco = String(prompt("Ingresa nombre del banco"));
    miBanco.Swift = Number(prompt("Ingresa código SWIFT de cuenta"));
    miBanco.Sucursal = Number(prompt("Ingresa número de sucursal asociado a la cuenta"));
    miBanco.Saldo = 0;
    miBanco.datosTitular = function() {
        return `Nombre del titular : ${miBanco.nombreTitular} <br> DNI del titular : ${miBanco.DNI} <br> Nacionalidad del titular : ${miBanco.Nacionalidad} <br>`;
    }
    miBanco.datosBanco = function() {
        return `Nombre del Banco : ${miBanco.Banco} <br> Codigo SWIFT : ${miBanco.Swift} <br>`;
    }

document.write(miBanco.datosTitular());
document.write(miBanco.datosBanco());