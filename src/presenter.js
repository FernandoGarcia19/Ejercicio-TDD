import totalizer from "./totalizador";

const cantidad = document.querySelector("#cantidad");

const form = document.querySelector("#ventas-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cant = Number.parseInt(cantidad.value);

  div.innerHTML = "<p>" + totalizer(cant) + "</p>";
});
