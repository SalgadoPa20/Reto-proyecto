
// Inicialización de categorías en localStorage
categorias = {
    "101" : { nombre: "Ropa Femenina", descrIpcion: "Ropa para Dama de ultima colección: vestidos, blusas, pantalones, enterizos y conjuntos, vestidos de bano", imagen: "images/women-02.jpg" },
    "102" : { nombre: "Ropa Masculina", descrpcion: "Ropa para Hombres de ultima colección: camisas, pantalones, chaquetas, jeans", imagen: "images/men-02.jpg"  },
    "103" : { nombre: "Ropa para Niños", descrpcion: "Ropa para Niños de ultima colección: vestidos, blusas, camisas, pantalones, enterizos,", imagen: "images/banner-right-image-03.jpg"  },
    "104" : { nombre: "Accesorios", descrpcion: "Accesorios para toda ocasion de la ultima colección: bolsos y carteras, bisuteria, correas, gafas de sol, billeteras,", imagen: "images/banner-right-image-04.jpg"  },
};

localStorage.setItem("categorias", JSON.stringify(categorias));

//Inicialización de los productos o servicios en localstorage
productos = {
    "1001" : { codigo: "1001", nombre: "Vestido Largo tira con cadena", categoria: "101", imagen: "images/vestido-azul-1001.jpg", precio: 299.175, calificacion: 5,
              descripcion:["Vestido largo de color azul con un diseno moderno y fresco para el verano o la playa"]},
    "1002" : { codigo: "1002", nombre: "Blusa Strapless con escote en V", categoria: "101", imagen: "images/blusa-dorada1002.jpg", precio: 119.925, calificacion: 5,
              descripcion:["Blusa strapless de color plateado con un estilo elegante para salir de fiesta"]},
    "1003" : { codigo: "1003", nombre: "Camisa Manga corta con estampado", categoria: "102", imagen: "images/camisa-estampado.jpg", precio: 179.925},
    "1004" : { codigo: "1004", nombre: "Conjunto Camisa manga sisa con falda larga", categoria: "103", imagen: "images/conjunto-nina1004.jpg", precio: 101.994},
    "1005" : { codigo: "1005", nombre: "Bolso Manos libre nylon", categoria: "104", imagen: "images/bolso1005.jpg", precio: 179.925},
    "1006" : { codigo: "1006", nombre: "Gafas Marco Metalico Lente Degrade", categoria: "104", imagen: "images/gafas-negras1006.jpg", precio: 67.425},
    "1007" : { codigo: "1007", nombre: "Buzo para niño abierto con capucha", categoria: "103", imagen: "images/Buzo-nino1007.jpg", precio: 139.990},
    "1008" : { codigo: "1008", nombre: "camisa para niño con manga larga roll up", categoria: "103", imagen: "images/camisa-nino1008.jpg", precio: 129.990},
    "1009" : { codigo: "1009", nombre: "Vestido midi para niña con cargadeas ajustables", categoria: "103", imagen: "images/vestido-nina.jpg", precio: 129.990},
    "1010" : { codigo: "1010", nombre: "Blazer Tejido Plano", categoria: "102", imagen: "images/Blazer-hombre1010.jpg", precio: 344.925},
};

localStorage.setItem("productos", JSON.stringify(productos));

