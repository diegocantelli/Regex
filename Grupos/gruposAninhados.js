const texto1 = 'supermercado hipermercado minimercado mercado'

// (super|hiper|mini)?: grupo opcional, pode ou nao conter estes prefixos na palavra
console.log(texto1.match(/(super|hiper|mini)?mercado/g))

// utilizando grupos aninhados
console.log(texto1.match(/((hi|su)per|mini)?mercado/g))