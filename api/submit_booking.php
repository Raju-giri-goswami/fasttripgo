<?php
require __DIR__ . '/config.php';

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/debug.log');

// Log request details
error_log("Booking form submission received: " . date('Y-m-d H:i:s'));
error_log("Request data: " . file_get_contents("php://input"));

// Security and CORS headers
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '*';
$allowedOrigin = (strpos($origin, 'localhost') !== false || strpos($origin, '127.0.0.1') !== false) 
    ? $origin 
    : ALLOWED_ORIGIN;

header('Access-Control-Allow-Origin: ' . $allowedOrigin);
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With, Accept, Origin, Authorization');
header('Access-Control-Max-Age: 86400');
header('Content-Type: application/json; charset=utf-8');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit();
}

// Include PHPMailer
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';
require __DIR__ . '/PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Parse JSON input
$input = file_get_contents("php://input");
if (!$input) {
    error_log("No input data received");
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'No input data provided']);
    exit();
}

$data = json_decode($input, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    error_log("JSON decode error: " . json_last_error_msg());
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON data']);
    exit();
}

// Validate required fields
if (!isset($data['name']) || !isset($data['email']) || !isset($data['phone'])) {
    error_log("Missing required fields");
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Missing required fields']);
    exit();
}

try {
    $mail = new PHPMailer(true);

    // Server settings with detailed logging
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->Debugoutput = function($str, $level) {
        error_log("PHPMailer [$level] : $str");
    };

    // Configure SMTP
    $mail->isSMTP();
    $mail->Host = SMTP_HOST;
    $mail->SMTPAuth = true;
    $mail->Username = SMTP_USERNAME;
    $mail->Password = SMTP_PASSWORD;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = SMTP_PORT;
    $mail->Timeout = 30;

    // For local testing/development
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    // Set sender and recipient
    $mail->setFrom(MAIL_FROM, MAIL_FROM_NAME);
    $mail->addAddress(MAIL_TO);
    
    // Email content
    $mail->isHTML(true);
    $mail->Subject = 'New Booking Request - FastTripGo';
    
    // Build email body
    $body = "<h2>New Booking Request</h2>";
    $body .= "<p><strong>Name:</strong> " . htmlspecialchars($data['name']) . "</p>";
    $body .= "<p><strong>Email:</strong> " . htmlspecialchars($data['email']) . "</p>";
    $body .= "<p><strong>Phone:</strong> " . htmlspecialchars($data['phone']) . "</p>";
    
    if (!empty($data['destination'])) {
        $body .= "<p><strong>Destination:</strong> " . htmlspecialchars($data['destination']) . "</p>";
    }
    if (!empty($data['packageTitle'])) {
        $body .= "<p><strong>Package:</strong> " . htmlspecialchars($data['packageTitle']) . "</p>";
    }
    if (!empty($data['travelDate'])) {
        $body .= "<p><strong>Travel Date:</strong> " . htmlspecialchars($data['travelDate']) . "</p>";
    }
    if (isset($data['adults'])) {
        $body .= "<p><strong>Adults:</strong> " . intval($data['adults']) . "</p>";
    }
    if (isset($data['children'])) {
        $body .= "<p><strong>Children:</strong> " . intval($data['children']) . "</p>";
    }
    if (!empty($data['message'])) {
        $body .= "<p><strong>Message:</strong><br>" . nl2br(htmlspecialchars($data['message'])) . "</p>";
    }
    
    $mail->Body = $body;
    $mail->AltBody = strip_tags(str_replace(['<p>', '</p>', '<br>'], ["\n", "\n", "\n"], $body));

    // Log before sending
    error_log("Attempting to send booking notification email");

    // Send email
    if (!$mail->send()) {
        throw new Exception('Mailer Error: ' . $mail->ErrorInfo);
    }

    // Log success
    error_log("Booking notification email sent successfully");

    // Success response
    http_response_code(200);
    echo json_encode([
        "success" => true,
        "message" => "Thank you for your booking request. We'll get back to you shortly."
    ]);

} catch (Exception $e) {
    error_log("Booking form error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "error" => "Failed to send booking request. Technical details: " . $e->getMessage()
    ]);
}
