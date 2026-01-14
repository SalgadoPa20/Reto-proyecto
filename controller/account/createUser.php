<?php

require_once "../../model/conection/conectDb.php";

header('Content-Type: application/json');

// 🔥 DATOS QUEMADOS (PRUEBA)
$nombre     = "Usuario Prueba dos";
$correo     = "prueba02@email.com";
$telefono   = "3001234567";
$direccion  = "Calle 123 #45-67";
$usuario    = "usuario_prueba02";
$tipo_doc   = "CC";
$num_doc    = "223456789";
$contrasena = password_hash("123456", PASSWORD_BCRYPT);

$sql = "INSERT INTO Cliente
        (Nombre_completo, Correo_electronico, Telefono, Direccion, Usuario,
         Tipo_documento, Numero_documento, Contrasena)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $mysqli->prepare($sql);

if (!$stmt) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Error en prepare",
        "error"   => $mysqli->error
    ]);
    exit;
}

$stmt->bind_param(
    "ssssssss",
    $nombre,
    $correo,
    $telefono,
    $direccion,
    $usuario,
    $tipo_doc,
    $num_doc,
    $contrasena
);

if ($stmt->execute()) {
    echo json_encode([
        "success" => true,
        "id_cliente" => $stmt->insert_id
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Error al insertar",
        "error"   => $stmt->error
    ]);
}



// require_once "../../model/conection/conectDb.php";

// header('Content-Type: application/json');

// if ($_SERVER["REQUEST_METHOD"] === "POST") {
// // error_log(print_r($_POST, true));
//     $nombre = $_POST["nombre_completo"] ?? '';
//     $celular = $_POST["celular"] ?? '';
//     $tipo_documento = $_POST["tipo_documento"] ?? '';
//     $numero_documento = $_POST["numero_documento"] ?? '';
//     $password = password_hash($_POST["password"], PASSWORD_BCRYPT);

//     $sql = "INSERT INTO usuarios 
//             (nombre_completo, celular, tipo_documento, numero_documento, password)
//             VALUES (?, ?, ?, ?, ?)";

//     $stmt = $mysqli->prepare($sql);

//     if (!$stmt) {
//         echo json_encode([
//             "success" => false,
//             "message" => "Error en prepare"
//         ]);
//         exit;
//     }

//     $stmt->bind_param(
//         "sssss",
//         $nombre,
//         $celular,
//         $tipo_documento,
//         $numero_documento,
//         $password
//     );

//     if ($stmt->execute()) {
//         echo json_encode(["success" => true]);
//     } else {
//         echo json_encode([
//             "success" => false,
//             "message" => $stmt->error
//         ]);
//     }
// }
