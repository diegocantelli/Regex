const texto = 'Os Cpfs são: 368.095.258-90 e 123.456.789-10 ';

const regex = /\d{3}\.\d{3}.\d{3}-\d{2}/g

console.log(texto.match(regex))