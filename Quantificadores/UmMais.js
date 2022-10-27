const texto1 = 'De longe eu avistei o fogo uma pessoa gritando: FOGOOOOO'
const texto2= 'There is a fog in NYC'

// + -> um ou mais
const regex = /fogo+/gi //efetua a busca em palavras que possuam pelo menos uma letra O ou mais
console.log(texto1.match(regex)) // irá retornar fogo e FOGOOOOO
console.log(texto2.match(regex)) // não irá retornar fog, pois nao tem o último o na palavra

const texto3 = 'Os numeros sao: 1023456789.'
console.log(texto3.match(/\d+/g)) // retorna os numeros do grupo numerico de forma agrupada, independente da ordem em que estejam no texto

