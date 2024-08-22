<?php
require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $params = json_decode($json);

    if (!$params || !isset($params->name) || !isset($params->email) || !isset($params->message)) {
        echo json_encode(["status" => "error", "message" => "Invalid input"]);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.ionos.de';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'developer@felix-wahls.com';  // Deine Email von IONOS
        $mail->Password   = 'Ichbinsuper1994!';           // Dein Email password von IONOS
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        //Recipients
        $mail->setFrom('noreply@felix-wahls.com', 'Contact Form');  // Kann drin stehen was will. Ich habe noreply@daniel-lehmann.dev
        $mail->addAddress('developer@felix-wahls.com');	// Deine empfangs email addresse. Ich habe da auch meine IONOS mail angegeben.
        $mail->addReplyTo($params->email, $params->name);

        //Content
        $mail->isHTML(true);
        $mail->Subject = "New Contact Form Submission from {$params->name}";
        $mail->Body    = "
            <p><strong>Name:</strong> " . htmlspecialchars($params->name) . "</p>
            <p><strong>Email:</strong> " . htmlspecialchars($params->email) . "</p>
            <p><strong>Message:</strong></p>
            <p>" . nl2br(htmlspecialchars($params->message)) . "</p>
        ";

        $mail->send();
        echo json_encode(["status" => "success", "message" => "Email sent successfully"]);
    } catch (Exception $e) {
        error_log("Mailer Error: " . $mail->ErrorInfo);
        echo json_encode(["status" => "error", "message" => "Failed to send email"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
}
?>