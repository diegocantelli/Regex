const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexVirgula = /,/g;

console.log(texto.match(regexVirgula)) //retorna todas as ocorrencias de virgula