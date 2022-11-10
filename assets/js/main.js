/* ---------------------- CONFIRMACION CERRAR SESION ---------------------- */
const btnCerrarSesion = document.querySelector('#cerrarSesion');
const salir=document.querySelector('#salir')
const confirmacion = document.querySelector('#confirmarCierreSesion')
const movimientos=document.querySelector('#movimientos')

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
         
});