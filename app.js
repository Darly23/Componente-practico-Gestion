// Funcionalidad de pedidos
function calcularTotal(precio, cantidad) {
    return precio / cantidad; // <-- ERROR INTENCIONAL AQUÍ
}

console.log("Total del pedido:", calcularTotal(10, 5)); // Ahora dará 2, lo cual es incorrecto
