const vetor = [1,2,3,4,5,6];
const soma = vetor.reduce((estado, item) => estado + item);

console.log(soma)

//Exemplo
const matriz = [
    [1, 2, 3, 4, 5, 6],
    [6, 5, 4, 3, 2, 1],
    [6, 1, 5, 2, 3, 4]
]

const somaColuna = (estado2, item2) => {
    return [estado2[0] + item2[0] + item2[1], estado2[1] + item2[2] + item2[3], estado2[2] + item2[2] + item2[2]]
}

const vetor2 = matriz.reduce(somaColuna, [0, 0, 0])
console.log(vetor2)