const texto = 'O José simao é muito engracado... hehehehe'

// agrupa o texto entre parentesis e busca pela quantidade de ocorrencias em uma palavra
console.log(texto.match(/(he)+/g))

const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag'
console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\w{2})?/g))