// Funcionalidad de pedidos
function calcularTotal(precio, cantidad) {
    return precio * cantidad;
}

// Función para calcular el IVA (15%) del pedido
function calcularIVA(subtotal) {
    return subtotal * 0.15;
}

console.log("Total del pedido:", calcularTotal(10, 5)); // Debe dar 50
console.log("IVA del pedido:", calcularIVA(50)); // Debe dar 7.5

