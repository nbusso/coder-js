// clase 9 -- DOM (DOCUMENT OBJECT MODEL)

//console.log(document.body);

// ACCESO AL DOM
// getElementById();

// let aplicacion = document.getElementById('aplicacion');
// console.log(aplicacion);

// console.log(aplicacion.innerHTML);
// console.log(aplicacion.innerText);

// let parrafo = document.getElementById('parrafo');
// console.log(parrafo.innerHTML);
// console.log(parrafo.innerText);

// //getElementsByClassName();
// let perritos = document.getElementsByClassName('perritos');
// console.log(perritos) // => HTMLCollection

// console.log(perritos[0].innerHTML) // => HTMLCollection
// console.log(perritos[1].innerHTML) // => HTMLCollection
// console.log(perritos[2].innerHTML) // => HTMLCollection

// //getElementsByTagName();
// let divs = document.getElementsByTagName('div');
// console.log(divs);

// MODIFICACION DEL DOM
// let saludo = document.getElementById('saludo');

// saludo.innerHTML = 'Hola Muchachos!';

// let seccion = prompt("Ingrese la seccion");
// let saludo = document.getElementById('saludo');

// if(seccion === 'carrito') {
//     saludo.innerHTML = "<h1>Bienvenid@ al carrito";
//     saludo.className = 'rojo';
// } else if (seccion === 'favoritos') {
//     saludo.innerHTML = "<h1>Bienvenid@ a los favoritos";
//     saludo.className = 'verde';
// } else {
//     saludo.innerHTML = "<h1>Bienvenid@ a nuestra superpagina";
//     saludo.className = 'azul';
// // }

// let container = document.getElementById('container');
// console.log(container.innerHTML);

// function cargarInicio() {
//     container.innerHTML = "<h1>Bienvenido a nuestra pagina</h1><p>probando</p>";
// }

// const cargarProductos = () => {
//     container.innerHTML = "<h1>Vea nuestros productos</h1><p>probando</p>";
// }

// const cargarContacto = () => {
//     container.innerHTML = "<h1>Contactenos!</h1><p>probando</p>"
// }

//AGREGADO DE NODOS
// //paso 1: creacion del elemento
// let parrafo = document.createElement("p");

// //paso 2: agregado de contenido
// parrafo.innerHTML = "<h1>Hola Coder</h1>";

// //paso 3: asignación de un padre
// //forma 1 en el body
// document.body.append(parrafo);
// //forma 2 en contenedor

//REMOVER

// let contenedor = document.getElementById('contenedor');

// contenedor.remove();
// const productos = ["camisa", "gorra", "media", "zapato"];
// let contenedor = document.getElementById("contenedor")

// productos.forEach(producto => {
//     let li = document.createElement("li");
//     li.innerHTML = producto;
//     contenedor.append(li);
// })

const productos = [
    {id: 1,nombre: "camisa",precio: 1000},
    {id: 2,nombre: "gorra",precio: 750},
    {id: 3,nombre: "media",precio: 377},
    {id: 4,nombre: "pantalon",precio: 1007}
];
let contenedor = document.getElementById("contenedor");

productos.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <p>$${item.precio}`

    contenedor.append(div);
})
