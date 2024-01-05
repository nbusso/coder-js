const clases = [
    {id: 1, nombre: "Mago", raza: "Elfo", arma: "Báculo"},
    {id: 2, nombre: "Guerrero", raza: "Enano", arma: "Hacha"},
    {id: 3, nombre: "Ladron", raza: "Elfo", arma: "Gancho"},
    {id: 4, nombre: "Sacerdote", raza: "Sacerdote", arma: "Rosario"}
];

console.log(clases);
let container = document.getElementById('container');

clases.forEach((clase) => {
    let div = document.createElement("div");
    div.className = "tarjeta";

    div.innerHTML = `
    <div id="left">
        <img src="./img/${clase.id}.jpg" alt="${clase.nombre}" />
    </div>
    <div id="right">
        <h1 class="nombre">${clase.nombre}</h1>
        <h2 class="raza">Raza: ${clase.raza}</h3>
        <h4 class="arma">Arma: ${clase.arma}</h4>
    </div>`

    container.append(div);
    console.log(div)
})