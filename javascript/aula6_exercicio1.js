/* Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. */


class Carro {
    marca;
    cor;
    combustivelPorKm;

    constructor(marca, cor, combustivelPorKm) {
        this.marca = marca;
        this.cor = cor; 
        this.combustivelPorKm = combustivelPorKm;
    }

    calcularGastoPorPercurso(distanciaKm, precoCombustivel) {
        return distanciaKm * this.combustivelPorKm * precoCombustivel;
    }
}

const gol = new Carro ('volkswagen', 'azul', 1/9);

console.log(gol);
console.log(gol.calcularGastoPorPercurso(100, 5));