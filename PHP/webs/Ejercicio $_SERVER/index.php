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

        $fileName = $_SERVER['PHP_SELF'];
        $serverIP = $_SERVER['SERVER_ADDR'];
        $serverName = $_SERVER['SERVER_NAME'];
        $serverReqTime = $_SERVER['REQUEST_TIME'];
        $clientIP = $_SERVER['REMOTE_ADDR'];
        $scriptRoute = $_SERVER['SCRIPT_NAME'];

        print "Nombre archivo: . $fileName.<br>
            IP: . $serverIP.<br>
            Nombre dominio: . $serverName.<br>
            Momento petición: . $serverReqTime.<br>
            IP del cliente: . $clientIP.<br>
            Ruta del script: . $scriptRoute.<br>"
            
    ?>
</body>
</html>