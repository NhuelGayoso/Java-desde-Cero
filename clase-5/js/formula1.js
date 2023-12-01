// ubicamos los elementos en el dom

let redbull = document.getElementById("redbull");
let ferrari = document.getElementById("ferrari");
let mercedes = document.getElementById("mercedes");
let mclaren = document.getElementById("mclaren");

// ocultamos los elementos
redbull.style.display = "none";
ferrari.style.display = "none";
mercedes.style.display = "none";
mclaren.style.display = "none";

// mostramos los elementos con una funcion

function showHide(team) {
  if (team == 'redbull') {
    redbull.style.display = "flex";
    ferrari.style.display = "none";
    mercedes.style.display = "none";
    mclaren.style.display = "none";
  } else if (team == 'ferrari') {
    ferrari.style.display = "flex";
    redbull.style.display = "none";
    mercedes.style.display = "none";
    mclaren.style.display = "none";
  } else if (team == 'mercedes') {
    mercedes.style.display = "flex";
    redbull.style.display = "none";
    ferrari.style.display = "none";
    mclaren.style.display = "none";
  } else if (team == 'mclaren') {
    redbull.style.display = "none";
    ferrari.style.display = "none";
    mercedes.style.display = "none";
    mclaren.style.display = "flex";
  }
}
