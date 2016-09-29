var http = require('http');

http.createServer(onRequest).listen(8888);

function onRequest(request, response){
	response.writeHead(200, {"Content-type":"text/plain; charset=utf-8"});
	response.write("Hello World");
	response.end();
}
