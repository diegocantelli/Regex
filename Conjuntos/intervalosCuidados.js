const texto = 'ABC [abc] a-c 1234';

// irá exibir o caracter colchete, pois neste intervalor da tabela UNICODE se encontra este caracter
// Os intervalos tem que ser a ordem em que os elementos estao definidos na tabela UNICODE
// EX: nao pode conter [4-1] ou [a-Z]
console.log(texto.match(/[Z-a]/g)) 