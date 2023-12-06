// comentario de linea

/* comentario
de
bloque
 */

// forma recomendada para declarar variables
// let edad = 50; // variable de tipo number
// let nombre = "nicolas"; // variable de tipo string

// forma no recomendada para declarar variables
// var direccion = "carrera 34 # 50 - 20";
// var direccion = "AV";

// constantes 
// const NUMERO = 5; // => las constanstes es buena practica colocarles en MAYUSCULAS

// camelCase => nombreBonitoGrande
// PascalCase => NombreBonitoGrande
// snake_case => nombre_bonito_grande
// kebab-case => nombre-bonito-grande

// let edad = 70;

// let numeroUno = 5;
// let numeroDos = 20;

// let resultadoSuma = numeroUno + numeroDos;
// let resultadoResta = numeroUno - numeroDos;
// let resultadoMultiplicacion = numeroUno * numeroDos;
// let resultadoDivision = numeroUno / numeroDos;


// console.log("resultado suma", resultadoSuma);
// console.log("resultado resta", resultadoResta);
// console.log("resultado multiplicacion", resultadoMultiplicacion);
// console.log("resultado division", resultadoDivision);

// let saludo = "Hola";
// let nombre = "andres";

// console.log(saludo + " " + nombre);

// let nombre = prompt("Ingrese su Nombre");

// let nombre = "pepito";
// console.log(typeof nombre);

// let numero = 5;
// console.log(typeof numero);

// let numero = prompt("Ingrese un numero");
// console.log(typeof numero);

// let numero = Number(prompt("Ingrese Numero"));
// alert(numero + 10);


// ejercicio:

let nombre = prompt("Cómo te llamas?");
let añoNacimiento = parseInt(prompt("En qué año naciste?"));
let edad = 2023 - añoNacimiento;

alert("Hola, tu nombre es " + nombre + " y tienes " + edad + " años (aprox). Un gusto en conocerte!");