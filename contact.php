<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Lấy dữ liệu từ form
    $name = htmlspecialchars($_POST['Name']); // Bảo vệ dữ liệu khỏi XSS
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Kiểm tra dữ liệu
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Xử lý dữ liệu (ví dụ: lưu vào database hoặc gửi email)
        echo "Thank you, $name. Your message has been received.";
    } else {
        echo "Please fill out all fields.";
    }
}
?>