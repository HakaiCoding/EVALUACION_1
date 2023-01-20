<?php
    $fp = fopen ("fichero.txt","r+"); //Abrimos fichero
    
    $asientosLibres = intval(fread($fp, 1)); //Guardamos y convertimos a integer el valor de la primera posición

    $asiento = $_POST['asiento']; //Guardamos valor de la posicion pasada por usuario


    if($asientosLibres > 0){
        fseek($fp, $asiento); //Nos posicionamos en la posicion pasada por el usuario (asiento)
        if(intval(fread($fp, 1)) > 0){ //Condicion que comprueba que el valor del asiento es mayor que 0 (está ocupado)
            print "Ese asiento está ocupado";
        }
        else {
            fseek($fp, $asiento);
            fwrite($fp, "1", 1); //Re-escribimos el valor en el que estamos posicionados previamente (fichero, nuevo valor, tamaño)
            rewind($fp); //Volvemos a la posicion inicial del fichero(nº asientos libres)
            fwrite($fp, strval($asientosLibres-1) ,1); //Actualizamos el nº de asientos libres
            print "El asiento estaba libre y ha sido reservado";
        }
    }

    fclose ($fp);
?>