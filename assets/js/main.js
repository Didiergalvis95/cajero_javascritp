/* ---------------------- EXPRESIONES REGULARES ---------------------- */
const expresionValidarNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const expresionValidarNumero = /^\d{4,15}$/;
const expresionValidarCuenta = /^\d{11}$/;
const expresionValidarCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;


/* ---------------------- CONFIRMACION CERRAR SESION ---------------------- */
const btnCerrarSesion = document.querySelector('#cerrarSesion');
const salir=document.querySelector('#salir');
const confirmacion = document.querySelector('#confirmarCierreSesion');
const movimientos=document.querySelector('#movimientos');

btnCerrarSesion.addEventListener('click',()=>{
    const confirmarSalir= document.createElement ('input');
    confirmarSalir.id='Salir';
    confirmarSalir.type='button';
    const nosalir=document.createElement('input');
    nosalir.id='noSalir';
    nosalir.type='button';

    const alertaCerrar=document.createElement ('h4');
    alertaCerrar.id='alertaCerrar';

    alertaCerrar.textContent='¿DESEA CERRAR SESION?';   
    confirmarSalir.value='SI'
    nosalir.value='NO'

    movimientos.classList.remove('mostrar');
    movimientos.classList.add('ocultar');
    mostrarSaldo.classList.add('ocultar');
    confirmacion.classList.remove('ocultar');
    document.querySelector('header').classList.add('ocultar');
    document.querySelector('footer').classList.add('ocultar');

    confirmarSalir.addEventListener('click',()=>{
        confirmacion.classList.add('ocultar');
        window.location='./login.html'
        
    })
    nosalir.addEventListener('click',()=>{
        document.querySelector('header').classList.remove('ocultar');
        document.querySelector('footer').classList.remove('ocultar');
        movimientos.classList.remove('ocultar');
        confirmacion.classList.add('ocultar');

        confirmacion.innerHTML = ''
    })
    confirmacion.append(alertaCerrar, confirmarSalir,nosalir);
});


/* ---------------------- BOTON REGRESAR ---------------------- */
const btnVolver = document.querySelector('#regresar');

btnVolver.addEventListener('click', ()=>{
    opcionRetirar.classList.add('ocultar');
    opcionTransferir.classList.add('ocultar');
    opcionConsignar.classList.add('ocultar');
    btnVolver.classList.add('ocultar');
    btnCerrarSesion.classList.remove('ocultar');
    movimientos.classList.remove('ocultar');
    movimientos.classList.remove('mostrar');
})

/* ---------------------- CONSULTAR SALDO ---------------------- */
const btnConsultar = document.querySelector("#consultar");

let saldo = 1000000;
const mostrarSaldo = document.querySelector('#mostrarSaldo');
const mostrarSaldoDato = document.querySelector('#mostrarSaldo__dato');

btnConsultar.addEventListener('click', ()=>{
    mostrarSaldo.classList.remove('ocultar');
    movimientos.classList.add('mostrar');
    
    mostrarSaldoDato.textContent =  saldo;
});
/* ---------------------- FIN CONSULTAR SALDO ---------------------- */


/* ---------------------- VALIDACION INPUTS ---------------------- */
const inputs = document.querySelectorAll('input');

