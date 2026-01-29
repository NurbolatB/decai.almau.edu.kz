<?php
// === Настройки ===
$receiver = "decai@almau.edu.kz"; // 
$subject = "Новая регистрация с сайта AI Conference";

// Включаем CORS, если нужно
header("Access-Control-Allow-Origin: *");

// Устанавливаем правильный Content-Type
header("Content-Type: text/plain; charset=UTF-8");

// Получаем данные
$name         = $_POST["name"] ?? "";
$email        = $_POST["email"] ?? "";
$phone        = $_POST["phone"] ?? "";
$country      = $_POST["country"] ?? "";
$organization = $_POST["organization"] ?? "";
$category     = $_POST["category"] ?? "";  // НОВОЕ: Категория участия
$status       = $_POST["status"] ?? "";    // НОВОЕ: Статус участника
$format       = $_POST["format"] ?? "";
$topic        = $_POST["topic"] ?? "";
$comments     = $_POST["comments"] ?? "";


// Проверка обязательных полей
if (!$name || !$email || !$organization || !$category || !$status || !$format) {
    echo "error:missing_fields";
    exit;
}


// Формируем письмо
$message = "
<b>Новая регистрация на конференцию:</b><br><br>
<b>ФИО:</b> $name<br>
<b>Email:</b> $email<br>
<b>Телефон:</b> $phone<br>
<b>Страна:</b> $country<br>
<b>Организация:</b> $organization<br>
<b>Категория участия:</b> $category<br>
<b>Статус участника:</b> $status<br>
<b>Формат:</b> $format<br>
";

// Добавляем тему доклада, если есть
if (!empty($topic)) {
    $message .= "<b>Тема доклада:</b> $topic<br>";
}

// Добавляем комментарии, если есть
if (!empty($comments)) {
    $message .= "<b>Комментарий:</b> $comments<br>";
}

// Отправка
$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: noreply@decai.almau.edu.kz" . "\r\n";

$mail_ok = mail($receiver, $subject, $message, $headers);

// Очищаем буфер вывода перед отправкой ответа
if (ob_get_length()) {
    ob_clean();
}

// Отправляем только текст без лишних пробелов и переносов
if ($mail_ok) {
    echo "success";
} else {
    echo "error:send_failed";
}

// Завершаем скрипт
exit;
?>

