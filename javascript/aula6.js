/* objetos e classes */

const pessoa = {
    nome: 'Gabriela da Silva Barosa',
    idade: 20,
    descrever() {
        console.log('meu nome é ${this.nome} e minha idade é ${this.idade}' );
    }
};

pessoa.descrever();



const atributo = 'idade';

console.log(pessoa[atributo])