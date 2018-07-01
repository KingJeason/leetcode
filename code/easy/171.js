/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    let sum = 0;
    let n = 1
    for (let i = s.length - 1; i >= 0; i--) {
        sum += ((s[i].codePointAt(0) - 64) * n)
        n *= 26
    }
    return sum
};
console.log(titleToNumber('AB'))