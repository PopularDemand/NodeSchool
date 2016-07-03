// let name = process.argv[2]
// let words = process.argv[3]
// console.log(html`<b>${name} says</b>: "${words}"`)

// function escape(s) {
//     return s.replace(/&/g, "&amp;")
//             .replace(/</g, "&lt;")
//             .replace(/>/g, "&gt;")
//             .replace(/'/g, "&apos;")
//             .replace(/"/g, "&quot;");
// }



// function html(pieces, ...substitutions) {
//     var result = pieces[0];
//     for (var i = 0; i < substitutions.length; ++i) {
//         result += escape(substitutions[i]) + pieces[i + 1];
//     }

//     return result;
// }

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(pieces, ...substitutions) {
    var result = pieces[0];
    for (var i = 0; i < substitutions.length; ++i) {
        result += escape(substitutions[i]) + pieces[i + 1];
    }

    return result;
}

function escape(s) {
    return s.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;");
}