<?php
$para = $_POST['email'];
$assunto = 'Amigo secreto';
$mensagem = 'Seu amigo é: ' + $_POST['nome'];;

$headers = 'De: remetente@example.com' . "\r\n" .
    'Reply-To: remetente@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if (mail($para, $assunto, $mensagem, $headers)) {
    echo 'Email enviado com sucesso.';
} else {
    echo 'Erro ao enviar email.';
}
?>
