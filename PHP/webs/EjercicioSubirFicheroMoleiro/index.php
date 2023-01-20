<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="./recogerDatos.php" method="POST" enctype="multipart/form-data">
        <label for="name">Nombre: <input type="text" name="name" id="name" require></label>
        <label for="provincia">Provincia <input type="text" name="provincia" id="provincia" require></label>
        <label for="cv">C.V <input type="file" name="cv" id="cv" require></label>
        <input type="submit" value="Enviar">
    </form>

    <?php 
    
    if(isset($_GET['mensaje'])){
        echo $_GET['mensaje'];
    }
        
    ?>
</body>
</html>