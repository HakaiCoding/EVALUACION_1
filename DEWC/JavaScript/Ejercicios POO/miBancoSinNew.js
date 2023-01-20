let miBanco = {
    numeroCuenta : Number(prompt("Ingresa número de cuenta")),
    nombreTitular : String(prompt("Ingresa nombre del titular")),
    Nacionalidad : String(prompt("Ingresa nacionalidad del titular")),
    DNI : String(prompt("Ingresa DNI del titular")),
    Banco : String(prompt("Ingresa nombre del banco")),
    Swift : Number(prompt("Ingresa código SWIFT de cuenta")),
    Sucursal : Number(prompt("Ingresa número de sucursal asociado a la cuenta")),
    Saldo : 0,
    ingresar : ingresarDinero,
    datosTitular : function() {
        return `Nombre del titular : ${miBanco.nombreTitular} <br> DNI del titular : ${miBanco.DNI} <br> Nacionalidad del titular : ${miBanco.Nacionalidad} <br>`;
    },
    datosBanco : function() {
        return `Nombre del Banco : ${miBanco.Banco} <br> Codigo SWIFT : ${miBanco.Swift} <br>`;
    },
    saldoActual : function() {
        return `Su saldo actual es ${miBanco.Saldo}€`;
    }
}

function ingresarDinero() {
    let ingreso = Number(prompt("Cuanto desea ingresar?"));
    this.Saldo = this.Saldo + ingreso; 
}

miBanco.ingresar();
document.write(miBanco.datosTitular());
document.write(miBanco.datosBanco());
alert(miBanco.saldoActual());