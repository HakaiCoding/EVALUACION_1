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

    /*Calcular el factorial de un nº dado*/
    $numero = 5;
    $factorial = 1;

    for ($i=0 ; $i < $numero ; $i++) {
       
        $factorial = $factorial * ($numero - $i);
    }

    print $factorial;

    ?>

</body>
</html>