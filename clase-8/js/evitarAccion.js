let enlace = document.querySelector("#enlace");

enlace.addEventListener("click", function (evento) {
  //evitamos que se ejecute el enlace
  evento.preventDefault();
  console.log(evento)
});
