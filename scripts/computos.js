/* Adicionar las siguientes funciones:
  . calcularCuotaMensual(prestamo, interes, meses)
  . reporteTotal(info)
  . reporteMasGanan(info)
*/
function calcularCuotaMensual(prestamo, interes, meses) {
  interes = interes / 100;
  let aux = Math.pow(1 + interes, meses);
  let res = (aux * interes) / (aux - 1);
  res = res * prestamo;
  return Math.round(res * 100) / 100;
}

function reporteTotal({ nombre, prestamo, interes, meses, cuota }) {
  let res = `${nombre} -- $ ${prestamo} - $ ${cuota} - ${meses} meses - ${interes}%\n`;
  return res;
}

function reporteMasGanan({ nombre, prestamo, cuota }) {
  let res = `${nombre} -- $ ${prestamo} - $ ${cuota}\n`;
  return res;
}

// listar cada una de las funciones a exportar
export { calcularCuotaMensual, reporteMasGanan, reporteTotal };
