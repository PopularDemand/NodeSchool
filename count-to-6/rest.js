"use strict";

function average(...args) {
  var sum = 0
  var avg = 0
  args.forEach(function(argument) {
    sum += argument
  })
  avg = sum / args.length
  console.log(avg)
}