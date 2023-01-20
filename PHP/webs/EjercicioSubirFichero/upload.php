<?php
    $fileName = $_FILES['uploadFile'] ['name'];
    $fileSize = $_FILES['uploadFile'] ['size'];
    $fileType = $_FILES['uploadFile'] ['type'];


    if(isset($_POST['uploadBtn'])) {
        if($fileSize > 1024) {
            header("Location:http://localhost/webs/EjercicioSubirFichero/index.php?mensaje=El archivo pesa más de 1 kilobyte");
        }
        else {
            header("Location:http://localhost/webs/EjercicioSubirFichero/index.php?mensaje=Peso de archivo válido");
            
             if($fileType != "application/msword" && $fileType != "application/pdf"){
                header("Location:http://localhost/webs/EjercicioSubirFichero/index.php?mensaje=Tipo de archivo no válido, debe ser .doc o .pdf");
                header("Location:http://localhost/webs/EjercicioSubirFichero/index.php?mensaje=No se ha podido cargar el archivo");
            }
            else {
            header("Location:http://localhost/webs/EjercicioSubirFichero/index.php?mensaje=Tipo de archivo válido");
            header("Location:http://localhost/webs/EjercicioSubirFichero/index.php?mensaje=Archivo cargado correctamente");

            // print "Archivo cargado correctamente" . move_uploaded_file($fileName, "/Carpeta");
            }
        }     
    }
?>