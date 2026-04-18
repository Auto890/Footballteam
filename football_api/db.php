<?php
$host = "localhost";
$user = "root";       // ค่าเริ่มต้นของ XAMPP MySQL
$pass = "";           // ค่าเริ่มต้นของ XAMPP MySQL
$dbname = "football_club";

// สร้างการเชื่อมต่อ
$conn = new mysqli($host, $user, $pass, $dbname);

// เช็คการเชื่อมต่อ
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$conn->set_charset("utf8");
?>
