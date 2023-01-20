<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php

    /*Dado un array tradicional que contiene los números de error que un grupo de personas cometieron ayer o cualquier día.
    Crea un array asociativo que contenga como clave el error( un nº) y como valor el nº de veces que se repitió.*/

        $logErrores = array(1, 2, 3, 1, 3, 2, 3, 2, 2);
        $contErrores = array_count_values($logErrores);

        foreach ($contErrores as $clave => $valor) {

            print "El error tipo " . $clave . " se ha repetido ". $valor . " veces" . "<br>";
        }

        $mayorError = max($contErrores);
        $tipoError = array_search($mayorError, $contErrores);
        print "El error tipo " . $tipoError . " es el que mas se repite, " . " se repite un total de " . $mayorError . " veces";
    ?>

</body>
</html>