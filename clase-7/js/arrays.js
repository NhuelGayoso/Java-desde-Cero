/*
let marca1 = 'Hermes';
let marca2 = 'Zara';
let marca3 = 'Boss';
let marca4 = 'Aeropostale';
let marca5 = 'Tommy';
let marca6 = 'Hollister';
 */

let test = "Hola";
// let marcas = ["Hermes 🍎", "Zara 🍌", "Boss 🍐", "Aeropostale 🍊", "Tommy 🥝", "Hollister 🍍"];
let marcas = new Array(
  "Hermes 🍎",
  "Zara 🍌",
  "Boss 🍐",
  "Aeropostale 🍊",
  "Tommy 🥝",
  "Hollister 🍍"
);

console.log(test);
console.log(marcas);

// imprimimos array dentro del documento
document.write(marcas);
document.write("<br>");
document.write(marcas[2]);

// mostrar el dia de la semana
let fecha = new Date();
console.log(fecha);

let nDiaSemana = fecha.getDay(); // 0 -> dom, 1 -> lun
document.write("<br>");

switch (nDiaSemana) {
  case 0:
    document.write("Domingo");
    break;
  case 1:
    document.write("Lunes");
    break;
  case 2:
    document.write("Martes");
    break;
  case 3:
    document.write("Miercoles");
    break;
  case 4:
    document.write("Jueves");
    break;
  case 5:
    document.write("Sabado");
    break;
  case 6:
    document.write("Viernes");
    break;
}

document.write('<br>')

let semana = ['Domingo','lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
document.write(semana[nDiaSemana])