<?php
if(isset($_POST['name']) && isset($_POST['provincia']) && isset($_FILES['cv'])){
        $nombre=$_FILES['cv']['name']; 
        $nombreTemp=$_FILES['cv']['tmp_name'];
        $peso=$_FILES['cv']['size'];
        $tipo=$_FILES['cv']['type'];
        $error=$_FILES['cv']['error'];
        
        
        if($error!=0){

            $mensaje="Ha ocurrido un error. Número de error = " . $error;  

        }else if($peso>1000){

            $mensaje="El tamaño del archivo es de " . $peso . " b. No se admiten archivos superiores a 1000b";

        }else if($tipo!= "application/pdf" && $tipo!="application/msword"){

            $mensaje="El archivo es del tipo ". $tipo ." solo se permiten archivos tipo pdf o word";

        }else if(move_uploaded_file($nombreTemp,"./$nombre")){

            $mensaje="El archivo se ha subido con éxito";

        }else{

            $mensaje="Ha ocurrido un error en el servidor";

        }

        header("Location:http://localhost/ejercicios/subirArchivo/index.php?mensaje=$mensaje");

}