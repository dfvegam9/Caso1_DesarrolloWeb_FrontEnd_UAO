// importa las funciones requeridas desde el modulo escrito en computo.js
import {calcularCuotaMensual, reporteTotal, reporteMasGanan} from './computos.js';

// arreglo para almacenar los datos de cada procesamiento
let infoCuotas = [];

/* 
    obtiene referencias al boton y area de texto donde se va a desplegar la salida.
    almacenarlas en btnFuncionalidad y txtA_Respuesta, respectivamente
*/



/*
    addEventListener a btnFuncionalidad para que cuando se de un click se
    se ejecute la función procesarFuncionalidad 
*/


/*
    funcion procesarFuncionalidad
    Dependiendo de la opcion solicitada desde la pagina web, invoca a:
    . procesarEntrada() - para calcular cuota para la entrada dada
    . mostrarReporte1() - despliega el primer reporte solicitado
    . mostrarReporte1() - despliega el segundo reporte solicitado 
*/ 
function procesarFuncionalidad(){ 
    const opcion = document.getElementById("laOpcion").value;
    switch (opcion){
        // completar
    }
}

/*
    funcion procesarEntrada
    Obtiene los inputs de la pagina, calcula la cuota mensual, despliega la informacion
    obtenida al usuario y crea un objeto con la informacion obtenida y lo almacena en 
    infoCuotas
*/ 
function procesarEntrada(){ 
    // obtener datos de los inputs de la pagina web

    // calcular cuota mensual, con la funcion existente en computos.js

    // despliega informacion de la cuota computada

    // crea nuevo objeto con las propiedades nombre, prestamo, meses, interes y cuota
    // y lo almacena al inicio del arreglo infoCuotas
}

/*
    funcion mostrarReporte1 - despliega el reporte inicial
*/
function mostrarReporte1(){ 

}

/*
    funcion mostrarReporte2 - despliega el segundo reporte
*/
function mostrarReporte2(){ 

}



