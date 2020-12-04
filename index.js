var http = require('http');


http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Hello Student!')
}).listen(8080);

console.log('Server started on localhost:8080, press ctrl+c to stop!')
