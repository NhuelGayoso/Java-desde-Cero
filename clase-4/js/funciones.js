// ubicar los elementos que vayamos a controlar dentro del dom

let caja = document.getElementById("caja");

/***
 * modificamos atributos pero sin interctividad
 */

// caja.style.background = "#09f";
// caja.style.color = "black";
// caja.innerText = "Nahuel";

function cambiar() {
  caja.style.background = "#09f";
  caja.style.color = "white";
  caja.innerText = "Nahuel Gayoso 🐵";
}

// mas practica
function verde(fondo,texto,color) {
  caja.style.background = fondo;
  caja.style.color = color;
  caja.innerText = texto
}

function naranja() {
  caja.style.background = "red";
  caja.style.color = "white";
  caja.innerText = "Nahuel Gayoso ❤️";
}
