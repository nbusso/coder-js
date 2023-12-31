const personajes = [
    {id: 1, nombre: "nico", vida: 100, clase: "guerrero", raza: "enano", genero: "h"},
    {id: 2, nombre: "andy", vida: 100, clase: "mago", raza: "humano", genero: "h"},
    {id: 3, nombre: "sofi", vida: 100, clase: "mago", raza: "elfo", genero: "m"},
    {id: 4, nombre: "fran", vida: 100, clase: "arquero", raza: "humano", genero: "h"},
    {id: 5, nombre: "vicky", vida: 100, clase: "sacerdote", raza: "elfo", genero: "m"},
];


// const filtrados = personajes.filter(item => item.raza === "humano");

// filtrados.forEach(item => {
//     item.vida += 20;
// });

// const agregarVida = (raza, hp) => {
//     const razaABuscar = personajes.filter(item => item.raza === raza);
//     console.log(razaABuscar);
//     razaABuscar.forEach(item => {
//         item.vida += hp;
//     })
// }

// agregarVida("elfo", 50);

// console.log(personajes);

// 1era forma para declarar una funcion
// function miFuncion() {
//     console.log("hola");
// };

// function miFuncionConParam(nombre, edad) {
//     console.log(`Hola soy ${nombre}, tengo ${edad} años.`);
// }

// const miFuncion = function() {
//     console.log("hola");
// }

// const miFuncionConParam = function(nombre, edad) {
//     console.log(`Hola soy ${nombre}, tengo ${edad} años.`);
// }

const miFuncion = () => {
    console.log("hola");
}

// const potencia = (x) => {
//     return x * x;
// }

const potencia = x => x * x;
console.log();

const miFuncionConParam = (nombre, edad) => {
    console.log(`Hola soy ${nombre}, tengo ${edad} años.`);
}

console.log(miFuncion());
console.log(miFuncionConParam("Fede", 28));

const funcFede = (param1, param2) => param1 * param2;