<?php
    $json_str = file_get_contents('php://input');
    $json_obj = json_decode($json_str, true);

    $array = array();

    shuffle($json_obj);

    // Atribuir um amigo secreto para cada participante
    $num_participantes = count($json_obj);
    for ($i = 0; $i < $num_participantes; $i++) {
        $amigo_secreto = $json_obj[($i + 1) % $num_participantes]["nome"];
        $to = $json_obj[$i]["email"] ;
        $subject = "Amigo secreto";
        $message = $json_obj[$i]["nome"] . " tirou " . $amigo_secreto . "<br>";
        $headers = "From:andre.cancella@payfy.io\r\n";
        $headers .= "Reply-To: andre.cancella@payfy.io\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        error_log($headers);
        mail($to, $subject, $message, $headers);
    }
    
    //$nome = $json_obj->nome;
    //$response = $json_obj;

?>