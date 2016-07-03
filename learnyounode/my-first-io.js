// to load global module:
// require('module')

var fs = require('fs');

//path to file
var file = process.argv[2];

//reading the file returns a buffer object, turn to string
var contents = fs.readFileSync(file).toString();
var content_array = contents.split('\n');

//number of new lines
var num = content_array.length - 1;

console.log(num);


/* How the pros do it:

var fs = require('fs');

var contents = fs.readFileSync(process.argv[2]);
var lines = contents.toString().split('\n').length - 1;
console.log(lines);

can bypass toString by passing 'utf8' as second arg to readFileSync
ie fs.readFileSync(process.argv[2], 'utf8') */