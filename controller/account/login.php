<?php

session_start();
require_once "../../model/conection/conectDb.php";

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode([
        "success" => false,
        "message" => "Método no permitido"
    ]);
    exit;
}

// Validación básica
if (empty($_POST['correo']) || empty($_POST['password'])) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Correo y contraseña son obligatorios"
    ]);
    exit;
}

$correo   = trim($_POST['correo']);
$password = $_POST['password'];

// Buscar usuario
$sql = "SELECT 
            id_cliente,
            Nombre_completo,
            Correo_electronico,
            Usuario,
            Contrasena
        FROM Cliente
        WHERE Correo_electronico = ?
        LIMIT 1";

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

$stmt->bind_param("s", $correo);
$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows === 0) {
    http_response_code(401);
    echo json_encode([
        "success" => false,
        "message" => "Credenciales inválidas"
    ]);
    exit;
}

$user = $result->fetch_assoc();

// Verificar contraseña
if (!password_verify($password, $user['Contrasena'])) {
    http_response_code(401);
    echo json_encode([
        "success" => false,
        "message" => "Credenciales inválidas"
    ]);
    exit;
}

// ✅ LOGIN OK → SESIÓN
$_SESSION['user'] = [
    'id'      => $user['id_cliente'],
    'nombre'  => $user['Nombre_completo'],
    'correo'  => $user['Correo_electronico'],
    'usuario' => $user['Usuario'],
];

echo json_encode([
    "success" => true,
    "message" => "Login exitoso"
]);
