const texto = '<div>Conteudo 1</div><div>Conteudo 2</div>'

// quantificadores sao gulosos por default
console.log(texto.match(/<div>.+<\/div>/g)) // busca 'n' caracteres que estejam entre as tags div
console.log(texto.match(/<div>.*<\/div>/g)) // busca 'n' caracteres que estejam entre as tags div

// quantificadores operadores nao lazy
console.log(texto.match(/<div>.+?<\/div>/g)) // busca 'n' caracteres que estejam entre as tags div, mas retorna as ocorrencias em um array
console.log(texto.match(/<div>.*?<\/div>/g)) // busca 'n' caracteres que estejam entre as tags div, mas retorna as ocorrencias em um array
