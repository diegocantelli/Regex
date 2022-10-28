const texto = 'O joao recebeu 120 milhoes milhões apostando 6 9 21 23 45 46'

// {} -> utiliza-se para expressar que se deseja obter um determinado numero de caracteres, pondendo este valor ser dinamico

console.log(texto.match(/\d{1,2}/g)) //busca todos os numeros que possuem 1 ou 2 digitos
console.log(texto.match(/\d{2}/g)) // busca todos os numeros que possuem 2 digitos
console.log(texto.match(/\d{1,}/g)) // busca todos os numeros que possuem 1 ou mais digitos
console.log(texto.match(/\w{7}/g)) // busca todas as palavras que possuem 7 caracteres
console.log(texto.match(/[\wõ]{7,}/g)) // busca todas as palavras que possuem 7 caracteres ou mais, incluindo o caracter õ