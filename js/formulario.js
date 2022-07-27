
function formulario(){
     document.getElementById("botones").innerHTML="";
     let eliminar= document.querySelectorAll(".eliminar");
     eliminar.forEach((elemento)=>{
      elemento.innerHTML ="";
      
     })
    let contenido = document.getElementById("seccion_formulario");
    contenido.innerHTML = `
    <form action="" class="formulario row g-0" id="formulario">
    <h5 class="text-center">Formulario</h5>
    <!-- Grupo: Nombre y Apellido-->
    <div class="formulario__grupo col-12 col-md-6" id="grupo__nombre">
      <label for="nombre" class="formulario__label">Nombre y Apellido</label>
      <div class="formulario__grupo-input">
        <input type="text" class="formulario__input" name="nombre" id="nombre">
        <i class="formulario__validacion-estado fas fa-times-circle"></i>
      </div>
      <p class="formulario__input-error">El nombre tiene que ser de 4 a 40 dígitos y solo puede letras</p>
    </div>
   
    <!-- Grupo: domicilio -->
    <div class="formulario__grupo col-12 col-md-6 " id="grupo__domicilio">
      <label for="Apellido" class="formulario__label">Domicilio</label>
      <div class="formulario__grupo-input">
        <input type="text" class="formulario__input" name="domicilio" id="domicilio">
        <i class="formulario__validacion-estado fas fa-times-circle"></i>
      </div>
      <p class="formulario__input-error">El Domicilio tiene que ser de 4 a 20 dígitos y solo puede contener numeros, letras.</p>
    </div>
     <!-- Grupo: Teléfono -->
			<div class="formulario__grupo col-12 col-md-6" id="grupo__telefono">
				<label for="telefono" class="formulario__label">Teléfono</label>
				<div class="formulario__grupo-input">
					<input type="text" class="formulario__input " name="telefono" id="telefono" >
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">El telefono solo puede contener numeros, minimo 7 y el maximo son 14 numeros.</p>
			</div>
      <!-- Grupo: Correo Electronico -->
			<div class="formulario__grupo col-12 col-md-6" id="grupo__correo">
				<label for="correo" class="formulario__label">Correo</label>
				<div class="formulario__grupo-input">
					<input type="email" class="formulario__input" name="correo" id="correo" >
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>
			</div>
      <div class="formulario__mensaje container p-2 " id="formulario__mensaje">
          <p class="text-center"><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Rellenar el formulario </p>
      </div>
      <div class="formulario__grupo formulario__grupo-btn-enviar ">
				<button type="submit" class="formulario__btn">Enviar</button>
        <button type="button" class="formulario__btn" id ="cancelar">Cancelar</button>
			</div>
   </form>`
   validar();
}

function eliminaFromulario(){
  document.getElementById("formulario").innerHTML="";
  dibujarCarrito();
}



const validarFormulario = (e)=> {
  switch (e.target.name) {
     case "nombre":
       validarCampo(expreciones.nombre, e.target, "nombre");
     break;
     
     case "domicilio":
      validarCampo(expreciones.domicilio, e.target, "domicilio");
     break;
     
     case "telefono":
      validarCampo(expreciones.telefono, e.target, "telefono");
     break;
     
      case "correo":
        validarCampo(expreciones.correo, e.target, "correo");
      break;

  };
}

const validarCampo = (exprecion, input, campo)=>{
  if(exprecion.test(input.value)){
    document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
    document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
    document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
    document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
    campos[campo] = true;
  } else{
    document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
    document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
    document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
    document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
    campos[campo] = false;
  }
}

function mensajeFinal(nombre, correo){
 
  console.log (nombre)
  let contenido = document.getElementById("datos-carrito");
  contenido.innerHTML =` <div class="overlay container ">
  <span class="uat-loader row  justify-content-center ">
          <span class="uat-loader-content col-3 text-center">
              <img src="./images/amalu.png" width="100" id="cambioImg" >  
            </span>
            <span class="mensaje text-center" id="mensajeOk">Procesando su petición...</span>
      </span>
   </div>`
   setTimeout(() => {
    let img = document.getElementById("cambioImg");
    let mensaje = document.getElementById("mensajeOk");
    mensaje.innerHTML = "Proeceso Exitoso...";
    img.src = "./images/check.png"
    localStorage.removeItem("carrito");
    botonCarrito();
    setTimeout(() => {
      contenido.innerHTML=
    `<div class="container pt-3 d-flex justify-content-center">
       <div class="alert row " role="alert">
       <p class="text-center">Gracias!! ${nombre} por su compra , se envio un email a ${correo} con los detalles de su compra,</p>
       <a class="text-center" href="index.html">Volver a Inicio</a>
       </div>
     </div>`
    },2000);
   }, 3000);
  
  
};

function validar() {
  const formulario = document.getElementById('formulario');
  const inputs = document.querySelectorAll('#formulario input');
  const cancelar = document.getElementById('cancelar');
  cancelar.addEventListener("click", ()=>{eliminaFromulario()}); 
  formulario.addEventListener("submit", (e)=> {
    e.preventDefault();
    if (campos.nombre && campos.domicilio && campos.telefono && campos.correo ){
      document.getElementById("formulario__mensaje").classList.remove("formulario__mensaje-activo");
      document.querySelectorAll(".formulario__grupo-correcto").forEach((icono)=> {
      icono.classList.remove("formulario__grupo-correcto");
       
      })
      mensajeFinal(nombre.value.toLowerCase(),correo.value);
      formulario.reset();
    } else{
      document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo");
    }

  });
  inputs.forEach((input) =>{
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
      
    })
}


  


