/* funções */

function sayMyName(name) {
    console.log('your name is ' + name);
}

sayMyName('gabi')

/* ---------------------------------------------------------------- */

function quadrado(valor) {
    return valor*valor;
}

const calculoQuadrado = quadrado(13)
console.log(calculoQuadrado)

/* ---------------------------------------------------------------- */

function incrementarJuros(valor, percentualJuros) {
    const valorAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 50));
