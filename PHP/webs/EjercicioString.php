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

        $peopleNumber = "Paqui 910235521;Rocio 924912311;Paco 959564265;Teresa 913225648;Pedro 914222545";
        print $peopleNumber . "<br>";

        $peopleNumberOrder = explode(";", $peopleNumber);

        
        $madridNumbers = 0;
        $otherNumbers = 0;

        
      


        
        foreach ($peopleNumberOrder as $clave) {

            print "Nombre y telefono: " . $clave . "<br>";
           

            if (preg_match("/ 91/", $clave)) {
                $madridNumbers++;
            }
            else {
                $otherNumbers++;
            }
        }

        print "Hay " . $madridNumbers . " personas de Madrid y " . $otherNumbers . " de otro lado";
    ?>

</body>
</html>