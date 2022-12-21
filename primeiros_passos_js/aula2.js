/* um */
const numero = 36;
const numeroPar = (numero % 2) === 0;

console.log(numeroPar)

/* dois */
const numero2 = 144;
const numeroPar2 = (numero2 % 2) === 0;

if (numeroPar2) {
    console.log('executei');
}

/* tres */
const numero3 = 0;
const numeroPar3 = (numero3 % 2) === 0;
console.log(numeroPar3);

if (numeroPar3) {
    console.log('par');
} 
else {
    console.log('ímpar');
}

/* quatro */
const numero4 = 3;
const numeroDivisivel5 = (numero4 % 5) === 0;

if (numero4 === 0) {
    console.log('o número é inválido');
}
else if (numeroDivisivel5) {
    console.log('sim');
} 
else {
    console.log('não');
}