const validarFormulario = (e) =>{
    switch (e.target.id){
        case "montoRetirar":
            if (expresionValidarNumero.test(e.target.value) ) {
                montoRetirar.classList.add('correcto');
                montoRetirar.classList.remove('incorrecto');
                document.querySelector('#btnRetirar').disabled = false;

            }else{
                montoRetirar.classList.add('incorrecto');
                montoRetirar.classList.remove('correcto');
                document.querySelector('#btnRetirar').disabled = true;

            }
                break;
        case "nombreTransferir":
    
            if(expresionValidarNombre.test(e.target.value)){
                nombreTransferir.classList.add('correcto');
                nombreTransferir.classList.remove('incorrecto');
                document.querySelector('#btnTransferir').disabled = false;

            }else{
                nombreTransferir.classList.add('incorrecto');
                document.querySelector('#btnTransferir').disabled = true; 

            }
            break;
        case "correoTransferir":
    
            if(expresionValidarCorreo.test(e.target.value)){
                correoTransferir.classList.add('correcto');
                correoTransferir.classList.remove('incorrecto');
                document.querySelector('#btnTransferir').disabled = false;

            }else{
                correoTransferir.classList.add('incorrecto');
                document.querySelector('#btnTransferir').disabled = true;

            }
            break;
        case "numeroCuentaTransferir":
    
            if(expresionValidarCuenta.test(e.target.value)){
                numeroCuentaTransferir.classList.add('correcto');
                numeroCuentaTransferir.classList.remove('incorrecto');
                document.querySelector('#btnTransferir').disabled = false;

            }else{
                numeroCuentaTransferir.classList.add('incorrecto');
                document.querySelector('#btnTransferir').disabled = true;

            }
            break;
        case "montoTransferir":
    
            if(expresionValidarNumero.test(e.target.value)){
                montoTransferir.classList.add('correcto');
                montoTransferir.classList.remove('incorrecto');
                document.querySelector('#btnTransferir').disabled = false;

            }else{
                montoTransferir.classList.add('incorrecto');
                document.querySelector('#btnTransferir').disabled = true;

            }
            break;
        case "montoConsignar":
            if (expresionValidarNumero.test(e.target.value)) {
                montoConsignar.classList.add('correcto');
                montoConsignar.classList.remove('incorrecto');
                document.querySelector('#btnConsignar').disabled = false;

            }else{
                montoConsignar.classList.add('incorrecto');
                montoConsignar.classList.remove('correcto');
                document.querySelector('#btnConsignar').disabled = true;

            }
                break;
    }

}
inputs.forEach((input)=>{
    input.addEventListener('blur', validarFormulario);
    input.addEventListener('keyup', validarFormulario);
});
/* ---------------------- FIN VALIDACION INPUTS ---------------------- */

let fecha = new Date();

/* ---------------------- OPCION RETIRAR ---------------------- */
const btnRetirar = document.querySelector("#retirar");
const opcionRetirar = document.querySelector('#opcionRetirar');

const btnRetirarCargar = document.querySelector('#btnRetirar');
const almacenarRetiro  = document.querySelector('#almacenarRetiro');
const btnCerrarAlmacenarRetiro = document.querySelector('#cerrarAlmacenarRetiro');


btnRetirar.addEventListener('click', ()=>{
    opcionRetirar.classList.remove('ocultar');
    movimientos.classList.add('ocultar');
    btnCerrarSesion.classList.add('ocultar');
    mostrarSaldo.classList.add('ocultar');
    btnVolver.classList.remove('ocultar');
});

/* ---------------------- ALMACENAR DATOS DE RETIRO ---------------------- */
btnRetirarCargar.addEventListener('click', (e)=>{
    document.querySelector('header').classList.add('ocultar');
    document.querySelector('footer').classList.add('ocultar');
    opcionRetirar.classList.add('ocultar');
    almacenarRetiro.classList.remove('ocultar');
    
    let montoRetirar = document.querySelector('#montoRetirar').value;
    
    cargarDatosRetirar(montoRetirar, fecha);
    saldo = (parseInt(montoRetirar)-saldo)*-1;
});

let datosRetirar = [];
const cargarDatosRetirar = (montoRetirar,fecha) =>{
    datosRetirar.push();
    document.querySelector('#tablaRetiro').innerHTML +=
    `<tbody>
        <td>$${montoRetirar}</td>
        <td>${fecha}</td>
    </tbody>
    `
};

btnCerrarAlmacenarRetiro.addEventListener('click', ()=>{
    document.querySelector('header').classList.remove('ocultar');
    document.querySelector('footer').classList.remove('ocultar');
    opcionRetirar.classList.remove('ocultar');
    almacenarRetiro.classList.add('ocultar');

    montoRetirar.value ='';
    montoRetirar.classList.remove('correcto');
});



