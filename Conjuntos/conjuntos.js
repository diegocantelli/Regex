const texto = "1,2,3,4,5,6,a.b c!d?e[f"

// para definir uma classe ou conjunto de caracteres usa-se []
const regexPares = /[02468]/g
console.log(texto.match(regexPares))

const texttNao = "não ou nao"
console.log(texttNao.match(/n[aã]./g))



