// Definimos nuestra base de datos
const ropa = {
    "pantalon": 10000,
    "camisa": 5000,
    "zapatos": 22000,
    "chaqueta": 25000,
    "gorra": 7000,
    "bufanda": 1500,
    "vestido": 10500,
    "zapatillas": 20000,
    "shorts": 4500,
    "blusa": 3500
};

const monto = prompt("Ingrese un monto:");

const productosDisponibles = [];
for (const producto in ropa) {
    if (ropa[producto] <= monto) {
        productosDisponibles.push(producto);
    }
}

if (productosDisponibles.length > 0) {
    alert("Estos son los productos disponibles dentro de tu presupuesto: " + productosDisponibles.join(", "));
} else {
    alert("Lo siento, no hay productos disponibles dentro de tu presupuesto.");
}