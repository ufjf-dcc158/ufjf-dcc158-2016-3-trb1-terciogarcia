function calculaPosCavalo(x, y) {
    var possibilidades = [
        { x: x + 2, y: y + 1 },
        { x: x + 2, y: y - 1 },
        { x: x - 2, y: y + 1 },
        { x: x - 2, y: y - 1 },
        { x: x + 1, y: y + 2 },
        { x: x + 1, y: y - 2 },
        { x: x - 1, y: y + 2 },
        { x: x - 1, y: y - 2 }
    ];
    var posicoes = [];

    for (var i = 0; i < possibilidades.length; i++) {
        if (0 > possibilidades[i].x < 9 && 0 > possibilidades[i].y < 9) {
            posicoes.push(possibilidades[i]);
        }
    }

    return posicoes;
}

exports.calculaPosCavalo = calculaPosCavalo;