//ubicamos los elementos dentro del dom

let txtDias = document.querySelector("#txtDias");
let txtHoras = document.querySelector("#txtHoras");
let txtMinutos = document.querySelector("#txtMinutos");
let txtSegundos = document.querySelector("#txtSegundos");

// declaramos funciones de control

function cuentaRegresiva() {
  // objeto de fecha

  let ahora = new Date();
  let final = new Date(2023, 11, 17);

  //conversion a unix timestamp
  //tiempo transcurrido en milisegundos desde el 1 de enero de 1970
  let actual = ahora.getTime();
  let evento = final.getTime();
  // diferencias entre fechas
  let diferencia = evento - actual;

  //   obtenemos el tiempo en segundo , minutos, horas, dias

  let segundos = Math.trunc(diferencia / 1000);

  let minutos = Math.trunc(segundos / 60);

  let horas = Math.trunc(minutos / 60);

  let dias = Math.trunc(horas / 24);

  //calculamos eel tiempo sobrante
  // en horas, minutos, segundos
  horas = horas % 24;
  minutos = minutos % 60;
  segundos = segundos % 60;

  // 0 (ceros iniciales)
  if (horas < 10) {
    horas = "0" + horas;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  // imprimir en el html

  txtDias.innerText = dias;
  txtHoras.innerText = horas;
  txtMinutos.innerText = minutos;
  txtSegundos.innerText = segundos;
}

//invocamos la funcion

cuentaRegresiva();
setInterval(cuentaRegresiva);
/**
 * math.trunc(se sacan los decimales)
 * math.floor(redondea para abajo)
 * math.ceil(redondea para arriba)
 * math.round(redondea 0-4 para abajo | 5-9 para arriba)
 */
