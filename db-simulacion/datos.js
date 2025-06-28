
// Inicialización de categorías en localStorage
categorias = {
    "101" : { nombre: "Ropa Femenina", descripcion: "Ropa para Dama de ultima colección: vestidos, blusas, pantalones, enterizos y conjuntos, vestidos de bano", imagen: "images/women-02.jpg" },
    "102" : { nombre: "Ropa Masculina", descripcion: "Ropa para Hombres de ultima colección: camisas, pantalones, chaquetas, jeans", imagen: "images/men-02.jpg"  },
    "103" : { nombre: "Ropa Para Niños", descripcion: "Ropa para Niños de ultima colección: vestidos, blusas, camisas, pantalones, enterizos,", imagen: "images/baner-right-image-03.jpg"  },
    "104" : { nombre: "Accesorios", descripcion: "Accesorios para toda ocasion de la ultima colección: bolsos y carteras, bisuteria, correas, gafas de sol, billeteras,", imagen: "images/baner-right-image-04.jpg"  },
};

localStorage.setItem("categorias", JSON.stringify(categorias));

// Inicialización de banners en localStorage
banners = {
    "101" : { codigo: "101", titulo: "Ropa para Mujer", 
              descripcion: "Nuestra colección para Dama combina estilo, elegancia y comodidad para cada ocasión. Desde looks casuales hasta outfits sofisticados, tenemos todo lo que necesitas para expresar tu esencia.", 
              imagen: "images/women-03.jpg" },
    "102" : { codigo: "102", titulo: "Ropa para Hombre", 
              descripcion: "Estilo que impone. Nuestra colección para Caballeros estan diseñadas para destacar en cualquier ocasión. Ya sea para el trabajo, una salida casual o una ocasión especial, nuestras prendas reunen calidad, actitud y buen gusto.", 
              imagen: "images/men-03.jpg" },
    "103" : { codigo: "103", titulo: "Ropa para Niños", subtitulo: "", 
              descripcion: "Nuestra ropa infantil está diseñada para acompañar a los niños en cada aventura, combinando tejidos suaves, diseños alegres y libertad de movimiento..¡Moda pensada para jugar, explorar y brillar!", 
              imagen: "images/kid-03.jpg" },
};

localStorage.setItem("banners", JSON.stringify(banners));

//Inicialización de los productos o servicios en localstorage
productos = {
    "1001" : { codigo: "1001", nombre: "Vestido Largo tira con cadena", categoria: "101", imagen: "images/vestido-azul-1001.jpg", precio: 299.175, calificacion: 4,
              descripcion:["Vestido largo de color azul con un diseno moderno y fresco para el verano o la playa"]},
    "1002" : { codigo: "1002", nombre: "Blusa Strapless con escote en V", categoria: "101", imagen: "images/blusa-dorada1002.jpg", precio: 119.925, calificacion: 4,
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

