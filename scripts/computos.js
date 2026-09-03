/* Adicionar las siguientes funciones:
  . calcularCuotaMensual(prestamo, interes, meses)
  . reporteTotal(info)
  . reporteMasGanan(info)
*/
function calcularCuotaMensual(prestamo, interes, meses){
    let aux = Math.pow((1 + interes), meses)
    let res = aux;
    return Math.round(res)
} 


 
// listar cada una de las funciones a exportar
export{calcularCuotaMensual, reporteTotal, reporteMasGanan}