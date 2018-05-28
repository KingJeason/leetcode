const solution = function (strs, array) {
    let str = array.reduce((a, b) => {
        return a + '|' + b
    })
    str = '(' + str + ')'
    const re = new RegExp(str + '.*\\n?', 'gim')
    let res = strs.replace(re, function (match) {
        const lastChar = match[match.length -1]
        return lastChar === '\n' ? '\n' : ''
    })
    return res
}
let result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
console.log(result)