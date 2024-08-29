import {totalizer_cantidad, totalizer_precio_item} from "./totalizador";

const cantidad = document.querySelector("#cantidad");
const precio_item = document.querySelector("#precio-item")

const form = document.querySelector("#ventas-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cant = Number.parseInt(cantidad.value);
  const precioItem = Number.parseInt(precio_item.value);

  div.innerHTML = "<p>" + totalizer_cantidad(cant) + "</p>" + "<p>" + totalizer_precio_item(precioItem) + "</p";
});
