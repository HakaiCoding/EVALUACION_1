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

		/* Array */
		$pesoClase = array (
			"Victor" => 70,
			"Gallardo" => 85,
			"Moleiro" => 80,
			"Sebastian" => 75,
			"Rulo" => 90,
			"Dani" => 65
		);

		/* Bucle foreach para recorrer e imprimir todo el array */
		foreach ($pesoClase as $item => $value) {
			print $item." : ".$value . "<br>";
		}

		/* Sacar nombre y peso de la persona que mas pesa dentro del array */
		$pesoMayor=(max($pesoClase));
		$nombrePeso = array_search($pesoMayor, $pesoClase);
		print "La persona que mas pesa de clase es ". $nombrePeso . " y pesa " . $pesoMayor . "kg.";
	?>

</body>
</html>