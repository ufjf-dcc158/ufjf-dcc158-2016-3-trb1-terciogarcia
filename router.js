const handlers = require('./requestHandlers');
var reqMap = {
  "": handlers.hello,
  "/": handlers.hello,
  "/index.html": handlers.hello,
  "/sobre.html": handlers.about,
  "/aleatorios.html": handlers.random,  
  "/primos.html": handlers.primos
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
