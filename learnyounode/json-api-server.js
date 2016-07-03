var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
	var parsed = url.parse(req.url, true);
	var date = new Date(Date.parse(parsed.query.iso));
	var dateUnix = Date.parse(parsed.query.iso);
	var pathname = url.pathname;
	var result;
	//var dateUnix = date.getTime();

	var hour = date.getHours()
	//console.log(hour);
	//14,16
	var minute = date.getMinutes();
	//17,19
	var second = date.getSeconds();

	//res.writeHead(200, {'Content-Type': 'application/json'});


	if (pathname == '/api/parsetime'){
		result = {
		"hour": hour,
		"minute": minute,
		"second": second
	}
	}

	else if (pathname === '/api/unixtime') {
		result = {
			"unixtime": dateUnix
		}
	}

	if (result) {
		res.writeHead(200, {'Content-Type': 'application/json'});

		res.end(JSON.stringify(result));
	}
})

server.listen(process.argv[2]);

//learnyounode verify json-api-server.js
//node -pe "require('url').parse('/test?q=1', true)"

//var http = require('http'), url = require('url'); function parseRoutes(url) { if (url.pathname === '/api/parsetime') { var date = new Date(url.query.iso); return { hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() }; } else if (url.pathname === '/api/unixtime') { return { unixtime: new Date(url.query.iso).getTime() }; } else return null; } var server = http.createServer(function (req, res) { var urlPath = url.parse(req.url, true), resourse = parseRoutes(urlPath); res.end(JSON.stringify(resourse)); if (resourse) { res.writeHead(200, { 'Content-Type': 'application/json' }); res.end(JSON.stringify(resourse)); } else { res.writeHead(404); res.end(); } }); server.listen(process.argv[2])