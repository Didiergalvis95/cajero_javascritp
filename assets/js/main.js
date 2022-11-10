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
btnCerrarSesion.addEventListener('click',()=>{
    const confirmarSalir= document.createElement ('input')
    confirmarSalir.id='Salir'
    confirmarSalir.type='button'
    const nosalir=document.createElement('input')
    nosalir.id='noSalir'
    nosalir.type='button'
    
    const alertaCerrar=document.createElement ('h4')
    alertaCerrar.id='alertaCerrar'

    alertaCerrar.textContent='¿DESEA CERRAR SESION?'
    
    movimientos.classList.remove('mostrar')
    movimientos.classList.add('ocultar');
    mostrarSaldo.classList.add('ocultar');
    confirmacion.classList.remove('ocultar');
    
    confirmarSalir.value='SI'
    nosalir.value='NO'
    confirmarSalir.addEventListener('click',()=>{
        confirmacion.classList.add('ocultar');
        window.location='./login.html'
        
    })
    nosalir.addEventListener('click',()=>{
        movimientos.classList.remove('ocultar');
        confirmacion.classList.add('ocultar');
        confirmacion.innerHTML = ''
    })
    confirmacion.append(alertaCerrar, confirmarSalir,nosalir)
})})