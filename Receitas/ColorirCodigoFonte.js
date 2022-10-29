const aplicaCor = (txt, reg, cor) => txt.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`)

const files = require('./file')
const texto = files.read('codigoFonte.html')

const codeRegex = /<code>[\s\S]*<\/code>/i
let codigo = texto.match(codeRegex)[0] // [0] irá retornar apenas o resultado da captura, sem as demais informacoes que o regex devolve

codigo = aplicaCor(codigo, /\b(package|public|class|static|if|else)\b/g, 'd857cf')

codigo = aplicaCor(codigo, /(\".*\")/g, 'ce9178')

codigo = aplicaCor(codigo, /\b(void|int)\b/g, '1385e2')
codigo = aplicaCor(codigo, /(\/\*[/s/S]*\*\/)/g, '1385e2')
codigo = aplicaCor(codigo, /(\/\/.*?\n)/g, '267703')

const conteudoFinal = texto.replace(codeRegex, codigo)
files.write('codigoFonte.html', conteudoFinal)

console.log(codigo)