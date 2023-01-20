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

        $numbers=array(
            "A"=> 5,
            "B"=> 10,
            "C"=> 15
        );

        function calcularDoble($value,$key){
            $value = $value * 2;
            print "El número en la posicion " . $key . " ahora vale: " . $value . "<br>";
        }

        
        array_walk($numbers,"calcularDoble");
    ?>


</body>
</html>