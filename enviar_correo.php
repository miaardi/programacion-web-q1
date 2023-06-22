<?php
// Código PHP aquí
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    // Configurar el correo
    $to = "mardissone@itba.edu.ar";
    $subject = "Nuevo mensaje de contacto";
    $message = "Nombre: " . $nombre . "\n";
    $message .= "Email: " . $email . "\n";
    $message .= "Mensaje: " . $mensaje . "\n";

    // Enviar el correo
    $headers = "From: " . $email . "\r\n";
    if (mail($to, $subject, $message, $headers)) {
        echo "El correo se envió correctamente.";
    } else {
        echo "Hubo un error al enviar el correo.";
    }
}
?>