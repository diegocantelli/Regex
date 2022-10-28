const texto = '<b>texto1</b><strong>strong</strong><div>div</div>'

// <(\w+)> -> captura qualquer texto que esteja entre <>
// .* -> captura qualquer quantidade de caracteres que venham apoos a abertura de alguma tag
// <\/\1> -> adiciona uma tag de fechamento com base no primeiro grupo capurado(br, div ou strong), que sera adicionado dentro de </ [conteudo]>
console.log(texto.match(/<(\w+)>.*<\/\1>/g))

const texto2 = '2222 22434343.9'
console.log(texto2.match(/([\d{3,}\.])\1/g))

const texto3 = 'Lentamente e mente muito lenta'
 //caputura nos grupos tudo que possui lenta e mente e uma quantidade n de caracteres apos essas palavras
 // e exibe todas as ocorrencias que estao no segundo grupo (mente) e que possuam n caracteres apos
console.log(texto3.match(/(lenta)(mente).*\2/gi)) // lentamente mente

//caputura nos grupos tudo que possui lenta e mente e uma quantidade n de caracteres apos essas palavras
 // e exibe todas as ocorrencias que estao no primeiro grupo (lenta) e que possua n caracteres apos ela
console.log(texto3.match(/(lenta)(mente).*\1/gi)) //Lentamente e mente muito lenta