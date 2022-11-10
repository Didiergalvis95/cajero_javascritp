/* ---------------------- INICIAR SESION ---------------------- */
const usuario = document.getElementById("usuario");
const contrasena = document.getElementById("contraseña");
const iniciarSesion = document.getElementById("iniciarSesion");
const formulario = document.getElementById("formLoguin");
const paginaError = document.getElementById("body_404");
const textoAviso = document.getElementById("textoAviso");
const cargarInicioSesion = document.querySelector('#cargarInicioSesion');


let errores = 0;
iniciarSesion.addEventListener("click", (e) => {
  if (usuario.value == "escrotoenmoto" && contrasena.value === "654321") {
    usuario.classList.add("correcto");
    usuario.classList.remove("incorrecto");
    contrasena.classList.add("correcto");
    contrasena.classList.remove("incorrecto");
    console.log("el campo contraseña es obligatorio");
  } else {
    errores++;
    usuario.classList.add("incorrecto");
    contrasena.classList.add("incorrecto");
    e.preventDefault();
    if (errores == 3) {
      formulario.classList.add("ocultar");
      paginaError.classList.remove("ocultar");
      textoAviso.classList.remove("ocultar");
      cargarInicioSesion.classList.remove("ocultar");
    }
  }
});
