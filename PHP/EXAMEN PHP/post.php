<?php

    //El fichero contiene todos los asientos en una sola línea 21111010111
    //El primer dígito (2), hace referencia al número de asientos normales disponibles.
    //El ultimo dígito (1), hace referencia al numero de asientos para discapacitados disponibles.

    $fp = fopen ("fichero.txt","r+"); //Abrimos fichero
    
    $asientosLibres = intval(fread($fp, 1)); //Guardamos y convertimos a integer el valor de la primera posición
    $asientosLibresD = 1; 

    $asiento = $_POST['asiento']; //Guardamos valor de la posicion pasada por usuario

    if(isset($_POST['discapacitado']) && $_POST['discapacitado'] == '1'){
        if($asiento == 2 || $asiento == 7 || $asiento == 9){
            print "El asiento que intentas reservar es para discapacitados" . "<br>";
            if($asientosLibres > 0){
                fseek($fp, $asiento); //Nos posicionamos en la posicion pasada por el usuario (asiento)
                if(intval(fread($fp, 1)) > 0){ //Condicion que comprueba que el valor del asiento es mayor que 0 (está ocupado)
                    print "Ese asiento está ocupado" . "<br>";
                }
                else {
                    fseek($fp, $asiento);
                    fwrite($fp, "1", 1); //Re-escribimos el valor en el que estamos posicionados previamente (fichero, nuevo valor, tamaño)
                    rewind($fp); //Volvemos a la posicion inicial del fichero(nº asientos libres)
                    fwrite($fp, strval($asientosLibres-1) ,1); //Actualizamos el nº de asientos libres
                    print "El asiento estaba libre y ha sido reservado" . "<br>";
                    $asientosLibresD--;
                    fseek($fp, 10);
                    fwrite($fp, $asientosLibresD, 1); //Añade al final de la linea el número de asientos para discapacitados disponibles
                }
            }
        }
        else if($asiento == 1 || $asiento == 3 || $asiento == 4 || $asiento == 5 || $asiento == 6 || $asiento == 8){
            print "No puedes reservar un asiento para no discapacitados" . "<br>";
        }
    }
    else if(isset($_POST['normal']) && $_POST['normal'] == '1'){
        if($asiento == 1 || $asiento == 3 || $asiento == 4 || $asiento == 5 || $asiento == 6 || $asiento == 8){
            print "El asiento que intentas reservar es para NO discapacitados" . "<br>";
            if($asientosLibres > 0){
                fseek($fp, $asiento); //Nos posicionamos en la posicion pasada por el usuario (asiento)
                if(intval(fread($fp, 1)) > 0){ //Condicion que comprueba que el valor del asiento es mayor que 0 (está ocupado)
                    print "Ese asiento está ocupado" . "<br>";
                }
                else {
                    fseek($fp, $asiento);
                    fwrite($fp, "1", 1); //Re-escribimos el valor en el que estamos posicionados previamente (fichero, nuevo valor, tamaño)
                    rewind($fp); //Volvemos a la posicion inicial del fichero(nº asientos libres)
                    fwrite($fp, strval($asientosLibres-1) ,1); //Actualizamos el nº de asientos libres
                    print "El asiento estaba libre y ha sido reservado" . "<br>";
                }
            }
        }
        else if($asiento == 2 || $asiento == 7 || $asiento == 9){
            print "No puedes reservar un asiento para discapacitados" . "<br>";
        }
    }


    fclose ($fp);

    
    include("./funcAsientos.php");

    $asientosDisponibles = numAsientosTotal();
    $asientosDDisponibles = numAsientosDTotal();

    print "Asientos normales disponibles: " . $asientosDisponibles . "<br>";
    print "Asientos para discapacitados disponibles: " . $asientosDDisponibles . "<br>";


?>