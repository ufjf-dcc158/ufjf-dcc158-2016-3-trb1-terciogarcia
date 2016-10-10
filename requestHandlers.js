var url = require('url');

function hello(request, response) {
  response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
  response.write("Hello World");
  response.end();
}

function notFound(request, response) {
  response.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
  response.write("<h1>Página não encontrada!</h1>");
  response.end();
}

function about(request, response) {
  response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
  response.write("<table border=\"1px\"");
  response.write("<tr><td>Nome</td><td>Tércio Lucas Miranda Garcia</td>");
  response.write("<tr><td>Número de Matrícula</td><td>201376025</td>");
  response.write("<tr><td>E-mail</td><td>tercio906@gmail.com</td></tr>");
  response.write("<tr><td>Curso</td><td>Sistemas de Informação</td></tr>");
  response.write("</table>");
  response.end();
}

function primos(request, response){
  var query = url.parse(request.url, true).query;
  var n1 = parseInt(query.n1);
  var n2 = parseInt(query.n2);
    console.log(n1,n2);

  if(!n1 || !n2){
    response.writeHead(400, {'Content-Type':'text/html; charset=utf-8'});
    response.write("<h1>Erro: n1 e n2 precisam ser informados.</h1>");
  }
  else if(n1 >= n2){
    response.writeHead(400, {'Content-Type':'text/html; charset=utf-8'});
    response.write("<h1>Erro: n1 deve ser menor que n2.</h1>");
  }
  else{
    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    response.write("<h1>Primos entre "+n1+" e "+n2+"</h1>");
  }

  response.end();
}

function random(request, response){
  var pares = [];
  var impares =[]
  for(var i =0; i < 100; i++){
    var random =  Math.floor(Math.random() * (100 - 1) + 1);
    if (random % 2 == 0){
      pares.push(random);
    }
    else{
      impares.push(random);
    }
  }

  var tamanho_pares = pares.length;
  var tamanho_impares = impares.length;

  response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'}); 
  response.write("Números pares: ");
  for(var i =0; i < tamanho_pares; i++){
      response.write(pares[i]+" ");
  }

  response.write("</br></br>Números ímpares: ");
  for(var i =0; i < tamanho_impares; i++){
      response.write(impares[i]+" ");
  }

  response.end(); 
}

exports.hello = hello;
exports.notFound = notFound;
exports.about = about;
exports.random = random;
exports.primos = primos;


