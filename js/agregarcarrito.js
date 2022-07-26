function botonCarrito() {
  let productos = obtenercarritoLS();
  let contenido = `<button type="button" class="btn position-relative">
  <a href="carrito.html"><img src=" ./images/carrito.png" width="45"></a>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0
      <span class="visually-hidden">unread messages</span>
    </span>
    </button>`;
    let cantidad =0;
    if(productos.length > 0){
       productos.forEach((elemento)=>{cantidad+= elemento.cantidad});
        contenido = `<button type="button" class="btn position-relative onclick =">
        <a href="carrito.html"><img src=" ./images/carrito.png" width="45"></a>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" id="">${cantidad}
          <span class="visually-hidden">unread messages</span>
        </span> 
        </button>`;
    }   
    document.getElementById("carritodeCompra").innerHTML =contenido; 
}

function agregarCarrito(id, dato){
  let productoCarrito = obtenercarritoLS();
  console.log(productoCarrito);
  fetch(`./js/${dato}.json`)
  .then ((response)=> response.json())
  .then((datos)=>{
     let producto = datos.find(elemento => elemento.id == id);
     producto.cantidad = 1;
     let encontrado =productoCarrito.findIndex(elemento => elemento.id == producto.id && elemento.descripcion == dato);
        if (encontrado === -1){
          productoCarrito.push(producto);
          guardarCarritoLS(productoCarrito);
          botonCarrito()
        }else {
          productoCarrito[encontrado].cantidad++;
          guardarCarritoLS(productoCarrito);
          botonCarrito()
        }
   
    });
 
}        

botonCarrito();

