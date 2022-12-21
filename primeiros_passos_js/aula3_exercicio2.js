/* o IMC é um critério da OMS para dar indicação sobre a condição de peso de uma pessoa adulta

fórmula: 
IMC = peso / (altura*altura)

elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:

    > abaixo de 18.5: abaixo do peso;
    > entre 18.5 e 25: peso normal;
    > entre 25 e 30: acima do peso;
    > entre 30 e 40: obeso;
    > acima de 40: obesidade grave;

*/

const peso = 65;
const altura = 1.65;
const imc = peso / (altura*altura);
console.log(imc.toFixed(2));

if (imc < 18.5) {
    console.log('abaixo do peso');
}
else if (imc >= 18.5 && imc < 25) {
    console.log('peso normal');
}
else if (imc >= 25 && imc < 30) {
    console.log('acima do peso');
}
else if (imc >= 30 && imc < 40) {
    console.log('obeso');
}
else {
    console.log('obesidade grave');
}