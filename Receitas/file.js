const fs = require('fs')
const { dirname } = require('path')

const read = nomeArquivo => {
    return fs.readFileSync(`${__dirname}/originais/${nomeArquivo}`, { encoding: 'utf8' })
}

const write = (nomeArquivo, conteudo) => {
    const dirName = `${__dirname}/alterados`
    if(!fs.existsSync(dirName)){
        fs.mkdirSync(dirname)
    }

    fs.writeFileSync(`${dirName}/${nomeArquivo}`, conteudo, { encoding: 'utf8' })
}

module.exports = { read, write }