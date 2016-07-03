var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response) {
	//send and log info with bl and log the way
	//function describes
	response.pipe(bl(function (err, data) {
		console.log(data.length);
		console.log(data.toString());
	}))
})

//learnyounode verify http-collect.js