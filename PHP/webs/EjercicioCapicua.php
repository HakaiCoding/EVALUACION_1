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

        $num = 11011;
        $numRev = strrev($num);

        if ($num == $numRev) {
            print "El número " . $num . " es capicua";
        }
        else {
            print "El número " . $num . " no es capicua";
        }

    ?>
    
</body>
</html>