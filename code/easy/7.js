/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const MAX = Math.pow(2, 31) - 1
    const MIN = -Math.pow(2, 31)
    const isValid = (num) => {
        return (num >= MIN && num <= MAX)
    }
    let res
    if (x >= 0) {
        res = parseInt(x.toString().split('').reverse().join(''))
        return isValid(res) ? res : 0
    } else {
        res = -(parseInt(((-x).toString().split('').reverse().join(''))))
        return isValid(res) ? res : 0
    }
};
console.log(reverse(-123))