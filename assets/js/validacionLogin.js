/* ---------------------- EXPRESIONES REGULARES ---------------------- */
const expresionValidarNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const expresionValidarNumero = /^\d{4,15}$/;
const expresionValidarCuenta = /^\d{11}$/;
const expresionValidarCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

/* ---------------------- INICIAR SESION ---------------------- */
const usuario = document.querySelector("#usuario");
const contrasena = document.querySelector("#contraseña");
const iniciarSesion = document.querySelector("#iniciarSesion");
const formulario = document.querySelector("#formLoguin");
const paginaError = document.querySelector("#body_404");
const textoAviso = document.querySelector("#textoAviso");
const cargarInicioSesion = document.querySelector('#cargarInicioSesion');
const inputs = document.querySelectorAll('input');


const validarFormulario = (e) =>{
  switch(e.target.id){
    case "usuario":
      if(expresionValidarNombre.test(e.target.value) && usuario.value == "GrupoUribe"){
        usuario.classList.add('correcto');
        usuario.classList.remove("incorrecto");
      }else{
        usuario.classList.remove("correcto");
        usuario.classList.add("incorrecto");
      }
      break;
    case "contraseña":
      if(expresionValidarNumero.test(e.target.value) && contrasena.value == 654321){
        contrasena.classList.add('correcto');
        contrasena.classList.remove("incorrecto");
      }else{
        contrasena.classList.remove("correcto");
        contrasena.classList.add("incorrecto");
      }
      break;
  }
}

inputs.forEach((input) =>{
  input.addEventListener('blur', validarFormulario);
  input.addEventListener('keyup', validarFormulario);

});

let errores = 0;
iniciarSesion.addEventListener("click", (e) => {
  function error(){
    if (errores == 3) {
      formulario.classList.add("ocultar");
      paginaError.classList.remove("ocultar");
      textoAviso.classList.remove("ocultar");
      cargarInicioSesion.classList.remove("ocultar");
      document.querySelector('footer').classList.add('ocultar');
    }
  }
  
  if (usuario.value == "GrupoUribe" && contrasena.value == 654321) {
    // usuario.classList.add('correcto');
    // contrasena.classList.add('correcto');

  }else if(usuario.value == "" && contrasena.value == ""){
    usuario.classList.add('incorrecto');
    contrasena.classList.add('incorrecto');
    errores++;
    e.preventDefault()
    error()

  }else {
    errores++;
    e.preventDefault()
    error()
  };
});