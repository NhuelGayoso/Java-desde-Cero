// mientras (la condicion sea verdadera){
//     codigo a iterar
// }

let n = 0;

while (n < 15) {
  document.write(n, "<br>");
  n++;
}

document.write("<hr>");

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

let i = 0;
document.write('<ul>')
while (i < italianos.length) {
//   document.write(italianos[i]);
  document.write('<li class="italianos">' + italianos[i] + '</li>')
  i++;
}
document.write('</ul>')
