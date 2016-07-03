var fs = require('fs');
var path = require('path');

//directory
var dir = process.argv[2];

//extension
var extension = "." + process.argv[3];


// console.log(dir);
// console.log(extension);

fs.readdir(dir, function filterFiles (err, filesList) {
	for (var i=0; i < filesList.length; i++) {
		if (path.extname(filesList[i]) === extension) {
			console.log(filesList[i]);
		}
	}
})
