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

function reporteTotal(info) {
  let mensaje = '';
  if (info.length === 0) {
    mensaje = 'No hay préstamos procesados.';
  } else {
    mensaje = 'Listado de préstamos procesados son:\n\n';
  }
  info.forEach((dato) => {
    mensaje += `${dato.nombre} -- $ ${dato.prestamo} - $ ${dato.cuota.toFixed(2)} - ${dato.meses} meses - ${dato.interes}%\n`;
  });
  return mensaje;
}

function reporteMasGanan(info) {
  let mensaje = '';
  const aux = info.filter((dato) => dato.prestamo > 1000000);
  if (aux.length === 0) {
    mensaje = 'No hay préstamos mayores a $1.000.000.';
  } else {
    mensaje = 'Listado de préstamos mayores a $1.000.000:\n\n';
  }
  aux.forEach((dato) => {
    mensaje += `${dato.nombre} -- $ ${dato.prestamo} - $ ${dato.cuota.toFixed(2)}\n`;
  });
  return mensaje;
}

// listar cada una de las funciones a exportar
export { calcularCuotaMensual, reporteMasGanan, reporteTotal };
