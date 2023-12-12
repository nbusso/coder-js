/* OBJETOS */

// let nombre = "pepito";
// let edad = 56;
// let direccion = "AV";

/*
estructura de un objeto

{clave1: valor1, clave2: valor2, ..., claven: valorn};
*/

// const persona = { nombre: "pepito", edad: 56, direccion: "AV" };

// let clave1 = "nombre";
// console.log(persona.clave1); // <= no va a funcionar, necesita bracket notation, dot notation busca literal
// console.log(persona.edad);
// console.log(persona.direccion);

// let clave = "nombre";
// console.log(persona[clave]);
// console.log(persona["edad"]);
// console.log(persona["direccion"]);

// const persona = { nombre: "pepito", edad: 56, direccion: "AV" };

// let clave = prompt("Ingrese la clave que quiere consultar");

// alert(persona[clave];)

// const persona = { nombre: "pepito", edad: 56, direccion: "AV" };

// persona["nombre"] = "juanita"; // => modifica el nombre, porque existe
// persona["familiar"] = "pedrito"; // => al no existir la propiedad "familiar", la agrega

// persona.nombre = "juanita"; // => funciona exactamente igual que arriba
// persona.familiar = "pedrito"; // => funciona exactamente igual que arriba

// console.log(persona);

/* FUNCION CONSTRUCTORA */

// function Persona(nombre, edad, direccion) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
// }

// const persona1 = new Persona("juan", 45, "av rosambaun 224");
// const persona2 = new Persona("miguel", 60, "solares 333");

// console.log(persona1.nombre);
// console.log(persona2.nombre);

// function Persona(nombre, edad, direccion) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
//     this.hablar = function() {
//         console.log(`Hola soy ${this.nombre}`);
//     }
// }

// const persona1 = new Persona("juan", 45, "AV");

// for(const clave in persona1) {
//     console.log(clave);
//     console.log(persona1[clave]);
//     console.log(persona1.hablar);
// }

// class Persona {
//     constructor(nombre, edad, direccion) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.direccion = direccion;
//     }

//     hablar() {
//         console.log(`Hola soy ${this.nombre}`);
//     }
// }

// class Producto {
//     constructor(nombre, precio, imagen) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.imagen = imagen;
//     }
// }

// const producto1 = new Producto(
//     "Monitor samsung",
//     375000,
//     'http://imagen.com/monitor'
// )

// const producto2 = new Producto(
//     "Monitor toshiba",
//     739839,
//     'http://imagen.com/monitor2'
// )

// class Producto {
//     constructor(nombre, precio) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.vendido = false;
//     }

//     vender() {
//         this.vendido = true;
//     }
// }

// const producto1 = new Producto("camisa", 1000);
// console.log(producto1);
// producto1.vender();
// console.log(producto1);


class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    vender() {
        if (this.stock > 0) {
            this.stock -= 1; 
        } else {
            console.log(`No tienes más stock de ${this.nombre}`);
        }
    }

    checkeoStock() {
        console.log(`Tienes ${this.stock} unidades de ${this.nombre}.`)
    }

    precioSinIva() {
        let precioNeto = this.precio / 1.21;
        console.log(`El precio neto de ${this.nombre} es de $${precioNeto}`);
    }
}

const producto1 = new Producto("camisa", 1000, 10);
console.log(producto1);
producto1.vender();
console.log(producto1);
console.log(producto1.checkeoStock());
console.log(producto1.precioSinIva());