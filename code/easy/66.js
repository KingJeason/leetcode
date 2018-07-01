/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    // 进位标志
    for (var i = digits.length - 1; i >= 0; i--) {
        if (digits[i] + 1 < 10) {
            digits[i] += 1
            return digits
        }
        digits[i] = 0
    }
    if (i === -1) {
        digits.unshift(1)
        return digits
    }
};
console.log(plusOne([9,9,9]))