function mensajeEliminar(id, descripcion){
  Swal.fire({
    title: '¿Está seguro?',
    text: "¡No podrás revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Eliminar'
  }).then((result) => {
    if (result.isConfirmed) {
      eliminaProducto(id, descripcion);
      Swal.fire(
        'Eliminado',
        'Su Producto fue eliminado.',
        'success'
      )
    }
  })
}
function mensajeVaciar(){
  Swal.fire({
    title: '¿Está seguro?',
    text: "¡No podrás revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Eliminar'
  }).then((result) => {
    if (result.isConfirmed) {
      vaciarCarrito();
      Swal.fire(
        'Eliminado',
        'Su Carrito fue eliminado.',
        'success'
      )
    }
  })
}

function dibujarCarrito(){
      let productoCarrito = obtenercarritoLS();
      let botones = document.getElementById("botones");
      botones.innerHTML =`<button type="button" class="card-btn-1" id="finalizar" onclick = "formulario()">Finalizar</button>
      <button type="button" class="card-btn-1" id="vaciar" onclick = "mensajeVaciar()">Vaciar</button>`
      
      if (productoCarrito.length == 0){
        let botones = document.getElementById("finalizar");
        let botones1 = document.getElementById("vaciar");
        let formulario = document.getElementById("formulario");
        formulario.remove();
        botones.remove();
        botones1.remove();
      } 
  let contenido = document.getElementById("contenido-carrito");
  let tabla = "";
  subTotal =0;
  total=0;
     productoCarrito.forEach((elemento)=>{
       subTotal = elemento.precio * elemento.cantidad ;  
       tabla+= `<tr class="text-center carrito-productos">
       <td scope="row" class="d-none d-md-block"><img src="${elemento.img}" width="30" class="img-fluid" alt="elimina"></th>
       <td>${elemento.descripcion}</td>
       <td>${elemento.fragancia}</td>
       <td>${elemento.cantidad}</td>
       <td class="d-none d-md-block">$ ${elemento.precio}</td>
       <td>$ ${subTotal}</td>
       <td><img src="./iconos/borrar.png" width="20" class="img-fluid" alt="elimina"onclick = mensajeEliminar(${elemento.id},"${elemento.descripcion}") ></td>
     </tr>`
    
       total += subTotal;
      });    
      contenido.innerHTML = tabla;
      document.getElementById("total").innerHTML ="$ "+total;
}

function vaciarCarrito(){
  localStorage.removeItem("carrito");
  dibujarCarrito();
  botonCarrito();
}

function eliminaProducto(id, descripcion){
  let productoCarrito = obtenercarritoLS();
  let posicionEliminar = productoCarrito.findIndex(x => x.id == id && x.descripcion == descripcion);
  productoCarrito[posicionEliminar].cantidad -=1;
  if (productoCarrito[posicionEliminar].cantidad == 0){
      productoCarrito.splice(posicionEliminar,1);
  }
  guardarCarritoLS(productoCarrito);
  dibujarCarrito();
  botonCarrito();
}
botonCarrito();
dibujarCarrito();
