"use strict";
var http = require("http");

var server = http.createServer(function (req, res) {
    res.writeHead(200, {"contentType": "text/plain"});
    res.end('Hola mundo')
});

server.listen(8080);