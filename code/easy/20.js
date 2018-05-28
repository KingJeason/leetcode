/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    let stack = []
    for (let i = 0; i < s.length; i++) {
        let c = s[i]
        if (c === '(' || c === '[' || c === '{') {
            stack.push(c)
        } else if (c === ')' || c === ']' || c === '}') {
            if (map[c] === stack[stack.length - 1]) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
};
console.log(isValid('()'))