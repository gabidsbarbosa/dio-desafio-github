/* faça um algoritmo que calcule e imprima a média de um aluno, dado 3 notas, e imprima se ele foi aprovado, reprovado ou ficará de recuperação 

media = (nota 1 + nota 2 + nota 3) / 3

situação:
> média menor que 5, reprovado;
> média entre 5 e 7, recueração;
> média acima de 7, aprovado;

*/

const nota1 = 8;
const nota2 = 9;
const nota3 = 4;
const mediaAluno = (nota1 + nota2 + nota3) / 3;
console.log(mediaAluno);

if (mediaAluno < 5) {
    console.log('reprovado');
}
else if (mediaAluno >= 5 && mediaAluno <= 7) {
    console.log('recuperação');
}
else {
    console.log('aprovado');
}

