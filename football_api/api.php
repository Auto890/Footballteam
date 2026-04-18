<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// จัดการ CORS preflight request (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

include 'db.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // ดึงข้อมูลทั้งหมด
        $sql = "SELECT id, name, position, year FROM students";
        $result = $conn->query($sql);
        $data = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
        }
        echo json_encode($data);
        break;

    case 'POST':
        // เพิ่มข้อมูล
        $input = json_decode(file_get_contents('php://input'), true);
        if (isset($input['id']) && isset($input['name']) && isset($input['position']) && isset($input['year'])) {
            $id = $conn->real_escape_string($input['id']);
            $name = $conn->real_escape_string($input['name']);
            $position = $conn->real_escape_string($input['position']);
            $year = $conn->real_escape_string($input['year']);

            $sql = "INSERT INTO students (id, name, position, year) VALUES ('$id', '$name', '$position', '$year')";
            if ($conn->query($sql) === TRUE) {
                echo json_encode(["status" => "success", "message" => "Added successfully"]);
            } else {
                http_response_code(500);
                echo json_encode(["status" => "error", "message" => "Error: " . $conn->error]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["status" => "error", "message" => "Missing required fields"]);
        }
        break;

    case 'DELETE':
        // ลบข้อมูล
        $input = json_decode(file_get_contents('php://input'), true);
        if (isset($_GET['id'])) {
            $id = $conn->real_escape_string($_GET['id']);
        } else if (isset($input['id'])) {
            $id = $conn->real_escape_string($input['id']);
        }

        if (isset($id)) {
            $sql = "DELETE FROM students WHERE id='$id'";
            if ($conn->query($sql) === TRUE) {
                echo json_encode(["status" => "success", "message" => "Deleted successfully"]);
            } else {
                http_response_code(500);
                echo json_encode(["status" => "error", "message" => "Error: " . $conn->error]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["status" => "error", "message" => "Missing id for delete"]);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(["status" => "error", "message" => "Method not allowed"]);
        break;
}

$conn->close();
?>
