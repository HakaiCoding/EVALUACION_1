<?php

//FUNCTIONS

    //Funcion que calcula la nota media y la redondea con 2 decimales
    function finalScore($aptScore, $workScore, $testScore) {
        $finalScore = ($aptScore + $workScore + $testScore) / 3;
        return round($finalScore, 2);
     }
  
    
    //Funcion que comprueba si alguna nota es menor que 4 o si la media es menor que 5
    function alumnoTitula($aptScore, $workScore, $testScore) {
        if($aptScore < 4 || $workScore < 4 || $testScore < 4) {  
            $titula = "No";
        }
        else if(finalScore($aptScore, $workScore, $testScore) < 5) {
            $titula = "No";
        }
        else {
            $titula = "Si";
        }
        return $titula;
    }

    //Funcion que crea un array con los datos del alumno
    function arrayAlumno($name, $subject, $course, $aptScore, $workScore, $testScore, $finalScore, $titula) {
        $alumno = array(
            "Alumno" => $name,
            "Asignatura" => $subject,
            "Curso" => $course,
            "Nota actitud" => $aptScore,
            "Nota trabajos" => $workScore,
            "Nota examen" => $testScore,
            "Nota final" => $finalScore,
            "¿Titula?" => $titula
        );
        return $alumno;
    }


?>