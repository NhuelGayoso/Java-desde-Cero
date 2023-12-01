let txt = document.getElementById("txt");

/** 23:38 */

function reloj() {
  //creamos objeto de fecha

  let fecha = new Date();

  //obtenemos las horas
  let horas = fecha.getHours();
  if (horas < 10) {
    horas = "0" + horas;
  }
  //obtenemos los minutos
  let min = fecha.getMinutes();
  if (min < 10) {
    horas = "0" + horas;
  }
  //obtenemos los segundo
  let segundo = fecha.getSeconds();
  if (segundo < 10) {
    segundo = "0" + segundo;
  }

  //imprimimos en el span
  txt.innerText = horas + ":" + min + ":" + segundo;
}

// invocamos funcion reloj()
reloj();
// actualizmos el llamado a reloj() con delay
setInterval(reloj, 1000);
