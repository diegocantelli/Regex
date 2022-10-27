const texto = "1,2,3,4,5,6,a.b c!d?e[f"

// console.log(texto.match(/[2-4]/g)) //define dentro do conjunto um intervalo de valores a serem buscados
// console.log(texto.match(/[a-d]/g))
console.log(texto.match(/[A-Z1-3]/gi))