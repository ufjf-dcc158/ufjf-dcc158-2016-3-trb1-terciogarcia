const handlers = require('./requestHandlers');
var reqMap = {
    "": handlers.index,
    "/": handlers.index,
    "/index.html": handlers.index,
    "/sobre.html": handlers.about,
    "/aleatorios.html": handlers.random,
    "/primos.html": handlers.primos,
    "/equacao.html": handlers.equacao,
    "/xadrez.html": handlers.xadrez
};

function route(pathname, request, response) {
    console.log("Routing: ", pathname);
    if (reqMap[pathname]) {
        reqMap[pathname](request, response);
    } else {
        handlers.notFound(request, response);
    }
};

module.exports.route = route;
