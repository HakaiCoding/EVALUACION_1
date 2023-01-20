<?php

    include("./functions.php");

    //VARIABLES añadir isset
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $course =  $_POST['course'];
    $aptScore = $_POST['aptScore'];
    $workScore = $_POST['workScore'];
    $testScore = $_POST['testScore'];
    $finalScore = finalScore($aptScore, $workScore, $testScore);
    $titula = alumnoTitula($aptScore, $workScore, $testScore);


    //Fichero
    $fp = fopen ('expediente.txt', 'r+');
    
    fwrite($fp, "Alumno: $name");
    fwrite($fp, "\n");
    fwrite($fp, "Asignatura: $subject");
    fwrite($fp, "\n");
    fwrite($fp, "Curso: $course");
    fwrite($fp, "\n");
    fwrite($fp, "Nota actitud: $aptScore");
    fwrite($fp, "\n");
    fwrite($fp, "Nota trabajos: $workScore");
    fwrite($fp, "\n");
    fwrite($fp, "Nota examen: $testScore");
    fwrite($fp, "\n");
    fwrite($fp, "Nota final: $finalScore");
    fwrite($fp, "\n");
    fwrite($fp, "¿Titula?: $titula");

    fclose ($fp);


    //Visualizar datos
    // print "Name: $name <br>
    // Subject: $subject <br>
    // Course: $course <br>
    // Aptitude Score: $aptScore <br>
    // Work Score: $workScore <br>
    // Test Score: $testScore <br>
    // Final Score: $finalScore <br>
    // ¿Titula?: $titula <br>";

    //Visualiza el array alumno
    // var_dump(arrayAlumno($name, $subject, $course, $aptScore, $workScore, $testScore, $finalScore, $titula));

    //Variable que guarda el tamaño del array
    // $arraySize = count(arrayAlumno($name, $subject, $course, $aptScore, $workScore, $testScore, $finalScore, $titula));
    

?>