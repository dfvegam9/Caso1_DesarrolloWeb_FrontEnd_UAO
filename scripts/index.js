// importa las funciones requeridas desde el modulo escrito en computo.js
import { calcularCuotaMensual, reporteTotal, reporteMasGanan } from './computos.js';

// arreglo para almacenar los datos de cada procesamiento
let infoCuotas = [];

/* 
    obtiene referencias al boton y area de texto donde se va a desplegar la salida.
    almacenarlas en btnFuncionalidad y txtA_Respuesta, respectivamente
*/
const btnFuncionalidad = document.getElementById("procesar");
const txtA_Respuesta = document.getElementById("laRespuesta");

/*
    addEventListener a btnFuncionalidad para que cuando se de un click se
    se ejecute la función procesarFuncionalidad 
*/
btnFuncionalidad.addEventListener("click", procesarFuncionalidad);


/*
    función procesarFuncionalidad
    Dependiendo de la opción solicitada desde la pagina web, invoca a:
    . procesarEntrada() - para calcular cuota para la entrada dada
    . mostrarReporte1() - despliega el primer reporte solicitado
    . mostrarReporte2() - despliega el segundo reporte solicitado 
*/
function procesarFuncionalidad() {
    const opcion = document.getElementById("laOpcion").value;
    switch (opcion) {
        // completar
        case "Calcular":
            procesarEntrada();
            break;
        case "ListarTodos":
            mostrarReporte1();
            break;
        case "ListarGanan":
            mostrarReporte2();
            break;
        default:
            console.log("Opción no reconocida");
    }
}

/*
    función procesarEntrada
    Obtiene los inputs de la pagina, calcula la cuota mensual, despliega la información
    obtenida al usuario y crea un objeto con la información obtenida y lo almacena en 
    infoCuotas
*/
function procesarEntrada() {
    // obtener datos de los inputs de la pagina web
    const nombre = document.getElementById("elNombre").value;
    const prestamo = document.getElementById("elPrestamo").value;
    const interes = document.getElementById("elInteres").value;
    const meses = document.getElementById("losMeses").value;

    // calcular cuota mensual, con la función existente en computos.js
    const cuota = calcularCuotaMensual(prestamo, interes, meses);

    // despliega información de la cuota computada
    txtA_Respuesta.value = `${nombre} debe pagar $ ${cuota} cada mes por el préstamo de $ ${prestamo} a ${meses} meses con el interés de ${interes}%`;

    // crea nuevo objeto con las propiedades nombre, préstamo, meses, interés y cuota
    const infoCuota = { nombre, prestamo, interes, meses, cuota };

    // y lo almacena al inicio del arreglo infoCuotas
    infoCuotas.push(infoCuota);
}

/*
    funcion mostrarReporte1 - despliega el reporte inicial
*/
function mostrarReporte1() {
    //Limpiar el area de texto
    txtA_Respuesta.value = "";
    // y despliega el resultado de la función reporteTotal
    txtA_Respuesta.value += reporteTotal(infoCuotas);
}

/*
    funcion mostrarReporte2 - despliega el segundo reporte
*/
function mostrarReporte2() {
    //Limpiar el area de texto
    txtA_Respuesta.value = "";
    // y despliega el resultado de la función reporteMasGanan
    txtA_Respuesta.value += reporteMasGanan(infoCuotas);
}



