class Quadrado{
  
    constructor(base, altura){
      let cor = 'blue'
      this.base = base
      this.altura = altura
      this.getCor = () => {return cor}
      this.setCor = (c) => {cor = c}
    }
}

const quadrado = new Quadrado
quadrado.setCor('red') // muda o valor de getCor
console.log(quadrado.getCor())

class Quadrado2{
    constructor(base, altura){
        this._cor = 'blue' //Accessors(_) -> propriedade privada
        this.base = base
        this.altura = altura
    }
    get cor() {return this._cor}
    set cor(cor) {this._cor = cor}
}

const quadrado2 = new Quadrado2(3, 4)
console.log(quadrado2.cor)
quadrado2.cor = 'red'
console.log(quadrado2.cor)