// module.exports = function makeImportant(str, exclaims = str.length) {
//   return str + '!'.repeat(exclaims)
// }


module.exports = (str, bangs = str.length) => str + '!'.repeat(bangs)