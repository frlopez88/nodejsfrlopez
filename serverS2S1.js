var http = require('http');

http.createServer( function(req, res){

	res.writeHead(200, {'Content-Type': 'text/plain'});


	// Rutina de Codigo que se desea realizar 

	res.end("Hola Mundo con NodeJs");

}).listen(8080);