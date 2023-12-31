// CALCULADORA DE PRECIOS

let seguir = "si";

const calcularPrecioFinal = (costo, iva, ganancia) => {
    switch (iva) {
        case 1:
            return costo * ganancia * 1.21;

        case 2:
            return costo * ganancia * 1.105;

        case 3:
            return costo * ganancia;
        
        default:
            return alert("Por favor seleccione el tipo de iva correctamente!");
    }
}

while(seguir.toLowerCase() != "no") {
    let nombreProducto = prompt(`Ingrese el nombre del nuevo producto a registrar`).toUpperCase();
    let precioCosto = Number(prompt(`Ingrese el precio de costo para ${nombreProducto}, sin IVA.`));
    let tipoIva = Number(prompt(`Seleccione el tipo de IVA que le corresponde a ${nombreProducto} ($${precioCosto})\n \n 1. IVA 21%\n 2. IVA 10.5% \n 3. IVA Exento \n \n`));
    let coefGanancia = 1.5; // +50% sobre precio costo

    seguir = prompt(`El precio final de ${nombreProducto} es de $${calcularPrecioFinal(precioCosto, tipoIva, coefGanancia)}
    
    Desea calcular el precio de otro producto? (Si / No)`);
}

alert(`Gracias por usar la calculadora de precios!`);

