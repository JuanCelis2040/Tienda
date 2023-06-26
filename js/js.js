let carrito = [];

function agregarAlCarrito(nombreProducto) {
    carrito.push(nombreProducto);
    actualizarCarrito();        
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
    
}

function  actualizarCarrito() {
    let listaCarrito = document.getElementById("items");
    let contador = document.getElementById("contador")


    listaCarrito.innerHTML = "";

    for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
        let item = document.createElement("li");
        item.textContent = producto;
        listaCarrito.appendChild(item);    
    }

    contador.textContent = carrito.length;






let productoSeparados = "";



for (let i= 0; i < carrito.length; i++) {
    productoSeparados += carrito[i];
    if(i != carrito.length - 1){
        productoSeparados += ", ";
    }   
}

listaCarrito.textContent = productoSeparados;

}
function comprar() {

    carrito = [];
    actualizarCarrito();
    
}

function eliminar() {
    carrito = [];
    eliminarDelCarrito();
    
}