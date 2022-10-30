// A Senha deve comecar com apenas letras maiúsculas ou minúsculas
// A senha deve ter no minimo 2 caracteres e nao podem finalizar com número
// Quando houver números, estes devem estar no final da senha

const senha = 'JackOfAllTrades' // valida
const senha2 = '1JackOfAllTrades' // invalida
const senha3 = '13' // invalida

const regex = /^[A-Za-z]{2,}\d*$/gi

console.log(senha3.match(regex))

