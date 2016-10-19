var url = require('url');
var queryString = require('querystring');
var xadrezHtml = require('./xadrezHtml');

function index(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.write("<a href=\"sobre.html\">Sobre</a><br>");
    response.write("<a href=\"aleatorios.html\">Aleatórios</a><br>");
    response.write("<a href=\"primos.html\">Primos</a><br>");
    response.write("<a href=\"equacao.html\">Equação</a><br>");
    response.write("<a href=\"xadrez.html\">Xadrez</a><br>");
    response.write("<a href=\"xadrez.json\">Xadrez JSON</a><br>");
    response.end();
}

function notFound(request, response) {
    response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    response.write("<h1>Página não encontrada!</h1>");
    response.end();
}

function about(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.write("<table border=\"1px\">");
    response.write("<tr><td>Nome</td><td>Tércio Lucas Miranda Garcia</td>");
    response.write("<tr><td>Número de Matrícula</td><td>201376025</td>");
    response.write("<tr><td>E-mail</td><td>tercio906@gmail.com</td></tr>");
    response.write("<tr><td>Curso</td><td>Sistemas de Informação</td></tr>");
    response.write("</table>");
    response.end();
}

function equacao(request, response) {
    if (request.method == 'GET') {
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        response.write("<h1>Informe 3 números inteiros para a equação ax²+bx+c=0</h1>");
        response.write("<form action=\"equacao.html\" method=\"post\">");
        response.write("Valor de a:<br>");
        response.write("<input type=\"text\" name=\"a\"><br>");
        response.write("Valor de b:<br>");
        response.write("<input type=\"text\" name=\"b\"><br>");
        response.write("Valor de c:<br>");
        response.write("<input type=\"text\" name=\"c\"><br>");
        response.write("<br><input type=\"submit\" value=\"Enviar\">");
        response.write("</form>");
        response.end();
    } else if (request.method == 'POST') {
        var body = "";
        request.on('data', function(data) {
            body = body + data;
        });

        request.on('end', function() {
            var dados = queryString.parse(body);
            var a = parseInt(dados.a);
            var b = parseInt(dados.b);
            var c = parseInt(dados.c);
            if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {

                var delta = b * b - (4 * a * c);
                response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                if (delta < 0) {
                    response.write("<h1>A equação não possui raizes reais.</h1>");
                } else {
                    var x1 = (-b + Math.sqrt(delta)) / (2 * a);
                    var x2 = (-b - Math.sqrt(delta)) / (2 * a);
                    response.write("<h1>X1: " + x1 + " e X2: " + x2 + "</h1>");
                }
            } else {
                response.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
                response.write("<h1>Erro: informe valores válidos para a, b e c</h1>");
            }
            response.end();
        });
    }
}

function primos(request, response) {
    var query = url.parse(request.url, true).query;
    var n1 = parseInt(query.n1);
    var n2 = parseInt(query.n2);
    console.log(n1, n2);

    if (!n1 || !n2) {
        response.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
        response.write("<h1>Erro: n1 e n2 precisam ser informados.</h1>");
    } else if (n1 >= n2) {
        response.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
        response.write("<h1>Erro: n1 deve ser menor que n2.</h1>");
    } else if (n1 >= 100 || n2 >= 100) {
        response.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
        response.write("<h1>Erro: n1 e n2 devem ser menores que 100.</h1>");
    } else {
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        response.write("<h1>Primos entre " + n1 + " e " + n2 + "</h1>");

        if (n1 == 1) {
            n1++;
        }

        if (n1 == 2) {
            response.write(2 + " ");
        }

        for (var i = n1; i <= n2; i++) {
            if (i % 2 != 0) {
                var primo = true;
                var limite = Math.sqrt(i);
                for (var j = 3; j <= limite; j += 2) {
                    if (i % j == 0) {
                        primo = false;
                        break;
                    }
                }
                if (primo) {
                    response.write(i + " ");
                }
            }

        }

    }

    response.end();
}

function random(request, response) {
    var pares = [];
    var impares = []
    for (var i = 0; i < 100; i++) {
        var random = Math.floor(Math.random() * (100 - 1) + 1);
        if (random % 2 == 0) {
            pares.push(random);
        } else {
            impares.push(random);
        }
    }

    var tamanho_pares = pares.length;
    var tamanho_impares = impares.length;

    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.write("Números pares: ");
    for (var i = 0; i < tamanho_pares; i++) {
        response.write(pares[i] + " ");
    }

    response.write("</br></br>Números ímpares: ");
    for (var i = 0; i < tamanho_impares; i++) {
        response.write(impares[i] + " ");
    }

    response.end();
}

function xadrez(request, response) {
    var linha, coluna;
    if (request.method == 'GET') {
        var query = url.parse(request.url, true).query;
        linha = parseInt(query.linha);
        coluna = parseInt(query.coluna);

        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        var xadrez = xadrezHtml.imprimeXadrez(linha, coluna);
        response.write(xadrez);
        response.end();
    }
    else if (request.method == 'POST') {
        var body = "";
        request.on('data', function(data) {
            body = body + data;
        });

        request.on('end', function() {
            var dados = queryString.parse(body);
            linha = dados.linha;
            coluna = dados.coluna;
        });
    }
}


exports.index = index;
exports.notFound = notFound;
exports.about = about;
exports.primos = primos;
exports.random = random;
exports.equacao = equacao;
exports.xadrez = xadrez;
