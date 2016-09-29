var http = require('http');

http.createServer(onRequest).listen(process.env.PORT);

function onRequest(request, response){
	response.writeHead(200, {"Content-type":"text/plain; charset=utf-8"});
	response.write("Hello World");
	response.end();
}
