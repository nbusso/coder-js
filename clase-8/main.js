//Propiedades del objeto Math
//Constantes
// console.log(Math.E); // constante de Euler
// console.log(Math.PI); // constante de PI

// //Mínimo y Máximo
// console.log(Math.max(2, 23, 4, 5, 67, 78976, 54, 3)); //=> 78976
// console.log(Math.min(2, 23, 4, 5, 67, 78976, 54, 3)); // => 2

//dado un arreglo de nombres, crear una funcion que retorne un nombre aleatorio
// dado un arreglo de premios, crear una funcion que retorne un premio
// el programa debe decir aleatoriamente que persona ha ganado y que premio

// let personas = ["juan", "lucas", "sofia", "nicolas"];
// let premios = ["tv", "celular", "fernet", "vino"];

// const generarPremio = (personas, premios) => {
//     let ganador = Math.floor(Math.random() /* 0 => 0.9999999999 */ * personas.length /* => 4 */);
//     let premio = Math.floor(Math.random() * premios.length);

//     console.log(`${personas[ganador]} ha ganado un ${premios[premio]}! Felicidades!`);
// }

// generarPremio(personas, premios);

// for (i = 0; i < 20; i++) {
//     generarPremio(personas, premios);
// }

//DATE 
// console.log(Date());

// let navidad = new Date(2023, 11, 24, 23, 59, 59);
// console.log(navidad);

// let navidad = new Date("December 24, 2023 23:59:59");
// console.log(navidad);
// console.log(navidad.toDateString());
// console.log(navidad.toLocaleString());
// console.log(navidad.toLocaleDateString());
// console.log(navidad.toLocaleTimeString());
// console.log(navidad.getFullYear());
// console.log(navidad.getMonth());
// console.log(navidad.getDay());

let navidad = new Date("December 24, 2023 23:59:59");
let hoy = new Date("December 20, 2023");