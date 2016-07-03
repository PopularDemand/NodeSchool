// var http = require('http');
// var bl = require('bl');

// function httpCollect(url) {
	// http.get(url, function (response) {
		// response.pipe(bl (function (err, data) {
			
			// if (err) {
			// console.error(err);
			// }
			
			// data = data.toString();
			// return data;
			
		// })
	// )}
// )}


var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

function printResults (){
	for (var i = 0; i <3; i++)
		console.log(results[i])
}
//this works because right after the data is collected from the site,
//it is pushed into a function that stores it
//the function iterates over numbers which does not allow
//http get to be working on all urls at once
function httpGet (index) {
	http.get(process.argv[2+index], function (response) {
		response.pipe(bl(function (err, data) {
			if (err)
				return console.error(err);
			
			results[index] = data.toString();
			count++
			
			if (count == 3)
				printResults();
		}))
	})
}

for (var i=0; i<3; i++)
	httpGet(i);

//learnyounode verify juggling-async.js