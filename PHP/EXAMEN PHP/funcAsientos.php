<?php

function numAsientosTotal() {
    $fp = fopen ("fichero.txt","r+");
    $asientosLibres = intval(fread($fp, 1));
    fclose ($fp);
    return $asientosLibres;
}


function numAsientosDTotal() {
    $fp = fopen ("fichero.txt","r+");
    fseek($fp, 10);
    $asientosLibres = intval(fread($fp, 1));
    fclose ($fp);
    return $asientosLibres;
}


?>