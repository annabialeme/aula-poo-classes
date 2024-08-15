class Pessoa {
    constructor(nome,idade,altura)
{
    this.nome = nome
    this.idade = idade
    this.altura = altura

}
seApresentar(){
    console.log(`olá, meu nome é ${this.nome }, tenho ${this.idade} anos de idade e tenho ${this.altura} de altura`);
}
}

const user = new Pessoa ("Bibia", 16, 1.64)
const user1 = new Pessoa ("Bia", 17, 1.80)

user.seApresentar();
console.log(user);
console.log(user1);