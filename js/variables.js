const expreciones = {
  domicilio: /^[a-zA-Z0-9\s]{4,20}$/, // Letras, numeros 
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
const campos = {
  nombre:false,
  domicilio:false,
  telefono:false,
  correo:false
}

let carrito = [];
let contador=0;

function guardarCarritoLS(carrito){
  localStorage.setItem("carrito",JSON.stringify(carrito));
};

function obtenercarritoLS(){
  return JSON.parse(localStorage.getItem("carrito")) || [] ;
}
