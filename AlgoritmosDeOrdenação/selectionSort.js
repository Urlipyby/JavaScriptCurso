const livros = require('./listaLivros')
const menorValor = require('./menorValor')
const trocaPosicao = require('./trocaPosicao')

for(let atual = 0; atual < livros.length - 1; atual++){
    
    let menor = menorValor(livros, atual)
    trocaPosicao(livros, menor)
}

console.table(livros)