/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    let arr = str.split(' ')
    if (pattern.length !== arr.length) return false
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== pattern.indexOf(pattern.charAt(i))) {
            return false
        }
    }
    return true
};
console.log(wordPattern('abba', 'dog cat cat fish'))