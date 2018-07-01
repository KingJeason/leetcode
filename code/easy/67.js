/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let carry = 0;
    let sum = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    let res = "";
    while (i >= 0 || j >= 0 || carry == 1) {
        sum = carry;
        if (i >= 0) sum += parseInt(a[i--]);
        if (j >= 0) sum += parseInt(b[j--]);
        carry = Math.trunc(sum / 2);
        res = sum % 2 + res;
    }
    return res;
};
console.log(addBinary('0000', '00001'))
