/*
estructura de un arreglo (array)
[elem1, elem2, ..., elemn]
*/

// const vacio = [];
// const numeros = [1, 2, 3, 4, 5];
// const nombres = ["juan", "pedro", "camila"];
// const valores = [true, false, false, true];
// const varios = [1, "andres", true,];

// console.log(nombres[1]);
// console.log(numeros[0] + numeros[3]);

// const productos = ["carne", "arroz", "mate"];

// for (let i = 0; i < productos.length; i++) {
//     console.log(`miro el producto ${productos[i]}, lo busco y lo agrego al carrito`);
// }

// // PROPIEDADES
// const productos = ["carne", "arroz", "mate"];

// //length => me da la longitud o cantidad de elementos del arreglo
// console.log(productos.length); // => 3

// //push => agregar un elemento al final de arreglo
// productos.push("aceite"); // => [ 'carne', 'arroz', 'mate', 'aceite' ]
// console.log(productos);

// //unshift => agregar un elemento al inicio del arreglo
// productos.unshift("chocolate"); // => [ 'chocolate', 'carne', 'arroz', 'mate', 'aceite' ]
// console.log(productos)

// //pop => quita el ultimo elemento del arreglo
// productos.pop(); //=> [ 'chocolate', 'carne', 'arroz', 'mate' ]
// console.log(productos);

// //shift => quita el primer elemento del arreglo
// productos.shift(); // => [ 'carne', 'arroz', 'mate' ]
// console.log(productos);

// const productos = ["carne", "arroz", "mate", "chocolate", "queso"];
//splice => eliminar uno o más elementos del arreglo
// array.splice(index de inicio, cuantos elementos queremos eliminar)
// productos.splice(1, 2); // => [ 'carne', 'chocolate', 'queso' ]
// console.log(productos);

//join => une todos los elementos del arreglo separados por un parametro
// console.log(productos.join(", "));

//concat => une dos arrays en uno solo
// const numeros = [1, 2, 3, 4, 5];
// const varios = productos.concat(numeros); // => [ 'carne', 'arroz', 'mate', 'chocolate', 'queso', 1, 2, 3, 4, 5 ]
// console.log(varios);

//slice => crea una copia de un fragmento del array
// array.slice(index de inicio, hasta donde (no lo cuenta))

// const copia = productos.slice(1, 4); // => [ 'arroz', 'mate', 'chocolate' ]
// console.log(copia);

// //agregar un elemento con splice
// productos.splice(1, 0, "mani");
// console.log(productos)

// //indexOf => para encontrar la posicion (index) de un elemento dado
// // console.log(productos.indexOf("arroz")); // => 1
// // console.log(productos.indexOf("arroz amarillo")); // => -1 (porque no existe)

// //includes => verifica la existencia de un elemento en el arreglo
// console.log(productos.includes("carne")); // => true

// // reverse => invierte el orden del arreglo
// productos.reverse();
// console.log(productos);

// const productos = ["carne", "arroz", "mate", "chocolate", "queso"];

// const eliminarPorNombre = (nombre) => {
//     let index = productos.indexOf(nombre)

//     if (index != -1) {
//         productos.splice(index, 1);
//         console.log(productos);
//     }
// }

// eliminarPorNombre("arroz");

// const productos = [
//     { id: 1, nombre: "camisa", precio: 1000 },
//     { id: 2, nombre: "gorra", precio: 700 },
//     { id: 3, nombre: "media", precio: 520 },
//     { id: 4, nombre: "zapato", precio: 374 }
// ];

// let producto = {
//     id: 5,
//     nombre: "pantalon",
//     precio: 2000
// };

// productos.push(producto);
// console.log(productos);


productos.push(new Producto("camisa", 1000));
productos.push(new Producto("gorra", 1200));
productos.push(new Producto("media", 800));
productos.push(new Producto("zapato", 700));

// for (const iterator of productos) {
//     console.log(iterator.nombre);
//     console.log(iterator.precio);
// }
const productos = [];
let seguirAgregando = true;

class Producto {
    constructor (nombre, precio) {
        this.id = productos.length + 1;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const agregarProducto = () => {
    let nombre = prompt("Ingrese el nombre del producto").toLowerCase();
    let precio = parseFloat(prompt("Ingrese el precio del producto"));

    productos.push(new Producto(nombre, precio));

    if(prompt("Desea agregar otro producto?\n1. SI\n2. NO") === "2") {
        seguirAgregando = false;
        alert("Terminaste de agregar tus productos");
    }
}

while (seguirAgregando) {
    agregarProducto();
    console.log(productos);
}


