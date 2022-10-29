const texto = 'Ola ola testo testo repetido repetido'

// retorna todos os textos repetidos em sequencia
// 1 - (\w+) -> captura um grupo de caracteres
// 2 - (\w+)\s -> captura um grupo de caracters seguidos de espaco
// 3 - (\w+)\s\1 -> captura uma grupo de caracteres seguidos de espaco e que logo após cotenham um texto já capturado no passo 1
const regex = /(\w+)\s\1/gi

console.log(texto.match(regex))