/* ---------------------- OPCION TRANSFERIR ---------------------- */
const btnTranferir = document.querySelector("#transferir");
const opcionTransferir = document.querySelector("#opcionTransferir");

const btnTranferirCargar = document.querySelector('#btnTransferir');
const almacenarTransferir = document.querySelector('#almacenarTransferir');
const btnCerrarAlmacenar = document.querySelector('#cerrarAlmacenar');

btnTranferir.addEventListener('click', ()=>{
    opcionTransferir.classList.remove('ocultar');
    movimientos.classList.add('ocultar');
    btnCerrarSesion.classList.add('ocultar');
    mostrarSaldo.classList.add('ocultar');
    btnVolver.classList.remove('ocultar');
}); 


/* ---------------------- ALMACENAR DATOS DE TRANSFERENCIA ---------------------- */
btnTranferirCargar.addEventListener('click', ()=>{
    document.querySelector('header').classList.add('ocultar');
    document.querySelector('footer').classList.add('ocultar');
    opcionTransferir.classList.add('ocultar');
    almacenarTransferir.classList.remove('ocultar');

    const nombre = document.querySelector('#nombreTransferir').value;
    const correo = document.querySelector('#correoTransferir').value;
    const cuenta = document.querySelector('#numeroCuentaTransferir').value;
    const monto = document.querySelector('#montoTransferir').value;

    agregarDatos(nombre, correo, cuenta, monto, fecha);
    saldo = (parseInt(monto)-saldo)*-1;
});


let cargarDatos = [];
const agregarDatos = (nombre, correo, cuenta, monto, fecha) =>{
    cargarDatos.push();
    document.querySelector('#tablaTransaccion').innerHTML += 
    `<tbody>
        <td>${nombre}</td>
        <td>${correo}</td>
        <td>${cuenta}</td>
        <td>$${monto}</td>
        <td>${fecha}</td>
    </tbody>
   `
};


btnCerrarAlmacenar.addEventListener('click', ()=>{
    document.querySelector('header').classList.remove('ocultar');
    document.querySelector('footer').classList.remove('ocultar');
    opcionTransferir.classList.remove('ocultar');
    almacenarTransferir.classList.add('ocultar');

    nombreTransferir.value ='';
    nombreTransferir.classList.remove('correcto');
    correoTransferir.value ='';
    correoTransferir.classList.remove('correcto');
    numeroCuentaTransferir.value ='';
    numeroCuentaTransferir.classList.remove('correcto');
    montoTransferir.value ='';
    montoTransferir.classList.remove('correcto');
});



/* ---------------------- OPCION CONSIGNAR ---------------------- */
const btnConsignar = document.querySelector("#consignar");
const opcionConsignar = document.querySelector('#opcionConsignar');

const btnCargarConsignacion = document.querySelector('#btnConsignar');
const btnAlertaConsignar = document.querySelector('#alertaConsignar');
const btnCerrarAlerta = document.querySelector('#cerrarAlerta');


btnConsignar.addEventListener('click', ()=>{
    movimientos.classList.add('ocultar');
    btnCerrarSesion.classList.add('ocultar');
    mostrarSaldo.classList.add('ocultar');
    btnVolver.classList.remove('ocultar');
    opcionConsignar.classList.remove('ocultar');
});

btnCargarConsignacion.addEventListener('click', ()=>{
    document.querySelector('header').classList.add('ocultar');
    document.querySelector('footer').classList.add('ocultar');
    btnAlertaConsignar.classList.remove('ocultar');
    opcionConsignar.classList.add('ocultar');

    let montoConsignar = document.querySelector('#montoConsignar').value; 
    saldo = (parseInt(montoConsignar)+saldo);
});

btnCerrarAlerta.addEventListener('click', ()=>{
    document.querySelector('header').classList.remove('ocultar');
    document.querySelector('footer').classList.remove('ocultar');
    btnAlertaConsignar.classList.add('ocultar');
    opcionConsignar.classList.remove('ocultar');

    montoConsignar.value = '';
    montoConsignar.classList.remove('correcto');
});

