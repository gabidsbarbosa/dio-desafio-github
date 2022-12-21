/* faça um programa para calcular o valor do combustível em uma viagem.
3 variáveis = preço do combustível, valor médio gasto de combustível carro por km e distância em km */

const precoCombustivel = 5.25;
const combustivelKm = 8;
const distanciaKm = 80;

const litrosConsumidos = distanciaKm / combustivelKm;
const valorGasto = combustivelKm * precoCombustivel;

console.log(valorGasto);

/* usar o toFixed para arredondamento e definir a quantidade de casas decimais que serão imprimidas */