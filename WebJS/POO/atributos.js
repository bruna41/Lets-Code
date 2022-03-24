class Quadrado{
    constructor (base, altura){
        if(isNaN(base) || isNaN(altura)) throw 'Não é um número'
        this.base = base
        this.altura = altura
        this.cor = undefined
    }
}
quadrado.cor = 'vermelho'