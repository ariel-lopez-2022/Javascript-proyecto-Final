let carrito = [];
let contador=0;
const MiniTextiles =[
    {id:1 ,descripcion:"MiniTextiles", contenidoNeto:"125ml", fragancia:"Amour", img:"./images/miniTextiles/mini-amour.png", precio: 350, cantidad:2, color:"gradiente-rosa"},
    {id:2 ,descripcion:"MiniTextiles", contenidoNeto:"125ml", fragancia:"Green", img:"./images/miniTextiles/mini-green.png", precio: 350, cantidad:6, color:"gradiente-verde"},	 
    {id:3 ,descripcion:"MiniTextiles", contenidoNeto:"125ml", fragancia:"Lavanda", img:"./images/miniTextiles/mini-lavanda.png", precio: 350, cantidad:5, color:"gradiente-celeste"},
    {id:4 ,descripcion:"MiniTextiles", contenidoNeto:"125ml", fragancia:"Mery", img:"./images/miniTextiles/mini-mery.png", precio: 350, cantidad:6, color:"gradiente-rojo"},  
    {id:5 ,descripcion:"MiniTextiles", contenidoNeto:"125ml", fragancia:"One-Millon", img:"./images/miniTextiles/mini-onemillion.png", precio: 350, cantidad:9, color:"gradiente-amarillo"},
    {id:6 ,descripcion:"MiniTextiles", contenidoNeto:"125ml", fragancia:"Oriente", img:"./images/miniTextiles/mini-oriente.png", precio: 350, cantidad:7, color:"gradiente-bordo"},
];
const Textiles =[
    {id:1 ,descripcion:"Textiles", contenidoNeto:"250ml", fragancia:"Angel", img:"./images/textil/textil-angel.png", precio: 550, cantidad:10, color:"gradiente-celeste"},	 
    {id:2 ,descripcion:"Textiles", contenidoNeto:"250ml", fragancia:"Amour", img:"./images/textil/textil-amour.png", precio: 550, cantidad:10, color:"gradiente-rosa" },
    {id:3 ,descripcion:"Textiles", contenidoNeto:"250ml", fragancia:"Apolo", img:"./images/textil/textil-apolo.png", precio: 550, cantidad:10, color:"gradiente-celeste"},
    {id:4 ,descripcion:"Textiles", contenidoNeto:"250ml", fragancia:"Apple", img:"./images/textil/textil-apple.png", precio: 550, cantidad:10, color:"gradiente-rojo"},  
    {id:5 ,descripcion:"Textiles", contenidoNeto:"250ml", fragancia:"Cristobal", img:"./images/textil/textil-cristobal.png", precio: 550, cantidad:10, color:"gradiente-bordo"},
    {id:6 ,descripcion:"Textiles", contenidoNeto:"250ml", fragancia:"Flores-Blancas", img:"./images/textil/textil-flores-blancas.png", precio: 550, cantidad:10, color:"gradiente-amarillo"},
  ];
  const Aerosoles =[
    {id:1 ,descripcion:"Aerosoles", contenidoNeto:"185g", fragancia:"Bamboo", img:"./images/aerosol/lata-bamboo.png", precio: 750, cantidad:10, color:"gradiente-verde"},
    {id:2 ,descripcion:"Aerosoles", contenidoNeto:"185g", fragancia:"Bebe", img:"./images/aerosol/lata-bebe.png", precio: 750, cantidad:10, color:"gradiente-amarillo"},	 
    {id:3 ,descripcion:"Aerosoles", contenidoNeto:"185g", fragancia:"Green", img:"./images/aerosol/lata-green.png", precio: 750, cantidad:10, color:"gradiente-verde"},
    {id:4 ,descripcion:"Aerosoles", contenidoNeto:"185g", fragancia:"Limon", img:"./images/aerosol/lata-limon.png", precio: 750, cantidad:10, color:"gradiente-amarillo"},  
    {id:5 ,descripcion:"Aerosoles", contenidoNeto:"185g", fragancia:"Mandarina", img:"./images/aerosol/lata-mandarina.png", precio: 750, cantidad:10, color:"gradiente-rojo" },
    {id:6 ,descripcion:"Aerosoles", contenidoNeto:"185g", fragancia:"Paula", img:"./images/aerosol/lata-paula.png", precio: 750, cantidad:10, color:"gradiente-marron"},
  ];
  const Difusores =[ 
    {id:1 ,descripcion:"Difusores", contenidoNeto:"125ml", fragancia:"Apple", img:"./images/difusor/difusor-apple.png", precio: 1000, cantidad:10, color:"gradiente-rojo"},
    {id:2 ,descripcion:"Difusores", contenidoNeto:"125ml", fragancia:"Amour", img:"./images/difusor/difusor-amour.png", precio: 1000, cantidad:10, color:"gradiente-rosa"},	 
    {id:3 ,descripcion:"Difusores", contenidoNeto:"125ml", fragancia:"Bebe", img:"./images/difusor/difusor-bebe.png", precio: 1000, cantidad:10, color:"gradiente-amarillo"},
    {id:4 ,descripcion:"Difusores", contenidoNeto:"125ml", fragancia:"Cappucino", img:"./images/difusor/difusor-cappuccino.png", precio: 1000, cantidad:10, color:"gradiente-marron"},  
    {id:5 ,descripcion:"Difusores", contenidoNeto:"125ml", fragancia:"Flowers", img:"./images/difusor/difusor-flowers.png", precio: 1000, cantidad:10, color:"gradiente-rojo"},
    {id:6 ,descripcion:"Difusores", contenidoNeto:"125ml", fragancia:"Bamboo", img:"./images/difusor/difusor-bamboo.png", precio: 1000, cantidad:10, color:"gradiente-verde"},
  ];

function guardarProductosLS(array,nombre){
    localStorage.setItem(nombre,JSON.stringify(array))|| [];
};

function guardarCarritoLS(carrito){
  localStorage.setItem("carrito",JSON.stringify(carrito))|| [];
};

function obtenerProductosLS(array){
  return JSON.parse(localStorage.getItem(array)) ;
}

function obtenercarritoLS(){
  return JSON.parse(localStorage.getItem("carrito"))|| [] ;
  }


guardarProductosLS(MiniTextiles,"MiniTextiles");
guardarProductosLS(Textiles,"Textiles");
guardarProductosLS(Aerosoles,"Aerosoles");
guardarProductosLS(Difusores,"Difusores");


