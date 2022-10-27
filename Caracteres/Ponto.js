// . é um coringa válido para apenas uma posicao no texto

const texto = '1,2,3,4,5,6,7,8,9,0'

console.log(texto.match(/1.2/g)) // irá retornar a string 1,2
console.log(texto.match(/1..2/g)) // não irá retornar, pois nao existem 2 valores entre 1 e 2