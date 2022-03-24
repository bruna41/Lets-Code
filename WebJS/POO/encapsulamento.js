function Quadrado(base, altura){
    this.base = base
    this.altura = altura
    let cor = 'blue' //só pode ser acessado dentro do escopo
}

const quadrado = new Quadrado(3, 4)
quadrado.cor = 'red' //atributo criado
console.log(quadrado.cor)

function createQuadrado(base, altura){

    let cor = 'blue'
  
    return {
      base,
      altura,
      getCor : function() { return cor }
    }
  
}
  
  const quadrado2 = createQuadrado(3,4);
  console.log(quadrado2);
  //{ base: 3, altura: 4, getCor: [Function: getCor] }
  console.log(quadrado2.cor);
  //undefined
  quadrado2.cor = 'red';
  console.log(quadrado2.cor);
  //red
  console.log(quadrado2.getCor());
  //blue  

  class Quadrado2{
  
    constructor(lado, altura){
      let cor = 'blue';
      this.lado = lado;
      this.altura = altura;
      this.getCor = () => { return cor; };
    }
  }
  
  const quadrado3 = new Quadrado2(3,4);
  console.log(quadrado3);
  //Quadrado { lado: 3, altura: 4, getCor: [Function], setCor: [Function] }
  console.log(quadrado3.getCor());
  //blue
  quadrado3.cor = 'red'; //errado! cria um atributo cor a mais no objeto!
  console.log(quadrado3.cor);
  //red
  console.log(quadrado3.getCor());
  //blue