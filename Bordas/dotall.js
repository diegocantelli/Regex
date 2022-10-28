const texto = 'Romario era um excelente jogador\n, mas hoje e um politico questionador'


console.log(texto.match(/^r.*r$/gi)) // busca texto que comecem com r e terminem com r, mas retorna null por causa do \n
console.log(texto.match(/^r(.|\n)*r$/gi)) // busca texto que comecem com r e terminem com r, e resolve o problema do \n