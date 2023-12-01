let italianos = [
  "Maseratti",
  "Pagani",
  "Larmborghini",
  "Ferrari",
  "Alfa Romeo",
  "Bertone",
  "Bugatti",
  "Lancia",
  "Fiat",
  "Mazzanti",
  "Fornassari",
  "Abarth",
];
let urls = [
  "https://www.maserati.com",
  "https://www.pagani.com",
  "https://www.lamborghini.com",
  "https://www.ferrari.com/es-ES",
  "https://www.alfaromeo.com",
  "http://www.bertone.it",
  "https://www.bugatti.com",
  "https://www.lancia.com",
  "https://www.fiat.com",
  "https://mazzantiautomobili.it",
  "http://www.fornasaricars.com",
];

let cantidad = italianos.length;

document.write("<ul>");
for (let i = 0; i < cantidad; i++) {
  document.write('<li class="italianos">');
  document.write('<a href="' + urls[i] + '" target="_blank">');
  document.write(italianos[i]);
  document.write("</a>");
  document.write("</li>");
}
document.write("</ul>");


document.write("<hr>");
document.write("<br>");
document.write("<hr>");
document.write("<h1>Italianos</h1>");
document.write("<ul>");

// otra forma mas eficiente de recorrer un array
for (let italiano of italianos) {
  document.write('<li class="italianos">');
  document.write(italiano);
  document.write("</li>");
}
document.write("</ul>");
