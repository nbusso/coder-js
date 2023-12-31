// variables
const productos = [];
let seguirAgregando = true;

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

const nuevoCodigo = prompt => {
    let prompt = prompt(`Por favor ingrese el código del producto. Máximo 8 caracteres.`).toUpperCase();

    while (prompt.length > 8 || !prompt) {
        if (codigo.length > 8) {
            prompt = prompt(`recuerde que su código debe tener un máximo de 8 carácteres. 
            Ingrese su código de nuevo:`);
            
        } else if (!prompt) {
            prompt = prompt(`este campo es obligatorio, por favor ingrese un código para el producto que desea registrar.
            Ingrese su código nuevamente:`);
            
        }
    }

    return prompt;
}

const checkNull = prompt => {
    if (!prompt) {
        return true;
    } else {
        return false;
    }
}

// definimos la funcion de ingreso de datos + agregado de producto
const agregarProducto = () => {
    // definimos el codigo del producto
    let codigo = prompt(`Por favor ingrese el código del producto. Máximo 8 caracteres.`).toUpperCase();
    console.log(codigo);
    // checkeamos que 'codigo' sea correcto
    while (codigo.length > 8 || !codigo) {
        if (codigo.length > 8) {
            codigo = prompt(`recuerde que su código debe tener un máximo de 8 carácteres. 
            Ingrese su código de nuevo:`);
            console.log(codigo);
        } else if (!codigo) {
            codigo = prompt(`este campo es obligatorio, por favor ingrese un código para el producto que desea registrar.
            Ingrese su código nuevamente:`);
            console.log(codigo);
        }
    }
    //
    // definimos el nombre del producto
    let nombre = prompt(`Ingrese el nombre del producto`);
    while (checkNull(nombre)) {
        nombre = prompt(`Este campo es obligatorio, por favor ingrese el nombre del producto`);
    }
    
    


    let categoria = prompt(`Ingrese la categoría.`);
    let precio = Number(prompt(`Ingrese el valor del artículo`));

    let nuevo = new Producto(codigo, nombre, categoria, precio);
    productos.push(nuevo);

    let agregarMas = prompt(`Agregaste tu producto! Deseas agregar otro? (si/no)`).toLowerCase();

    if (agregarMas != 'si') {
        seguirAgregando = false;
    }
}

while (seguirAgregando) {
    agregarProducto();
    console.log(productos);
}



