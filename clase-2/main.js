/*
estructura del condicional if

if(condicion o un valor) {
    codigo cuando la condicion o el valor sea verdadero
}

----------

valores booleanos:
true o false

para saber que valor tiene asociado un elemento en particular usamos
Boolean(0) => false
Boolean(1) => true
Boolean("") => false
Boolean("algo dentro") => true

= asignacion
== comparacion de valor
=== comparacion de valor Y tipo de dato
*/

// if (-23) {
//     console.log("Hola");
// }

// console.log("Proceso finalizado");

// let edad = 18;

// if(edad >= 18) {
//     console.log("Eres mayor de edad");
// }

/*
estructura del if else

if(condicion){
    codigo cuando la condicion es verdadera
} else {
    codigo a ejecutar cuando la condicion es falsa
};

*/

// let edad = 18;

// if (edad >= 18) {
//     console.log("Eres mayor de edad");
// } else {
//     console.log("Eres menor de edad");
// };

// let respuesta = prompt("Terminaste la tarea?");

// if ( respuesta == "si") {
//     alert("Puedes salir a jugar!");
// } else {
//     alert("No puedes salir a jugar!");
// };

/*
estructura de if else if 

if(condicion1) {
    codigo a ejecutar si la condicion1 es verdadera
} else if(condicion2) {
    condicion a ejecutar si la condicion2 es verdadera
} else {
    codigo a ejecutar cuando ninguna de las condiciones anteriores es verdadera
}
*/

// let edad = Number(prompt("Ingrese su edad"));

// if (edad < 14) {
//     alert("No puedes entrar");
// } else if (edad < 18) {
//     alert("Puedes entrar con un adulto responsable");
// } else {
//     alert("Puedes entrar");
// };

// let edad = 18;
// let valor = edad > 18;
// console.log(valor);

/*
! cambia el valor del elemento

valor1 && valor2 es verdadero cuando los dos valores son verdaderos, en caso contrario es falso

valor1 || valor2 es verdadero cuando al menos uno de los dos es verdadero, en caso contrario es falso
*/

// let nombre = prompt("Ingrese el nombre");
// let apellido = prompt("Ingrese el apellido");

// if (nombre != "" && apellido != "") {
//     alert("Hola " + nombre + " " + apellido);
// } else {
//     alert("Los campos son obligatorios!");
// };


// let nombre = prompt("Ingrese el nombre");

// if(nombre === "ANA" || nombre === "ana") {
//     alert("hola ana");
// } else {
//     alert("No eres ana");
// }

// let nombre = prompt("Ingrese el nombre");

// if (nombre != "" && (nombre === "EMA" || nombre === "ema")) {
//     alert("hola ema");
// } else {
//     alert("no eres ema");
// };

let minutos = prompt("Cuantos minutos dejaste la milanesa en el horno?");

if (minutos < 10) {
    alert('Dejala unos minutos más, está cruda!');
} else if (minutos >= 10 && minutos <= 20) {
    alert("Sacala! Esta a punto para comer!")
} else {
    alert("Está más quemada que hormiga abajo de la lupa")
};

