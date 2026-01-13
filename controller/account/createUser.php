<?php
require_once "../../model/conection/conectDb.php";

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
// error_log(print_r($_POST, true));
    $nombre = $_POST["nombre_completo"] ?? '';
    $celular = $_POST["celular"] ?? '';
    $tipo_documento = $_POST["tipo_documento"] ?? '';
    $numero_documento = $_POST["numero_documento"] ?? '';
    $password = password_hash($_POST["password"], PASSWORD_BCRYPT);

    $sql = "INSERT INTO usuarios 
            (nombre_completo, celular, tipo_documento, numero_documento, password)
            VALUES (?, ?, ?, ?, ?)";

    $stmt = $mysqli->prepare($sql);

    if (!$stmt) {
        echo json_encode([
            "success" => false,
            "message" => "Error en prepare"
        ]);
        exit;
    }

    $stmt->bind_param(
        "sssss",
        $nombre,
        $celular,
        $tipo_documento,
        $numero_documento,
        $password
    );

    if ($stmt->execute()) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => $stmt->error
        ]);
    }
}
