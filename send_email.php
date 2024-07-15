<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    $to = "mertylmz8134@gmail.com";  // Buraya alıcı e-posta adresini yazın
    $subject = "New message from contact form";
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";

    $body = "<html><body>";
    $body .= "<p>Name: " . $name . "</p>";
    $body .= "<p>Email: " . $email . "</p>";
    $body .= "<p>Message: " . nl2br($message) . "</p>";
    $body .= "</body></html>";

    if (mail($to, $subject, $body, $headers)) {
        header("Location: ../index.html");
        echo "Email successfully sent!";
    } else {
        echo "Email sending failed.";
    }
} else {
    echo "Invalid request method.";
}
?>
