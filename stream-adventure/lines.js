var through = require('through2');
var split = require('split');
var count = 1;

var everyOther = function(line, _, next) {
	if (count % 2 == 0) {line = line.toString().toLowerCase()}
	else {line = line.toString().toUpperCase()};
	count++;
	this.push(line);
	next();
}

process.stdin
	.pipe(through(everyOther))
	.pipe(process.stdout);