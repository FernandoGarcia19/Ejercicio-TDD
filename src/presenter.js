import {totalizer_cantidad, totalizer_precio_item, totalizer_impuesto, precio_neto} from "./totalizador";

const cantidad = document.querySelector("#cantidad");
const precio_item = document.querySelector("#precio-item")
const estado = document.querySelector("#estado")


const form = document.querySelector("#ventas-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cant = Number.parseInt(cantidad.value);
  const precioItem = Number.parseInt(precio_item.value);
  const state = estado.value

  div.innerHTML = 
  "<p>Cantidad: " + totalizer_cantidad(cant) + "</p>" + 
  "<p>Precio del item: " + totalizer_precio_item(precioItem) + "</p>" + 
  "<p>Impuesto: " + totalizer_impuesto(state) + "</p>" +
  "<p>Precio neto: " + precio_neto(cant, precioItem) + "</p>"
});
