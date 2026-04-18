<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$host = "localhost";
$user = "root";
$pass = "";

// 1. เชื่อมต่อฐานข้อมูล (แค่เพื่อสร้าง DB ร่ายยังไม่ระบุ dbname)
$conn = new mysqli($host, $user, $pass);
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]));
}

// 2. สร้าง Database
$sql = "CREATE DATABASE IF NOT EXISTS football_club CHARACTER SET utf8 COLLATE utf8_general_ci";
if ($conn->query($sql) === TRUE) {
    // 3. ไปใช้ฐานข้อมูลที่สร้าง
    $conn->select_db("football_club");
    
    // 4. สร้าง Table
    $table_sql = "CREATE TABLE IF NOT EXISTS students (
        id VARCHAR(10) PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        position VARCHAR(50) NOT NULL,
        year VARCHAR(10) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";

    if ($conn->query($table_sql) === TRUE) {
        
        // ใส่ข้อมูลตั้งต้นถ้ายังไม่มีข้อมูล
        $check_rows = "SELECT COUNT(*) as count FROM students";
        $result = $conn->query($check_rows);
        $row = $result->fetch_assoc();
        
        if($row['count'] == 0) {
            $insert_sql = "INSERT INTO students (id, name, position, year) VALUES 
                ('65001', 'ออโต้', 'กองหน้า', '3'),
                ('65002', 'มีนา', 'กองกลาง', '2'),
                ('65003', 'คอมเจ๋อ', 'กองหลัง', '4'),
                ('65004', 'สมชาย', 'ผู้รักษาประตู', '1'),
                ('65005', 'สมปอง', 'กองหน้า', '3')";
            $conn->query($insert_sql);
        }

        echo json_encode(["status" => "success", "message" => "Database and table created successfully with default data"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error creating table: " . $conn->error]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Error creating database: " . $conn->error]);
}

$conn->close();
?>
