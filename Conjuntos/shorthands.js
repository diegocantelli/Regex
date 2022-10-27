const texto = '1,2,3,4,a.b c!d'

console.log(texto.match(/\d/g)) //captura todos os numeros [0-9]
console.log(texto.match(/\D/g)) //captura todos os nao numeros [ˆ0-9]

console.log(texto.match(/\w/g)) //captura todos os caracteres [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) //captura todos os nao caracteres [ˆa-zA-Z0-9_]
console.log(texto.match(/\s/g)) //captura todos os espacos [\t\n\r\f]