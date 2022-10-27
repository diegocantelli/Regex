// . ? * + - ^ $ | [] {} () \ :

const texto = '1,2,3,4,5,6,a.b c!d?e'
const regexPonto = /\./; // \. -> pelo fato do ponto ser um caracter especial, é preciso usar essa notacao
console.log(texto.match(regexPonto))