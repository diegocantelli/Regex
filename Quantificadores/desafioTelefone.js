const texto = 'Lista telefonica: - (11) 99999-5475 - 98888-4343'

const regex = /\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g

console.log(texto.match(regex))