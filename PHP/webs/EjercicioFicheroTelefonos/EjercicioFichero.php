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

        $fp = fopen ("AgendaTelefonos.csv","r");

        $acum = 0;

        $row1 = fgetcsv($fp, 1000, ","); 
        $row2 = fgetcsv($fp, 1000, ","); 
        $row3 = fgetcsv($fp, 1000, ","); 

        for ($i = 0 ; $i <5 ; $i++) {
            if (strstr($row1[$i], "Paqui") == true) {
                $acum++;
            }
            
            if (strstr($row2[$i], "Paqui") == true) {
                $acum++;
            }

            if (strstr($row3[$i], "Paqui") == true) {
                $acum++;
            }

        }

        print "El nombre Paqui sale un total de: " .$acum . " veces";


        fclose ($fp);
       
    ?>

</body>
</html>