const sub = (a, b) => a-b

const aplicOp = (a, b, operacao) => operacao (a, b)
let resultado = aplicOp (4, 1, sub)

console.log(resultado)

//Return
const somarX = (x) => (y) => x+y
const somar2 = somarX(2)

console.log(somar2(5))
