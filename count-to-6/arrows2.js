var inputs = process.argv.slice(2)

var result = inputs.map(x => x[0])
                   .reduce((soFar, e) => soFar + e)

console.log(`[${inputs}] becomes "${result}"`);