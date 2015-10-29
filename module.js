var fs = require('fs');
var path = require('path');

//the function takes 3 arguments
module.exports = function(dir, ext, callback){
	
//read the directory, then run some function that
//accepts an error if error or 'list' = array of files
    fs.readdir(dir, function(err, list){
//if error, runs callback passed to exported function with 'err'
        if (err){
            return callback(err);
        }

        
	//reassign the list to a version filtered by THIS function
	//'file' is a single iterate of the list
		list = list.filter(function (file) {
			return path.extname(file) === '.' + ext;
		})

        callback(null, list);

    });
}