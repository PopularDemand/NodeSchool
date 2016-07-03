var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {
	var data = fs.createReadStream(process.argv[3]);
	data.pipe(res);
})

server.listen(process.argv[2]);

//learnyounode verify http-file-server.js

// var server = http.createServer(function (req, res){
	// res.writeHEad(200, { 'content-type': 'text/plain'});
	
	// fs.createReadStream(process.argv[3]).pipe(res);
// })

// server.listen(Number(process.argv[2]));