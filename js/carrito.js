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
      dibujarCarrito();
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
      dibujarCarrito();
    }
    
  })
  
 

}function vaciarCarrito(){
  localStorage.removeItem("carrito");
  botonCarrito();
  dibujarCarrito();
  
  
}
function eliminaProducto(id, descripcion){
  let productoCarrito = obtenercarritoLS();
  let posicionEliminar = productoCarrito.findIndex(x => x.id == id && x.descripcion == descripcion);
  productoCarrito[posicionEliminar].cantidad -=1;
  if (productoCarrito[posicionEliminar].cantidad == 0){
      productoCarrito.splice(posicionEliminar,1);
  }
  guardarCarritoLS(productoCarrito);
  botonCarrito();
  dibujarCarrito();
  
}

function dibujarCarrito(){
      let productoCarrito = obtenercarritoLS();
      let botones = document.getElementById("botones");
      botones.innerHTML =`<button type="button" class="card-btn-1" id="finalizar" onclick = "formulario()">Finalizar</button>
      <button type="button" class="card-btn-1" id="vaciar" onclick = "mensajeVaciar()">Vaciar</button>`
      if (productoCarrito.length === 0){
        let botones = document.getElementById("finalizar");
        let botones1 = document.getElementById("vaciar");
        botones.remove();
        botones1.remove();
        carriroVacio(); 
      }
   
  let contenido = document.getElementById("contenido-carrito");
  let tabla = "";
  subTotal =0;
  total=0;
     productoCarrito.forEach((elemento)=>{
       subTotal = elemento.precio * elemento.cantidad ;  
       tabla+= `<tr class="text-center carrito-productos">
       <td scope="row" class="d-none d-md-block"><img src="${elemento.img}" width="60" class="img-fluid" alt="elimina"></th>
       <td>${elemento.descripcion}</td>
       <td>${elemento.fragancia}</td>
       <td>${elemento.cantidad}</td>
       <td class="d-none d-md-block">$ ${elemento.precio}</td>
       <td>$ ${subTotal}</td>
       <td class="eliminar"><img src="./iconos/borrar.png" width="30" class="img-fluid" alt="elimina"onclick = mensajeEliminar(${elemento.id},"${elemento.descripcion}") ></td>
     </tr>`
       total += subTotal;
      });    
      contenido.innerHTML = tabla;
     document.getElementById("total").innerHTML ="Total a Pagar $ "+total;
    }

    

    function carriroVacio(){
      Swal.fire({
        title: 'Carrito Vacio !!!',
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "index.html";
        }
      })
    }
  
 
dibujarCarrito();
