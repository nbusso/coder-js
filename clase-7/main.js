// function mayorQue(n) {
//     return (m) => m > n;
// }

// const mayorQueCinco = mayorQue(5); //(m) => m > 5;
// console.log(mayorQueCinco(6)); // => true
// console.log(mayorQueCinco(3)); // => false

// const mayorQueDiez = mayorQue(10); // (m) => m > 10;
// console.log(mayorQueDiez(7)); // => false
// console.log(mayorQueDiez(11)); // => true

// function generarOperacion(operacion) {
//     if (operacion === "sumar") {
//         return (x, y) => x + y;
//     }
//     if (operacion === "restar") {
//         return (x, y) => x - y;
//     }
//     if (operacion === "multiplicar") {
//         return (x, y) => x * y;
//     }
//     if (operacion === "dividir") {
//         return (x, y) => x / y;
//     }
// }

// const suma = generarOperacion("sumar"); // --> suma(x, y) --> (x, y) => x + y
// const resta = generarOperacion("restar"); 
// const multiplica = generarOperacion("multiplicar");
// const dividir = generarOperacion("dividir");

// console.log(suma(11, 2));
// console.log(resta(20, 12));
// console.log(multiplica(10, 40));
// console.log(dividir(9, 3));

// RECIBIR FUNCION POR PARÁMETRO
// function iterar(arreglo, fun) {
//     for (const iterator of arreglo) {
//         fun(iterator);
//     }
// }

// iterar([1, 2, 4, 56, 78, 9], console.log);

// MÉTODOS DE BÚSQUEDA Y TRANSFORMACIÓN
// const productos = [
//     {id: 1, nombre: "camisa", precio: 1000},
//     {id: 2, nombre: "zapato", precio: 700},
//     {id: 3, nombre: "gorra", precio: 850},
//     {id: 4, nombre: "media", precio: 320},
// ];

//forEach recorre los elemntos del arreglo;
// productos.forEach(item => {
//     console.log(item.nombre);
//     console.log(item.precio);
// });

// //find encuentra el primer elemnto que cumpla la condicion dada
// let nombre = prompt("ingrese el nombre del producto a buscar");
// const producto = productos.find(item => item.nombre === nombre);
// console.log(producto);

// if(producto) {
//     alert(`
//     Id: ${producto.id}
//     Nombre: ${producto.nombre}
//     Precio: ${producto.precio}
//     `);
// } else {
//     alert("Producto no disponible");
// }

// const productos = [
//     {id: 1, nombre: "camisa", precio: 1000, categoria: "hombre"},
//     {id: 2, nombre: "zapato", precio: 700, categoria: "mujer"},
//     {id: 3, nombre: "gorra", precio: 850, categoria: "hombre"},
//     {id: 4, nombre: "media", precio: 320, categoria: "mujer"},
// ];

// filter filtra todos los productos que cumplan la condición dada
// const precio = Number(prompt("Ingrese el precio mínimo del producto"))
// const filtrados = productos.filter(item => item.precio > precio);
// filtrados.forEach(item => {
//     alert(`
//     Id: ${item.id}
//     Nombre: ${item.nombre}
//     Precio: ${item.precio}
//     `);
// })

// let genero = prompt("quiere ver productos para hombre o mujer?");

// const filtrados = productos.filter(item => item.categoria === genero);
// console.log(filtrados);

// const productos = [
//     {id: 1, nombre: "camisa", precio: 1000, categoria: "hombre"},
//     {id: 2, nombre: "zapato", precio: 700, categoria: "mujer"},
//     {id: 3, nombre: "gorra", precio: 850, categoria: "hombre"},
//     {id: 4, nombre: "media", precio: 320, categoria: "mujer"},
// ];

//some verifica si existe al menos un elemnto que cumpla la condicion dada
// console.log(productos.some(item => item.nombre === "camisa")); //=> true

// //map modifica o transforma cada uno de los elementos del arreglo
// const precios = productos.map((item) => item.precio);
// console.log(precios);

// const nombres = productos.map((item) => item.nombre);
// console.log(nombres);

// const preciosNavidad = productos.map(item => {
//     return {
//         id: item.id,
//         nombre: item.nombre,
//         precio: item.precio - item.precio * 0.21
//     }
// })

// console.log(preciosNavidad);

const productos = [
    {id: 1, nombre: "camisa", precio: 1000, categoria: "hombre"},
    {id: 2, nombre: "zapato", precio: 700, categoria: "mujer"},
    {id: 3, nombre: "gorra", precio: 850, categoria: "hombre"},
    {id: 4, nombre: "media", precio: 320, categoria: "mujer"},
];

//reduce reduce un arreglo a un único valor
// const numeros = [1, 3, 4, 56, 7, 8];
// const total = numeros.reduce((acum, item) => acum + item, 0); //el 0 es como inicializa el acumulador

// const totalCarrito = productos.reduce((acum, item) => acum + item.precio, 0);
// console.log(totalCarrito);

// const numeros = [ 40, 1, 5, 200];
// console.log(numeros.sort((a, b) => a - b));
// console.log(numeros.sort((a, b) => b - a));

