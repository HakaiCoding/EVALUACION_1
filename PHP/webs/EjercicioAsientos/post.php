<?php
    $fp = fopen ("FicheroAsientos.csv","r+");
    $row1 = fgetcsv($fp, 1000, ","); 
    $row2 = fgetcsv($fp, 1000, ","); 
    $row3 = fgetcsv($fp, 1000, ",");

    $listaAsientos = array_merge($row1, $row2, $row3); 
    // var_dump($listaAsientos);

    foreach ($listaAsientos as $index => $valor){
        if($_POST['asiento'] - "1" == $index){
            if($valor == "1"){
                print "El asiento nº" . $_POST['asiento'] . " está ocupado" . "<br>";
            }
            if($valor == "0"){
                print "El asiento nº" . $_POST['asiento'] . " está libre, ahora lo tienes reservado" . "<br>";
                $listaAsientos[$_POST['asiento'] - "1"] = "1";
            }
        }
    }

    foreach ($listaAsientos as $index => $valor){
        print $valor . "<br>";
    }

    fclose ($fp);
?>