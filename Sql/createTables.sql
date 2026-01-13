CREATE TABLE Cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
   	Nombre_completo VARCHAR(150) NOT NULL,
    Correo_electronico VARCHAR(150) NOT NULL UNIQUE,
    Telefono VARCHAR(20) NOT NULL,
    Direccion VARCHAR(200) NOT NULL,
    Usuario VARCHAR(20) NOT NULL,
    Tipo_documento VARCHAR(20) NOT NULL,
    Numero_documento VARCHAR(20) NOT NULL,
    Contrasena VARCHAR(20) NOT NULL
);