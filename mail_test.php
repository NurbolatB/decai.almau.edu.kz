<?php
$to = "nurbolatbk@gmail.com";
$subject = "Test PHP Mail Function";
$message = "This is a test email sent from PHP mail() function on decai.almau.edu.kz";
$headers = "From: noreply@decai.almau.edu.kz\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

echo "Attempting to send email...<br>";

$result = mail($to, $subject, $message, $headers);

if ($result) {
    echo "✅ Email sent successfully!<br>";
    echo "To: $to<br>";
    echo "Check your inbox (including spam folder)";
} else {
    echo "❌ Failed to send email.<br>";
    
    // Детальная диагностика
    $last_error = error_get_last();
    echo "Last error: " . ($last_error['message'] ?? 'Unknown error') . "<br>";
    
    // Проверяем логи
    echo "Check /var/log/mail.log for details";
}
?>
