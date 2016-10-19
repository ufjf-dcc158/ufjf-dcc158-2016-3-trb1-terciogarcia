function posicaoEhValida(array, posicao){
    for(var i = 0; i < array.length; i++){
        if(posicao.x == array[i].x && posicao.y == array[i].y){
            return true;
        }
    }
    return false;
}

exports.posicaoEhValida = posicaoEhValida;