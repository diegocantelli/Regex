const texto = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

console.log(texto.match(/\bdia\w+/gi)) // palavras que iniciam com dia
console.log(texto.match(/\w+dia\b/gi)) // palavras que terminam com dia