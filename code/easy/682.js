/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    let sumArr = []
    let res = 0
    let j = 0
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === 'C') {
            res -= (sumArr[j - 1])
            j -= 2
            sumArr.pop()
        } else if (ops[i] === '+') {
            res += (sumArr[j - 1] + sumArr[j - 2])
            sumArr.push((sumArr[j - 1] + sumArr[j - 2]))
        } else if (ops[i] === 'D') {
            res += (2 * sumArr[j - 1])
            sumArr.push(2 * sumArr[j - 1])
        } else {
            console.log(ops[i], 'ops')
            res += (~~ops[i])
            sumArr.push(~~ops[i])
        }
        j++
    }
    return res
};