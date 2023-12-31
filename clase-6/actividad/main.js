// 
const personajes = [];
let agregar = true;

class Personaje {
    constructor (clase, ataque, defensa, vida) {
        this.clase = clase;
        this.ataque = ataque;
        this.defensa = defensa;
        this.vida = vida;
    }
}

const agregarPersonaje = () => {
    let clase = prompt("Ingrese la clase del personaje");
    let ataque = parseInt(prompt(`Ingresa el daño de ${clase} (del 1 - 20)`));
    let defensa = parseInt(prompt(`Ingresa la defensa de ${clase} (del 1 - 20)`));
    let vida = parseInt(prompt(`Ingresa la cantidad de vida de ${clase} de 50 - 100`));

    personajes.push(new Personaje(clase, ataque, defensa, vida));

    if (prompt(`Desea agregar otro personaje?\n1. SI\n2. NO\n(tipee 1 o 2)`) === "2") {
        agregar = false;
    }
}

while (agregar) {
    agregarPersonaje();
    console.log(personajes);
};


