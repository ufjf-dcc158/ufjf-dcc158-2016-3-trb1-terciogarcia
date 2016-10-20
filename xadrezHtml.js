var validaPosicao = require('./validaPosicao');
var calculaPosicoes = require('./calculaPosicoes');
var fs = require("fs");

function imprimeXadrez(linha, coluna) {
    var posicoes = calculaPosicoes.calculaPosCavalo(linha, coluna);
    var xadrez = '';
 	var css = fs.readFileSync('xadrez.css', 'utf8');   
    xadrez += "<style>"+css+"</style>";
    xadrez += '<table class="tabuleiro">';

    for (var i = 1; i < 9; i++) {
        xadrez += '<tr>';
        for (var j = 1; j < 9; j++) {
            if (validaPosicao.posicaoEhValida(posicoes, { x: i, y: j })) {
                xadrez += '<td style="background: blue">';
            } else {
                xadrez += '<td>';
            }
            if (i == linha && j == coluna) {
                xadrez += '<div class="cavalo">&#9822;</div>';
            }
            xadrez += '</td>';
        }
        xadrez += '</tr>';
    }
    xadrez += '</table>'
    return xadrez;	
}

module.exports.imprimeXadrez = imprimeXadrez;
