// ubicamos los elementos dentros del dom

let caja = document.getElementById("caja");
caja.style.background = "#09f";
caja.style.display = "none";
// declarar funcion de control

function ocultar() {
  caja.style.display = "none";
  // caja.style.visibility = 'hidden'
  // caja.style.opacity = '0'
}

function mostrar() {
  caja.style.display = "block";
  // caja.style.visibility = 'visible'
  // caja.style.opacity = '1'
}

let flag = 1;

function mostrarOcultar() {
  if (flag == 0) {
    caja.style.display = "block";
    flag = 1;
  } else {
    caja.style.display = "none";
    flag = 0;
  }
}
