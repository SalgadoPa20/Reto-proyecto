<?php

$host = 'mysql'; // nombre del servicio en docker-compose
$user = getenv('MYSQL_USER') ?: 'app_user';
$pass = getenv('MYSQL_PASSWORD') ?: 'secret';
$db   = getenv('MYSQL_DATABASE') ?: 'reto';

$mysqli = new mysqli($host, $user, $pass, $db);

if ($mysqli->connect_errno) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Error de conexión a la base de datos",
        "error"   => $mysqli->connect_error
    ]);
    exit;
}

// Opcional pero recomendado
$mysqli->set_charset("utf8mb4");
