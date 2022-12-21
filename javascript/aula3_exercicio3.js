/* elabore um algoritmo que calcule o que deve ser ágo por um produto, considerando o preço normal de etiqueta e a escolha da forma de pagamento.

utilize ps códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado

condição de pagamento:
    1. à vista débito: recebe 10% de desconto;
    2. à vista no dinheiro ou pix: recebe 15% de desconto;
    3. em duas vezes: preço normal de etiqueta sem juros;
    4. acima de duas vezes: preço normal de etiqueta mais juros de 10%;

*/

const precoEtiqueta = 100;
const formaPagamento = 2;

if (formaPagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta*0.1));
}
else if (formaPagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta*0.15));
}
else if (formaPagamento === 3) {
    console.log(precoEtiqueta)
}
else {
    console.log(precoEtiqueta + (precoEtiqueta*0.10))
}


