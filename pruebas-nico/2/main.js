const calcular = (x, y) => {
    x = document.getElementById('valor1');
    y = document.getElementById('valor2');

    resultado.innerText = Number(x.value) + Number(y.value);
    console.log(Number(resultado.innerText))
    
    if(Number(resultado.innerText) > 1000) {
        resultado.style.color = 'green';
    } else if (Number(resultado.innerText) < 200) {
        resultado.style.color = 'red';
    }
}

const reset = () => {
    document.querySelector('#valor1').value = "";
    document.querySelector('#valor2').value = "";
    resultado.innerText = "";
}

const valor1 = document.getElementById('valor1');
const valor2 = document.getElementById('valor2');
const resultado = document.getElementById('resultado');

if(Number(resultado.innerText) > 100) {
    resultado.style.color = 'green';
}

const test = document.querySelectorAll('li');

for (i = 0; i < test.length; i++) {
    let colores = ['red', 'green', 'yellow', 'brown'];

    test[i].style.color = colores[i];
    test[i].style.backgroundColor = colores[(colores.length-1)-i];
}

console.log(test);