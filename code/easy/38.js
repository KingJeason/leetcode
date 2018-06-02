/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) return '1'
    let res = '1'
    for (let i = 1; i < n; i++) {
        let t = ''
        let num = 1
        for (let j = 0; j < res.length; j++) {
            if (res[j + 1] && res[j] === res[j + 1]) {
                num += 1
            } else {
                t += (num.toString() + res[j])
                num = 1
            }
        }
        res = t
        num = 1
    }
    return res
};
console.log(countAndSay(6))