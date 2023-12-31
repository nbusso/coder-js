// variables
const productos = [];
let seguirAgregando = true;

let codigo;
let nombre;
let categoria;
let precio;

// definimos clase y constructor para nuestros productos
class Producto {
    constructor(codigo, nombre, categoria, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
    }

    calcIva() {
        return this.precio * 1.21;
    }
}

// funciones 

const nuevoCodigo = () => {
    let x = prompt(`Por favor ingrese el código del producto. Máximo 8 caracteres.`).toUpperCase();

    while (x.length > 8 || !x) {
        if (x.length > 8) {
            x = prompt(`recuerde que su código debe tener un máximo de 8 carácteres. 
            Ingrese su código de nuevo:`);    
        } else if (!x) {
            x = prompt(`este campo es obligatorio, por favor ingrese un código para el producto que desea registrar.
            Ingrese su código nuevamente:`);    
        }
    }

    return x;
}

const notNull = val => {

    if(val) {
        return val;
    } else {
        while (!val) {
            val = prompt(`Este campo es obligatorio. Por favor, llénelo.`);
        }
        return val;
    }

}

const notNumber = val => {

    while (isNaN(val) || val <= 0) {

        if (isNaN(val)) {
            val = Number(prompt(`Este campo solo acepta valores numéricos, inténtelo de nuevo:`));
        } else {
            val = Number(prompt(`El valor del producto debe ser mayor a $0 ! Inténtelo de nuevo:`));
        }
    }
    return val;
}

const agregarProducto = (codigo, nombre, categoria, precio) => {
    let nuevo = new Producto(codigo, nombre, categoria, precio);
    productos.push(nuevo);
}
//armado de los nuevos productos
//console.log(nuevoCodigo());


while (seguirAgregando) {
    codigo = nuevoCodigo();
    nombre = notNull(prompt(`Ingrese el nombre del producto:`));
    categoria = notNull(prompt(`Ingrese la categoría del producto`));
    precio = notNumber(Number(prompt(`Ingrese el precio del producto:`)));
    
    agregarProducto(codigo, nombre, categoria, precio);
    
    let continuar = prompt(`Desea agregar otro producto? (si/no)`).toLowerCase();

    while (continuar !== "si" && continuar !== "no") {
        continuar = prompt(`Desea agregar otro producto? (si/no)
        Este campo solo acepta 'si' o 'no'`)
    }
    
    if (continuar === "si") {
        seguirAgregando = true;
    } else {
        seguirAgregando = false;
    }
}

console.log(productos);