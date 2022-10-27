const texto1 = 'De longe eu avistei o fogo uma pessoa gritando: FOGOOOOO'
const texto2= 'There is a fog in NYC'

// * -> zero ou mais
const regex = /fogo*/gi //efetua a busca em palavras que possuam nenhuma ou mais letras O em seu final
console.log(texto1.match(regex)) // irá retornar fogo e FOGOOOOO
console.log(texto2.match(regex)) // irá retornar fog


