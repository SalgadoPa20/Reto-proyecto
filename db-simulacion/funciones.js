
// Obtener un objeto de tipo Map almacenado en localStorage
function obtenerMap(nombre) {
        const str = localStorage.getItem(nombre);
        if (!str) {
            throw new Error(`No se encontró el objeto con el nombre: ${nombre}`);
        }
        const json = JSON.parse(str);
        const map = new Map(Object.entries(json));
        return map;
}

// Devolver la lista de categorias almacenadas en el localStorage
function  obtenerCategorias() {
    const map = obtenerMap("categorias");
    return map.values();
}

// Devolver la lista del banners almacenadas en el localStorage
function  obtenerBanners() {
    return Array.from(obtenerMap("banners").values());
}

// Devolver la lista de productos almacenados en el localStorage
function  obtenerProductos(filtro = "todos", pagina = 1) {

    const map = obtenerMap("productos");
    const todos = map.values();
    let filtrados = [];
    if(filtro == null || filtro === "todos") {
        filtrados = todos;
    } else {
        filtrados = todos.filter(producto => producto.categoria === filtro);
    }
    const inicial = (pagina - 1) * 6;
    const final = pagina * 6;
    if(final > filtrados.length) {
        final = filtrados.length;
    }
    console.log(`Mostrando cursos de la página ${pagina} (${inicial} a ${final})`);
    return Array.from(filtrados).slice(inicial, final);
}

// funcion de contrar productos
function contarProductos(filtro = "todos") {
    const map = obtenerMap("productos");
    if (filtro == null || filtro === "todos") {
        return map.size;
    } else {
        return Array.from(map.values()).filter(producto => producto.categoria === filtro).length;
    }
}



 // Obtener el carrito de compras almacenado en sessionStorage
function obtenerCarrito() {
    const str = sessionStorage.getItem('carrito');
    const carrito = str ? JSON.parse(str) : [];
    return carrito;
}

// Mostrar los productos añadidos al carrito de compras
function mostrarCarrito() {
        const carrito = obtenerCarrito();
        const carritoContainer = document.getElementById('carrito');
        carritoContainer.innerHTML = "";
        let precio = 0;
 
        carrito.forEach((producto,index) => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between mb-2';
            li.innerHTML = `
                <div class="d-flex justify-content-between align-items-center ">
                    <div class="row">
                        <h6 class="my-0">${producto.nombre}</h6>
                        <small>${producto.precio}</small>
                    </div>
                    <a class="btn btn-danger text-decoration-none text-white" onclick="eliminarProducto(${index})" >
                        <i class="fa fa-times"></i>
                    </a>
                </div>`;
            carritoContainer.appendChild(li);
            precio += producto.precio;
        });
        const totalElement = document.getElementById('total');
        totalElement.textContent = precio.toFixed(2);

        document.getElementById('contadorCarrito').textContent = carrito.length;
}

// Agregar un producto al carrito de compras
function agregarProducto(producto, actualizarCarrito = true) {
    let carrito = obtenerCarrito();
    carrito.push(producto);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    sessionStorage.setItem("contadorCarrito", carrito.length);

    if(actualizarCarrito === true){
    mostrarCarrito();
    }
}
 
// Eliminar un producto del carrito de compras
function eliminarProducto(posicion) {
    let carrito = obtenerCarrito();
    carrito.splice(posicion, 1);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    sessionStorage.setItem("contadorCarrito", carrito.length);

    mostrarCarrito();
}
 
// Vaciar el carrito de compras
function vaciarCarrito() {
    let carrito = [];
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

//Función que obtiene la información de un producto o servicio específico por código
function buscarProducto(codigo) {
    const map = obtenerMap("productos");
    const producto = map.get(codigo);
    if (!producto) {
        throw new Error(`No se encontró el producto con el código: ${codigo}`);
    }
    return producto;
}