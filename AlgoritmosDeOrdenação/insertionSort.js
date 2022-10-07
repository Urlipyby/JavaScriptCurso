const livros = require('./listaLivros')
const trocaPosicao = require('./trocaPosicao')


function insertionSort(lista){

    for (let atual = 1; atual < lista.length; atual++){
        let analise = atual
        while(analise > 0 && lista[analise].preco < lista[analise - 1].preco){

            trocaPosicao(lista, analise)

            analise--
        }
    }
    console.table(lista)
}

insertionSort(livros)