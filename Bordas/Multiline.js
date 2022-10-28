const texto = `dsadasdad popopopd
bsuauibsaiub asdsadab`

console.log(texto.match(/^(\w).+\1$/gim)) //retorna todas as linhas que comecam com uma letra especifica e terminam com esta mesma letra