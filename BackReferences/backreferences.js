const texto = 'Ola ola testo testo repetido repetido'

// retorna todos os textos repetidos em sequencia
// 1 - (\w+) -> captura um grupo de caracteres
// 2 - (\w+)\s -> captura um grupo de caracters seguidos de espaco
// 3 - (\w+)\s\1 -> captura uma grupo de caracteres seguidos de espaco e que logo após cotenham um texto já capturado no passo 1
const regex = /(\w+)\s\1/gi

console.log(texto.match(regex))

const texto2 = `<strong>strong tag</strong><i>italic tag</i>`

// *?: ao utilizar o ? na frente do quantificador, ele torna o quantificador nao greedy, ou seja, ira pegar apenas os elementos
// que dao match e ira separa-los no array de retorno do regex
const regex2 = /<[^>]+>.*?<\/[^>]+>/gim

console.log(texto2.match(regex2))

// caso as tags de abertura e fechamento nao sejam as mesmas, nao irá dar match
const regex3 = /<(\w*)[^>]*>.*?</\1>/gmi
console.log(texto2.match(regex3))