/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if(strs.length === 0) return ''
    let str = strs[0]
    let prefix = ''
    for (let i = 0; i < str.length; i++) {
        prefix += str[i]
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] === str[i]) {
                continue
            } else {
                return prefix.slice(0, prefix.length - 1)
            }

        }
    }
    return prefix

};
console.log(longestCommonPrefix(["flower", "flower", "flower"]))