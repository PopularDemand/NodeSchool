http = require('http');

http.get(process.argv[2], function callback(response) {
	response.setEncoding('utf8').on('data', function (data) {
		console.log(data);
	})
})

/*or 
var http = require('http');
http.get(process.argv[2], function(response) {
	response.setEncoding('utf8');
	response.on('data', console.log);
	response.on('error', console.error)
}) */