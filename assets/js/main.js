const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("contraseña");
const iniciarSesion = document.getElementById("iniciarSesion");
const formulario = document.getElementById("formLoguin");
const paginaError = document.getElementById("body_404");
const textoAviso = document.getElementById("textoAviso");

let errores = 0;
iniciarSesion.addEventListener("click", (e) => {
  if (usuario.value == "escrotoenmoto" && contraseña.value === "654321") {
    usuario.classList.add("correcto");
    usuario.classList.remove("incorrecto");
    contraseña.classList.add("correcto");
    contraseña.classList.remove("incorrecto");
    console.log("el campo contraseña es obligatorio");
  } else {
    errores++;
    usuario.classList.add("incorrecto");
    contraseña.classList.add("incorrecto");
    e.preventDefault();
    if (errores == 3) {
      formulario.classList.add("ocultar");
      paginaError.classList.remove("ocultar");
      textoAviso.classList.remove("ocultar");
    }
  }
});

