// const myArray = [1, 2, 3, 4, 5];
// const myArray2 = ["nico", "fede", "sofia", "andres"];
// const myArray3 = [
//     {nombre: "nico", edad: 32, altura: 1.8, comidas: ["peras", "garcha", "milanesa"]}, 
//     {nombre: "fran", edad: 28, altura: 1.7, comidas: ["manzana", "queso", "toronja", "huevo"]}
// ];
// const myArray4 = [
//     ["manzana", "banana", "peras"],
//     ["lechuga", "tomate", "ajo"]
// ]

// // console.log(myArray2[1]);
// console.log(myArray3[0]);
// console.log(myArray3[0].nombre); // => nico
// //
// console.log(myArray3[0].comidas[2]); // => milanesa

// console.log(myArray4[1][1]); // => tomate

const numeros = [1, 2, 3, 4, 5];
const numeros2 = [3, 6, 21, 6666, 2355]

// funcion que devuelva un array con los elementos de numeros x 3

const numerosTriple = (array) => {
    let triple = [];

    for (i = 0; i < array.length; i++) {
        triple.push(array[i] * 3);
    }

    return triple;
}

console.log(numerosTriple(numeros));
console.log(numerosTriple(numeros2));