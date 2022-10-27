const texto = "Casa bonita é a casa amarela da esquina com a Rua ACASALAR"

const regex = /casa/gi
console.log(texto.match(regex)); //irá retornar inclusive o trecho CASA dentro de ACASALAR