<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Include configuration
require __DIR__ . '/config.php';

// Include PHPMailer library files
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';
require __DIR__ . '/PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');

try {
    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    // Server settings
    $mail->SMTPDebug = 3;  // Enable verbose debug output
    $mail->Debugoutput = function($str, $level) {
        error_log("PHPMailer debug ($level): $str");
    };
    
    $mail->isSMTP();
    $mail->Host = SMTP_HOST;
    $mail->SMTPAuth = true;
    $mail->Username = SMTP_USERNAME;
    $mail->Password = SMTP_PASSWORD;
    $mail->SMTPSecure = SMTP_SECURE;
    $mail->Port = SMTP_PORT;

    // Enable detailed SMTP debugging
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    // Recipients
    $mail->setFrom(MAIL_FROM, MAIL_FROM_NAME . ' Test');
    $mail->addAddress(MAIL_TO);

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Test Email from FastTripGo Website';
    $mail->Body = '<h1>Test Email</h1><p>This is a test email to verify SMTP settings are working correctly.</p>';
    $mail->AltBody = 'This is a test email to verify SMTP settings are working correctly.';

    // Send the email
    $mail->send();
    echo json_encode([
        'success' => true,
        'message' => 'Test email sent successfully!'
    ]);

} catch (Exception $e) {
    $errorMessage = $mail->ErrorInfo ?? $e->getMessage();
    error_log("Test Mail Error: " . $errorMessage);
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => "Test failed with error: " . $errorMessage
    ]);
}
?>
