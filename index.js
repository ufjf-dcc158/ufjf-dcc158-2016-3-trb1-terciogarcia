var server = require("./server.js");
var router = require("./router.js");

server.start(router);

var requestHandlers = require("./requestHandlers.js");