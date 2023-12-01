/**
 * pedir al usuario que ingrese un numero
 * y a ese numero guardarlo en una variable
 *
 * pedir al usuario otro numero
 * y a ese numero guardarlo en otra variable
 *
 * realizar la suma de esos valores
 *
 * a ese resultado mostrarlo en html
 */

let num = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese otro numero"));

let suma = num + num2;

let txt = document.getElementById("txt");
txt.innerText = 'total:' + suma;
