function totalizer_cantidad(cantidad){
    return cantidad;
}
function totalizer_precio_item(precio){
    return precio;
}
function totalizer_impuesto(estado){
    return estado;
}

function precio_neto(cant, precio){
    return cant*precio;
}


export {totalizer_cantidad, totalizer_precio_item, totalizer_impuesto, precio_neto};