    // frase e letra sao parametros de funcao, sao o mesmo 
    // que variaveis, a diferenca e que elas assumem o valor de quando
    // a funcao e chamada
function vezesLetraAparece (frase, letra) {
    // total comeca com 0 pq ele precisa contar quantas letras vai ter
    // na frase
    var total = 0;
    // o for é necessário para executar o programa enquanto uma condicao
    // for verdadeira, neste caso ele precisa percorrer todas as letras
    // da frase

    // o i comeca com zero para indicar a primeira posicao da frase
    // apos o primeiro ; a variavel i e comparado com o tamanho da frase
    // se i for menor que o tamanho da frase, entao codigo do escopo do
    // for sera executado.  

    // No final do for i é incrementado em 1 e depois i e comparado com
    // o tamanho da fase novamente, se a condicao continuar verdadeira
    // o codigo sera executado 
    for (var i = 0;  i < frase.length; i++) {
        // nao precisa abrir chave quando so tem uma linha 
        // para executar
        if (frase[i]===letra)total++;
    }
    return total;
}