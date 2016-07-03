var fs = require('fs');
var numLines = 0;
fs.readFile(process.argv[2], 'utf8', function finishedReading (error, fileData) {
	numLines = fileData.split('\n').length - 1;
	console.log(numLines);
})

