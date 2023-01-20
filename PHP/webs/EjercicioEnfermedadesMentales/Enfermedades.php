<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="Enfermedades.php" method="post">
        <input type="text" name="enfermedad">
        <input type="submit" value="buscar">
    </form>

    <?php
    
        $fp = fopen ("FicheroEnfermedades.csv","r");
        $row1 = fgetcsv($fp, 1000, ","); 
        $row2 = fgetcsv($fp, 1000, ","); 
        $row3 = fgetcsv($fp, 1000, ",");

      
        if(isset($_POST['enfermedad'])){
            if($_POST['enfermedad'] == "TCA") {
                print $row1[0] . "<br>" . $row1[1] . "<br>" . $row1[2] . "<br>";
            }
            else if($_POST['enfermedad'] == "TDAH"){
                print $row2[0] . "<br>" . $row2[1] . "<br>" . $row2[2] . "<br>";
            }
            else if($_POST['enfermedad'] == "TP"){
                print $row3[0] . "<br>" . $row3[1] . "<br>" . $row3[2] . "<br>";
            }
        }

        fclose ($fp);
    ?>
</body>

</html>