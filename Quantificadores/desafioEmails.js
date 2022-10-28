const texto = 'Os emails são: diegocantelli19@gmail.com fulano@info.com maria.silva@teste.com.br teste_silva@gmail.com.br'

// \w inclui o caracter _
const regex = /[\w.]+@\w{2,}\.\w{3}\.?\w{0,}/g

console.log(texto.match(regex))