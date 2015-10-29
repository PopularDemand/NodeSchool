var myModule = require('./module.js');

var dir = process.argv[2];
var ext = process.argv[3];

myModule(dir, ext, function(err, list){
	if (err) {
		return console.error('Error: ', err);
	}
	//'list' is the filtered list from the module
	list.forEach(function (file){
		console.log(file);
	})
})