const fs = require('fs')

function verificaAprovacao(number) {
   if(typeof(number) !== 'number') {
       return 'valor deve ser numérico' 
   } else if (number < 0) {
       return 'negativo'
   } else if (number == 0) {
       return 'neutro'
   } else if (number > 0) {
      return 'positivo'
   } else {
       return 'em analise'
   }
}

function escreveArquivo(nameFile, contentFile) {

    try {
        fs.writeFileSync(`${nameFile}`, contentFile);
        const conteudo = fs.readFileSync(nameFile, 'utf-8')

        return conteudo
    } catch (erro) {
        return erro.message
    }
}

module.exports = {
    verificaAprovacao,
    escreveArquivo,
}