var arguments = process.argv;
var total = 0;

for (i = 2; i < arguments.length; i++) {
	total += Number(arguments[i]);
}

console.log(total);