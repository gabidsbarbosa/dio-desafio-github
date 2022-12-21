/* faça um programa para calcular o valor do combustível em uma viagem.
5 variáveis = preço do combustível (pode ser etanol ou gasolina), qual o tipo do combustível, valor médio 
gasto de combustível carro por km e distância em km */

const precoEtanol = 4.75;
const precoGasolina = 5.95;
const combustivelKm = 8;
const distanciaKm = 80;
const combustivelTipo = 'gasolina';

const litrosConsumidos = distanciaKm / combustivelKm;

if (combustivelTipo === 'etanol') {
    const valorGasto = combustivelKm * precoEtanol;
    console.log(valorGasto.toFixed(2));
}
else {
    const valorGasto = combustivelKm * precoGasolina;
    console.log(valorGasto.toFixed(2));
}

