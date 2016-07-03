var through = require('through2')

var to_upper = function (buffer, _, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

process.stdin
  .pipe(through(to_upper))
  .pipe(process.stdout)