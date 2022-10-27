const texto1 = 'De longe eu avistei o fogo uma pessoa gritando: FOGOOOOO'
const texto2= 'There is a fog in NYC'

// ? -> zero ou um (opcional)
const regex = /fogo?/gi //busca considerando casos onde exista o ultimo o ou nao exista
console.log(texto1.match(regex))
console.log(texto2.match(regex))

