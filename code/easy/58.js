/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    s = s.trim()
    let len = s.length
    if (len === 0) return 0
    for (let i = len - 1; i >= 0; i--) {
        if (s[i] === ' ') {
            if (i === len - 1) {
                return 0
            }
            return len - i - 1
        }
    }
    return len
};
console.log(lengthOfLastWord('Hello Worl xsd '))