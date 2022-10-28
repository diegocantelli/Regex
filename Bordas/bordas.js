const texto = 'Romario era um excelente jogador\n, mas hoje e um politico questionador'

console.log(texto.match(/^r/gi)) // busca no inicio da linha
console.log(texto.match(/r$/gi)) // busca no final da linha
console.log(texto.match(/^r.*r$/gi)) // busca texto que comecem com r e terminem com r