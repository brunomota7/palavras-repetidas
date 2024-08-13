function filtraOcorrencias(paragrafo) {
    //Pega um objeto e retorna uma array com todas as chaves desse objeto
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1)
}

function montaSaidaArquivo(listaPalavras) {
    let textoFinal= ''
    listaPalavras.forEach((paragrafo, indice) => {
        const duplicadas = filtraOcorrencias(paragrafo).join(', ')
        textoFinal += `Palavras duplicadas no parágrafo ${indice + 1}: 
        ${duplicadas} \n`
    })

    return textoFinal
}

export { montaSaidaArquivo}