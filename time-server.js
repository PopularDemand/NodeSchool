var net = require('net');
var strftime = require('strftime');
var date = strftime('%Y-%m-%d %H:%M');

var server = net.createServer(function (socket) {
	socket.end(date+ '\n');
})

server.listen(process.argv[2]);


//learnyounode verify time-server.js