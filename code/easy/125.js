/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let arr = []
    for (let i = 0; i < s.length; i++) {
        let ascii = s[i].charCodeAt(0)
        if ((ascii >= 48 && ascii <= 57) || (ascii >= 97 && ascii <= 122)) {
            arr.push(s[i])
        } else if (ascii >= 65 && ascii <= 90) {
            arr.push(String.fromCharCode(ascii + 32))
        }
    }
    let len = arr.length
    for (let j = 0; j < len / 2; j++) {
        if (arr[j] !== arr[len - 1 - j]) {
            return false
        }
    }
    return true
}
console.log(isPalindrome('abbbba'))