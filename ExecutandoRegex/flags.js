// g - global
// i - ignore case

const texto = 'Carlos assinou o abaixo assinado';
// console.log(texto.match(/C|ab/)); //como nao tem a flag g, ele busca apenas a primeira ocorrencia
console.log(texto.match(/c|ab/g)); //como nao tem a flag i, ele nao encontra a o C e passa para a proxima ocorrencia