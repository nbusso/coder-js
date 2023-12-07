/*
estructura de una función


function nombreFuncion(){
    código a ejecutar por la función
}

nombreFuncion(); => se ejecuta la funcion
*/

// function saludar() {
//     console.log("Hola");
// }

// saludar();

// function saludar() {
//     let nombre = prompt("Ingrese el nombre");
//     alert(`Hola ${nombre}`);
// }

/*
estructura de una función con parámetros

function nombreFuncion(parm1, parm2, ..., parmn) {
    código a ejecutar por la función
}

nombreFuncion(valor1, valor2, ..., valorn);
*/

// function saludar(saludo, nombre) {
//     console.log(`${saludo} ${nombre}`);
// }

// let saludo = prompt("Ingrese el saludo");
// let nombre = prompt("Ingrese el nombre")

// saludar("Hola", "Nico");
// saludar("Bienvenido", "Mariano");
// saludar(saludo, nombre);

// function sumar(numeroUno, numeroDos) {
//     return numeroUno + numeroDos;
// }

// sumar(5, 6);

// function armar(partes) {
//     return `Muñeco armado con ${partes}`;
// }

// function pintar(munecoArmado) {
//     return `${munecoArmado} y pintado`;
// }

// function vestirGuardar(munecoPintado) {
//     console.log(`${munecoPintado}, vestido y guardado en bodega`);
// }

// let munecoArmado = armar("madera");
// let munecoPintado = pintar(munecoArmado);
// vestirGuardar(munecoPintado);

// function calculadora(numeroUno, numeroDos, operacion) {
//     switch(operacion) {
//         case "+":
//             return numeroUno + numeroDos;
//             break;

//         case "-":
//             return numeroUno - numeroDos;
//             break;

//         case "*":
//             return numeroUno * numeroDos;
//             break;
                    
//         case "/":
//             return numeroUno / numeroDos;
//             break;

//         default:
//             return "Operacion fallida";
//             break;
//     }   
// }

// let numeroUno = Number(prompt("Ingrese el numero uno"));
// let numeroDos = Number(prompt("Ingrese el numero dos"));
// let operacion = prompt("Ingrese la operación");

// let resultado = calculadora(numeroUno, numeroDos, operacion);

// alert(`${numeroUno} ${operacion} ${numeroDos} = ${resultado}`);

// FUNCION ANONIMA
// const sumar = function (a, b) {
//     return a + b;
// }

// console.log(sumar(5, 6));


// ARROW FUNCTION
// const sumar = (a, b) => {
//     return a + b;
// };

// si la funcion no tiene parametros se debe dejar los parentesis vacios
// si la funcion tiene un solo parametro se puede quitar los parentesis
// si la funcion no tiene llaves ni el return esta hace un return implicito

// const saludar = () => {
//     return "Hola"
// };

// console.log(saludar()); 

// const saludar = nombre => {
//     return `Hola ${nombre}`
// };

// console.log(saludar("Nico"));

// const sumar = (x, y) => x + y;
// console.log(sumar(5, 6));

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;
let precioProducto = 1000;
let descuento = 200;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
console.log(nuevoPrecio);