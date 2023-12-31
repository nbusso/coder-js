/*
INSTRUCTIONS

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

// const countPositivesSumNegatives = input => {
//     let result = [];
//     if (input) {
//         if (Math.abs(input[0]) != 0 || Math.abs(input[1]) != 0) {
//             result = [0, -0];
//             for (i = 0; i < input.length; i++) {
//                 if (input[i] > 0) {
//                     result[0] += 1;
//                 } else {
//                     result[1] += input[i];
//                 }
//             }
//         }
//     } 
//     return result;
// }


// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
// console.log(countPositivesSumNegatives());
// console.log(countPositivesSumNegatives([0, 92, 6, 1]));

// let result = [];

// console.log(result);

// result[0] = 1;
// console.log(result);

// result[1] = 10;
// console.log(result);

function precioCuotas () {
    let producto = prompt("¿Que desea comprar?\n_Televisor\n_Lavarropas\n_Microondas\n_Cocina\n_Tostadora").toLowerCase();
    let resultado;

    while (true){ 
        if(producto === "televisor" ) { 
            resultado = Number((20000 * 1.20) / 6);
            break;
            /* return resultado; */
        } else if ( producto === "lavarropas") {
            resultado = Number((80000 * 0.60) / 6);
            break;
            /* return resultado; */
        } else if(producto === "microondas"){
            resultado = Number((45000 * 0.60) / 6);
            break;
            /* return resultado; */
        } else if (producto === "cocina") {
            resultado = Number((60000 * 0.60) / 6);
            break;
            /* return resultado; */
        } else if(producto === "tostadora") {
            resultado = Number((25000 * 0.60) / 6);
            break;
            /* return resultado; */
        } else {
            alert ("no contamos con ese producto, disculpe");
            producto = prompt("¿Que desea comprar?\n_Televisor\n_Lavarropas\n_Microondas\n_Cocina\n_Tostadora").toLowerCase();
        }
    }
    return resultado;
}

let valorTelevisorCuotas = Number((20000 + (20000 * .60)) / 6);
let valorLavarropasCuotas = Number((80000 + (80000 * .60)) / 6);
let valorMicroondasCuotas = Number((45000 + (45000 * .60)) / 6);
let valorCocinaCuotas = Number((60000 + (60000 * .60)) / 6);
let valorTostadoraCuotas = Number((25000 + (25000 * .60)) / 6);

while (producto != !Number.isNaN) {
    switch (producto) {
        case "televisor":
            alert(`su producto tiene un valor de 20000$ en un pago\n O un recargo por cuota de ${resultadoCuotas}$, financiado en 6 cuotas.`);
            alert(`la cuota de su prodcuto tiene un valor de ${parseInt(valorTelevisorCuotas)}$ por mes`);
        break;
        case "lavarropas":
            alert(`su producto tiene un valor de 80000$ en un pago\n O un recargo por cuota de ${resultadoCuotas}$, financiado en 6 cuotas.`);
            alert(`la cuota de su prodcuto tiene un valor de ${parseInt(valorLavarropasCuotas)}$ por mes`);
        break;
        case "microondas":
            alert(`su producto tiene un valor de 45000$ en un pago\n O un recargo por cuota de ${resultadoCuotas}$, financiado en 6 cuotas.`);
            alert(`la cuota de su prodcuto tiene un valor de ${parseInt(valorMicroondasCuotas)}$ por mes`);
        break;
        case "cocina":
            alert(`su producto tiene un valor de 60000$ en un pago\n O un recargo por cuota de ${resultadoCuotas}$, financiado en 6 cuotas.`);
            alert(`la cuota de su prodcuto tiene un valor de ${parseInt(valorCocinaCuotas)}$ por mes`);

        break;
        case "tostadora":
            alert(`su producto tiene un valor de 25000$ en un pago\n O un recargo por cuota de ${resultadoCuotas}$, financiado en 6 cuotas.`);
            alert(`la cuota de su prodcuto tiene un valor de ${parseInt(valorTostadoraCuotas)}$ por mes`);

        break; } 
    break;
}