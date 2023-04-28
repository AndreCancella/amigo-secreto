<?php
// Recebe os dados JSON enviados
$json = $_POST['json'];

// Converte o JSON em um objeto ou array PHP
$data = json_decode($json);

error_log($json);
?>