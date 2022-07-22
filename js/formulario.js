function formulario(){
    let contenido = document.getElementById("formulario");
    contenido.innerHTML = `
    
    <h5 class="text-center">Formulario</h5>
    <div class="row g-3 mt-3">
      <div class="col-6 col-md-3">
        <input type="text" class="form-control" placeholder="Nombre" id ="validationCustom01"aria-label="Nombre" required>
        <div class="valid-feedback">Campo OK!!!</div>
        <div class="invalid-feedback">Ingresar Nombre</div>
      </div>
      <div class="col-6 col-md-3">
        <input type="text" class="form-control" placeholder="Apellido" id ="validationCustom02"aria-label="apellido" required>
        <div class="valid-feedback">Campo OK!!!</div>
        <div class="invalid-feedback">Ingresar Apellido</div>
      </div>
        <div class="col-6 col-md-3">
          <input type="number" class="form-control" placeholder="DNI" id ="validationCustom03"aria-label="dni" required>
          <div class="valid-feedback">Campo OK!!!</div>
          <div class="invalid-feedback">Ingresar Dni</div>
      </div>
       <div class="col-6 col-md-3">
        <input type="email" class="form-control" placeholder="@" id ="validationCustom04"aria-label="email" required>
        <div class="valid-feedback">Campo OK!!!</div>
        <div class="invalid-feedback">Ingresar Email</div>
      </div>
    </div>   
    <div class="row g-3 mt-2">
      <div class="col-12 col-md-4">
        <input type="text" class="form-control" placeholder="Domicilio" id ="validationCustom05"aria-label="Domicilio" required>
          <div class="valid-feedback">Campo OK!!!</div>
          <div class="invalid-feedback">Ingresar Domicilio</div>
      </div>
      <div class="col-6 col-md-2">
        <input type="text" class="form-control" placeholder="Provincia" id ="validationCustom06"aria-label="provincia" required>
       <div class="valid-feedback">Campo OK!!!</div>
        <div class="invalid-feedback">Ingresar Provincia</div>
      </div>
        <div class="col-6 col-md-2">
          <input type="text" class="form-control" placeholder="Localidad" id ="validationCustom07"aria-label="localidad" required>
       <div class="valid-feedback">Campo OK!!!</div>
        <div class="invalid-feedback">Ingresar Localidad</div>
      </div>
       <div class="col-6 col-md-2">
        <input type="number" class="form-control" placeholder="CP." id ="validationCustom08"aria-label="cp" required>
      <div class="valid-feedback">Campo OK!!!</div>
        <div class="invalid-feedback">Ingresar C.P.</div>
     </div>
     <div class="col-6 col-md-2">
      <input type="number" class="form-control" placeholder="Telefono" id ="validationCustom09"aria-label="telefono" required>
      <div class="valid-feedback">Campo OK!!!</div>
        <div class="invalid-feedback">Ingresar Telefono</div>
     </div>
     <div class="col-12">
      <textarea class="form-control" placeholder="Su Comentrario aqui!!!" id="floatingTextarea"  alt="ingrese su comentario"></textarea>
     </div>
   </div>   
     <div class="botones-formulario d-flex justify-content-around">
       <button type="submit" class="card-btn-1" id="Enviar" ">Enviar</button>
       <button type="button" class="card-btn-1" id="Limpiar" onclick="limpiarFormulario()">Limpiar</button>
     </div>
   </div> `
}
function limpiarFormulario(){
  let formulario = document.getElementById("formulario");
  formulario.reset();
}
// funcion de boostrap 
(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
})()




function limpiarFormulario(){
  let formulario = document.getElementById("formulario");
  formulario.reset();
    console.log("limpiando");
}