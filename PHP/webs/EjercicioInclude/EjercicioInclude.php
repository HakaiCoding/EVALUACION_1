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

        $fp = fopen ("FicheroInclude.txt","r");

        $row1 = fgetcsv($fp, 1000, ",");

        $numbers = implode($row1); 
       print ($numbers) . "<br>";

        $numbers = str_replace(" ", ",", $numbers); 
        print $numbers . "<br>";
        

        $newNumbers = "";

        for ($i = 0 ; $i < strlen($numbers) ; $i++) {
            if(substr($numbers, $i, 1) != ",") {
                $newNumbers = $newNumbers . substr($numbers, $i, 1);
            }
            else if (substr($numbers, $i, 1) == ",") {
                if (substr($numbers, $i, 1) != substr($numbers, $i+1, 1)) {
                    $newNumbers = $newNumbers . substr($numbers, $i, 1);
                }
            }
        }
        print $newNumbers . "<br>";

        $newNumbers = explode(",", $newNumbers);

        foreach ($newNumbers as $item => $value) {
            if ($value == strrev($value)){
                print substr_replace($value, "true,", 0);
            }
            else {
                print $value . ",";
            }
		
		}

        fclose ($fp);
    ?>

</body>
</html>
