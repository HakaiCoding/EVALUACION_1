<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	
    <title>Visualizar Elementos Relaccionados en PHP</title>		
	<style>
	
			body{
				margin:0;
				padding:0;
			}
			
			
			.conten{
				margin:2%;
				width:50%;
				display:flex;
				flex-direction:column;
				align-items:center;
			}
			
						
			
			
	</style>
	
 
	<body>
	<?php  $prueba=7; ?>
				
	  <div class="conten">
		<?php
		 
		  echo "la variable prueba vale $prueba";
		  echo "la variable \$prueba vale $prueba";
	
		
		?>

		<h1> la variable $prueba actualmente tiene el valor de <?=$prueba;?> </h1>
			o bien
		<h2> la variable $prueba actualmente tiene el valor de <?php echo "$prueba";?> </h2>
			o bien
		<?php
			echo "<h3> la variable prueba vale $prueba </h3>";

		?>
		
		
	</body>
</html>