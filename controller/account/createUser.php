<?php


require_once "../../model/conection/conectDb.php";

header('Content-Type: application/json');

// 🔒 SOLO POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode([
        "success" => false,
        "message" => "Método no permitido"
    ]);
    exit;
}

/**
 * 1️⃣ VALIDACIÓN BÁSICA
 */
$required = [
    'nombre_completo',
    'correo',
    'telefono',
    'direccion',
    'usuario',
    'tipo_documento',
    'numero_documento',
    'password'
];

foreach ($required as $field) {
    if (empty($_POST[$field])) {
        http_response_code(400);
        echo json_encode([
            "success" => false,
            "message" => "Campo requerido: $field"
        ]);
        exit;
    }
}


/**
 * 2️⃣ ASIGNAR VARIABLES
 */
$nombre     = trim($_POST['nombre_completo']);
$correo     = trim($_POST['correo']);
$telefono   = trim($_POST['telefono']);
$direccion  = trim($_POST['direccion']);
$usuario    = trim($_POST['usuario']);
$tipo_doc   = trim($_POST['tipo_documento']);
$num_doc    = trim($_POST['numero_documento']);
$contrasena = password_hash($_POST['password'], PASSWORD_BCRYPT);

/**
 * 3️⃣ INSERT
 */
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
    http_response_code(201);
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
