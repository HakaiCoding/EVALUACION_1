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

        $comisTrimestral = array (
            "Ibercaja" => 30,
            "BBVA" => 40,
            "Sabadell" => 30,
            "Caixabank" => 30,
            "Santander" => 60,
            "Bankia" => 42
        );

        $anualBBVA = 40*4;
        $anualSabadell = 40*4;

        print "La comision total anual de ambos bancos es " . $comisionTotal = $anualBBVA + $anualSabadell . "<br>";


        $menorComision = min($comisTrimestral);

        foreach ($comisTrimestral as $item => $value) {
            if ($value <= $menorComision)
			print "El banco " . $item." tiene la comision más baja, que es de; ".$value . "<br>";
		}

    ?>

</body>
</html>