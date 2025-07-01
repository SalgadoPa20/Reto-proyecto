
// Inicialización de categorías en localStorage
categorias = {
    "101" : { codigo: "101", nombre: "Ropa Femenina", descripcion: "Ropa para Dama de la colección Verano 2025: vestidos, blusas, pantalones, enterizos, conjuntos y vestidos de baño", imagen: "images/women-02.jpg" },
    "102" : { codigo: "102", nombre: "Ropa Masculina", descripcion: "Ropa para Hombres la colección Verano 2025: camisas, pantalones, chaquetas, jeans", imagen: "images/men-02.jpg"  },
    "103" : { codigo: "103", nombre: "Ropa Para Niños", descripcion: "Ropa para Niños la colección Verano 2025: vestidos, blusas, camisas, pantalones, enterizos,", imagen: "images/baner-right-image-03.jpg"  },
    "104" : { codigo: "104", nombre: "Accesorios", descripcion: "Accesorios para toda ocasion de la colección Verano 2025: bolsos, carteras, bisuteria, correas, gafas de sol y billeteras,", imagen: "images/baner-right-image-04.jpg"  },
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
    "1001" : { codigo: "1001", nombre: "Vestido Largo tira con cadena", categoria: "101", imagen: "images/vestido-azul-1001.jpg", precio: 299.175, calificacion: 5,
              descripcion:["Vestido largo de color azul con un diseño moderno y fresco para el verano o la playa"]},
    "1002" : { codigo: "1002", nombre: "Blusa Strapless", categoria: "101", imagen: "images/blusa-dorada1002.jpg", precio: 119.925, calificacion: 4,
              descripcion:["Blusa strapless con escote en V de color plateado con un estilo elegante para salir de fiesta"]},
    "1003" : { codigo: "1003", nombre: "Camisa Manga corta con estampado", categoria: "102", imagen: "images/camisa-estampado.jpg", precio: 179.925, calificacion: 4,
              descripcion:["Camisa para caballero de estilo moderno y fresco perfecto para el verano"]},
    "1004" : { codigo: "1004", nombre: "Conjunto Camisa manga sisa con falda larga", categoria: "103", imagen: "images/conjunto-nina1004.jpg", precio: 101.994, calificacion: 5,
              descripcion:["Hermoso conjunto para niña de color rojo con estampado para la princesa de la casa"]},
    "1005" : { codigo: "1005", nombre: "Bolso Manos libre nylon", categoria: "104", imagen: "images/bolso1005.jpg", precio: 179.925, calificacion: 4,
              descripcion:["Lindo bolso color dorado muy practico para cada ocasion por su diseño delicado y casual"]},
    "1006" : { codigo: "1006", nombre: "Gafas Marco Metalico", categoria: "104", imagen: "images/gafas-negras1006.jpg", precio: 67.425, calificacion: 5,
              descripcion:["Elegantes gafas de color negro con lente Degrade, para estos dias soleados del verano 2025"]},
    "1007" : { codigo: "1007", nombre: "Buzo para niño abierto con capucha", categoria: "103", imagen: "images/Buzo-nino1007.jpg", precio: 139.995, calificacion: 5,
              descripcion:["Saco para niño de estilo universitario con textura muy suave para un perfecto balance entre moda y comodidad"]},
    "1008" : { codigo: "1008", nombre: "camisa para niño con manga larga roll up", categoria: "103", imagen: "images/camisa-nino1008.jpg", precio: 129.990, calificacion: 5,
              descripcion:["Camisa para niño color verde de cuadros, con un toque de elegancia y estilo"]},
    "1009" : { codigo: "1009", nombre: "Vestido midi para niña", categoria: "103", imagen: "images/vestido-nina.jpg", precio: 129.990, calificacion: 4,
             descripcion:["Vestido color claro con estampado y cargadeas ajustables, comodo y fresco para los dias soleados del verano 2025 "]},
    "1010" : { codigo: "1010", nombre: "Blazer Tejido Plano", categoria: "102", imagen: "images/Blazer-hombre1010.jpg", precio: 344.925, calificacion: 5,
             descripcion:["Elegante blazer tejido color azul comodo y moderno para ocasiones importantes"]},
    "1011" : { codigo: "1011", nombre: "Pantalon Culotte", categoria: "101", imagen: "images/pantalon.culotte-1011.jpg", precio: 149.175, calificacion: 5,
             descripcion:["Pantalon culotte estampado para mujer, hermoso, comodo y fresco. Perfecto para este verano 2025"]},
    "1012" : { codigo: "1012", nombre: "Vestido de baño", categoria: "101", imagen: "images/vestido-1012.jpg", precio: 189.955, calificacion: 5,
             descripcion:["Hermoso vestido de baño con un mezcla preciosa de colores entre naranja y rosa, muy femenino para lucir una figura perfecta en este verano 2025"]},
    "1013" : { codigo: "1013", nombre: "Botin Western", categoria: "104", imagen: "images/botin-1013.jpg", precio: 179.955, calificacion: 4,
             descripcion:["Botin Western con Hotfix color negro."]},
    "1014" : { codigo: "1014", nombre: "Plataforma Blanca", categoria: "104", imagen: "images/plataforma-1014.jpg", precio: 181.935, calificacion: 4,
             descripcion:["Plataforma anudada tipo lazo con cordon, color claro."]},
    "1015" : { codigo: "1015", nombre: "Jean color medio oscuro", categoria: "103", imagen: "images/jean-nina-1015.jpg", precio: 179.925, calificacion: 5,
             descripcion:["Hermoso jean oscuro para niñas con un diseño relajado, moderno y fresco"]},
    "1016" : { codigo: "1016", nombre: "Jogger arena", categoria: "103", imagen: "images/jogger-nina.jpg", precio: 159.925, calificacion: 4,
             descripcion:["Jogger color arena tiro alto para niñas con un diseño bonito y comodo"]},
    "1017" : { codigo: "1017", nombre: "Bermuda en drill", categoria: "102", imagen: "images/bermuda-hombre-1017.jpg", precio: 99.925, calificacion: 4,
             descripcion:["Bermuda en dril unicolor ajustada con tiro bajo y bolsillos para hombres"]},
    "1018" : { codigo: "1018", nombre: "Jean Slim azul oscuro", categoria: "102", imagen: "images/jean-hombre-1018.jpg", precio: 191.925, calificacion: 4,
             descripcion:["Jean slim con desgastes de color tiro bajo con estilo moderno para los hombres jovenes"]},
    "1019" : { codigo: "1019", nombre: "Pantaloneta de baño", categoria: "103", imagen: "images/pantaloneta-nino-1019.jpg", precio: 115.925, calificacion: 4,
             descripcion:["Pantaloneta de baño para niño estampada, con un estilo moderno perfecto para los dias de playa y piscina"]},
    "1020" : { codigo: "1020", nombre: "Collar Sol y Luna", categoria: "104", imagen: "images/collar-1020.jpg", precio: 120.925, calificacion: 5,
             descripcion:["Hermoso collar del sol y la luna, para las chicas mas romanticas con diseño lindo y elegante de material de plata con capas de cubrimiento de oro "]},
};

localStorage.setItem("productos", JSON.stringify(productos));

