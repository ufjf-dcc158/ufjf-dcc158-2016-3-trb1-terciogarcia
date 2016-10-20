var validaPosicao = require('./validaPosicao');
var calculaPosicoes = require('./calculaPosicoes');

function geraXadrez(linha, coluna) {
    var posicoes = calculaPosicoes.calculaPosCavalo(linha, coluna);
    var xadrez = {};

    for (var i = 1; i < 9; i++) {
        var arraylinha = [];
        for (var j = 1; j < 9; j++) {
            if (validaPosicao.posicaoEhValida(posicoes, { x: i, y: j })) {
                arraylinha.push('X');
            } else if (i == linha && j == coluna) {
                arraylinha.push('C');
            } else if ((i % 2 != 0 && j % 2 == 0) || (i % 2 == 0 && j % 2 != 0)) {
                arraylinha.push("0");
            } else {
                arraylinha.push("1");
            }
        }
        xadrez['L'+i] = arraylinha;
    }
    console.log(xadrez);
    return xadrez;
}

module.exports.geraXadrez = geraXadrez;
