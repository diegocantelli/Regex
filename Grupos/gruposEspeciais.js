const texto = 'Joao e calmo, mas no transito, fica nervoso.'


// Positive lookahead
console.log(texto.match(/\w+\s?(?=,)/g)) //busca todas as palavras que possuem uma virgula na frente

// Negative lookahead
console.log(texto.match(/\w+\b(?!,)/g)) //busca todas as palavras que nao possuem virgula na frente