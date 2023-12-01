/**Mostra la fecha actual
 * formato 28/11/2023
 */

// ubicar elementos dentro del dom

let txt = document.getElementById("txt");

//creamos un objeto de fecha
let fecha = new Date();
// obtenemos el numero del dia del mes
let diaMes = fecha.getDate();
// obtenemos el numero del mes
let mes = fecha.getMonth() + 1;
//agregamos  0 inicial (dos caracteres)
if(mes < 10){
    mes = "0" + mes;
}
// obtenemos el numero del año
let anio = fecha.getFullYear()
//imprimimos en el span

txt.innerText = diaMes+"/"+mes+"/"+anio;
