/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
    let arr = []
    while (n > 0) {
        let c = ((n - 1) % 26) + 65
        arr.unshift(String.fromCharCode(c))
        n = Math.floor((n - 1) / 26)
    }
    return arr.join('')
};
console.log(convertToTitle(27))