let formulario = document.querySelector("#formulario");
let campoNombre = document.querySelector("#nombre");
let errNombre = document.getElementById("errNombre");
//FUNCION DE VALIDACION AL HACER SUBMIT

formulario.addEventListener("submit", function (evento) {
  // evitamos el envio del form
  evento.preventDefault();

  //capturamos el dato escrito en el campo nombre
  let nombre = campoNombre.value;
  if (nombre == "" || nombre == null) {
    // mostramo mensaje de error
    errNombre.innerText = "Complete el campo nombre";
  } else {
    //enviamos el formulario
    formulario.submit();
  }
});
