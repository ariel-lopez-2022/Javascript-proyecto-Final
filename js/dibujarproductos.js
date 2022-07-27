function dibujarProductos(dato){
  fetch(`./json/${dato}.json`)
  .then ((response)=> response.json())
  .then((datos)=>{
   datos.forEach((elemento, indice)=>{
       if(indice == 0){
          const contenido = document.getElementById("productos");
          let card = document.createElement("div");
          card.className="col-12 col-md-6 col-xl-3 mb-2 d-flex justify-content-center" ;
          card.id= "columna-card";
          card.innerHTML = 
          `<div class="card-contenido">
            <div class="card-img ${elemento.color}" id="card-contenido-${contador}">
                <img src="${elemento.img}" id="imagenPrincipal-${contador}" width="200" alt="">
            </div>
            <div class="card-content" >
                <h2 class="card-titulo" id="titulo">${elemento.descripcion}</h2>
                <p class="card-contenido-neto" id="contenido-neto">Cont. Neto : ${elemento.contenidoNeto}</p>
              <div class="card-fragancias">
                <p class="nombre-fragancia" id="nombre-fragancia-${contador}">${elemento.fragancia}</p>
                <p id= "cantidad-fragancia-${contador}">Disponible ${elemento.cantidad}u.</p>
                <p class="precio-fragancia">$ ${elemento.precio}</p>
               </div>
               <ul class="conjunto-img-fragancias p-1" id="conjunto-fragancias-${contador}"></ul>
            <button class="card-btn ${elemento.color}"id="card-btn-${contador}" onclick= agregarCarrito(${elemento.id},"${elemento.descripcion}")  >Agregar</button>
            
          </div>
         </div>
        </div>`; 
        contenido.appendChild(card);
        }
  });
  let contenidoul = document.getElementById(`conjunto-fragancias-${contador}`);
  let lista="";
  datos.forEach((elemento,indice)=>{
     if (elemento.cantidad > 0){
        if (indice == 0){
          lista+= `<li class ="borde" id="fragancia" onclick = actualizoCard(${indice},"${elemento.descripcion}",${contador})>
          <img src=${elemento.img}  width="45" alt="${elemento.fragancia}"></li>`
        } else{
        lista+= `<li class =" " id="fragancia" onclick = actualizoCard(${indice},"${elemento.descripcion}",${contador})>
        <img src=${elemento.img}  width="45" alt="${elemento.fragancia}"></li>`
        }
     }
    });   
    contenidoul.innerHTML= lista;
    contador++;
  });  
}

function actualizoCard(indice1, dato, contador){
  fetch(`./json/${dato}.json`)
  .then ((response)=> response.json())
  .then((datos)=>{
  let nombreFragancia = document.getElementById(`nombre-fragancia-${contador}`);
  let cantidadFragancia = document.getElementById(`cantidad-fragancia-${contador}`);
  let colorImgPrincipal = document.getElementById(`card-contenido-${contador}`);
  let botonAgregar = document.getElementById(`card-btn-${contador}`);
  let imgPrincipal = document.getElementById(`imagenPrincipal-${contador}`);
  let datosLi = document.querySelectorAll(`#conjunto-fragancias-${contador} li`)
  datos.map((elemento,indice)=>{
   if (indice == indice1){
       nombreFragancia.innerHTML= elemento.fragancia;
       cantidadFragancia.innerHTML=` Disponible ${elemento.cantidad}u.`;
       colorImgPrincipal.className =`card-img ${elemento.color}` ;
       botonAgregar.className =`card-btn ${elemento.color}` ;
       imgPrincipal.src = elemento.img;
       botonAgregar.setAttribute("onclick", `agregarCarrito(${elemento.id},"${elemento.descripcion}")`);
         
   }
}); 
datosLi.forEach((i,indice)=>{
  (indice == indice1) ? (datosLi[indice].className = "borde"):(datosLi[indice].className = " ");
});
  });
}

function dibujar(){
dibujarProductos("MiniTextiles");
dibujarProductos("Textiles");
dibujarProductos("Aerosoles");
dibujarProductos("Difusores");
}

dibujar();


