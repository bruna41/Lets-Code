// mãe
class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

// filha
class Cidadao extends Pessoa{
    constructor(nome, idade, rg, cpf){
        super(nome, idade)
        this.rg = rg
        this.cpf = cpf
    }
}
const cidadao = new Cidadao('Bruna', 23, '00000', '111111')
console.log(cidadao)
console.log(cidadao instanceof Cidadao) //true
console.log(cidadao instanceof Pessoa)  //true
// 'instanceof' se um objeto é ou não de determinado tipo