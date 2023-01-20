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

        $gastosTrim1 = array (
            "Comida" => 100,
            "Luz" => 50,
            "Agua" => 30,
            "Alquiler" => 700,
            "Ocio" => 200
        );

        $gastosTrim2 = array (
            "Comida" => 150,
            "Luz" => 80,
            "Agua" => 50,
            "Alquiler" => 700,
            "Ocio" => 100
        );

        $gastosTrim3 = array (
            "Comida" => 120,
            "Luz" => 50,
            "Agua" => 40,
            "Alquiler" => 700,
            "Ocio" => 120
        );

        $gastosTrim4 = array (
            "Comida" => 150,
            "Luz" => 60,
            "Agua" => 50,
            "Alquiler" => 700,
            "Ocio" => 100
        );


        /* 1. Escribe en el navegador el nombre de todos los gastos que tenemos */
        print "NOMBRE GASTOS" . "<br>";
        foreach ($gastosTrim1 as $item => $value) {
			print $item . "<br>";
		}

        /* 2. Dime el importe máximo para los gastos del 2º trimestre */ 
        $maxImporte = 0;

        print "IMPORTE MAS ALTO 2º TRIMESTRE" . "<br>";
        foreach ($gastosTrim2 as $item => $value) {

            if ($value > $maxImporte) {
                $maxImporte = $value;
            }
		}
        print $maxImporte . "<br>";

        /* 3.Ordena los gastos del primer trimestre de mayor a menor y muéstralos con echos */
        print "GASTOS 1er TRIMESTRE DE MAYOR A MENOR" . "<br>";
        arsort($gastosTrim1);

        foreach ($gastosTrim1 as $item => $value) {
			print $item . $value . "<br>";
		}

        /* 4.Ordena los gastos del segundo trimestre de menor a mayor y muéstralos con echos */
        print "GASTOS 2º TRIMESTRE DE MENOR A MAYOR" . "<br>";
        asort($gastosTrim2);

        foreach ($gastosTrim2 as $item => $value) {
			print $item . $value . "<br>";
		}

        /* 5.Saca los gastos anuales ordenados alfabéticamente */
        $gastoAnualComida = 0;
        $gastoAnualLuz = 0;
        $gastoAnualAgua = 0;
        $gastoAnualAlquiler = 0;
        $gastoAnualOcio = 0;

        print "GASTO ANUAL TOTAL" . "<br>";
        foreach ($gastosTrim1 as $item => $value) {
			if ($item == "Comida") {
                $gastoAnualComida = $gastoAnualComida + $value;
            }
            else if ($item == "Luz") {
                $gastoAnualLuz = $gastoAnualLuz + $value;
            }
            else if ($item == "Agua") {
                $gastoAnualAgua = $gastoAnualAgua + $value;
            }
            else if ($item == "Alquiler") {
                $gastoAnualAlquiler = $gastoAnualAlquiler + $value;
            }
            else {
                $gastoAnualOcio = $gastoAnualOcio + $value;
            }
		}

        foreach ($gastosTrim2 as $item => $value) {
			if ($item == "Comida") {
                $gastoAnualComida = $gastoAnualComida + $value;
            }
            else if ($item == "Luz") {
                $gastoAnualLuz = $gastoAnualLuz + $value;
            }
            else if ($item == "Agua") {
                $gastoAnualAgua = $gastoAnualAgua + $value;
            }
            else if ($item == "Alquiler") {
                $gastoAnualAlquiler = $gastoAnualAlquiler + $value;
            }
            else {
                $gastoAnualOcio = $gastoAnualOcio + $value;
            }
		}

        foreach ($gastosTrim3 as $item => $value) {
			if ($item == "Comida") {
                $gastoAnualComida = $gastoAnualComida + $value;
            }
            else if ($item == "Luz") {
                $gastoAnualLuz = $gastoAnualLuz + $value;
            }
            else if ($item == "Agua") {
                $gastoAnualAgua = $gastoAnualAgua + $value;
            }
            else if ($item == "Alquiler") {
                $gastoAnualAlquiler = $gastoAnualAlquiler + $value;
            }
            else {
                $gastoAnualOcio = $gastoAnualOcio + $value;
            }
		}

        foreach ($gastosTrim4 as $item => $value) {
			if ($item == "Comida") {
                $gastoAnualComida = $gastoAnualComida + $value;
            }
            else if ($item == "Luz") {
                $gastoAnualLuz = $gastoAnualLuz + $value;
            }
            else if ($item == "Agua") {
                $gastoAnualAgua = $gastoAnualAgua + $value;
            }
            else if ($item == "Alquiler") {
                $gastoAnualAlquiler = $gastoAnualAlquiler + $value;
            }
            else {
                $gastoAnualOcio = $gastoAnualOcio + $value;
            }
		}
        print "Agua: " . $gastoAnualAgua . "<br>";
        print "Alquiler: " . $gastoAnualAlquiler . "<br>";
        print "Comida: " . $gastoAnualComida . "<br>";
        print "Luz: " . $gastoAnualLuz . "<br>";
        print "Ocio: " . $gastoAnualOcio . "<br>";

    ?>

</body>
</html>