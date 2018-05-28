/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'IV': 4,
        'IX': 9,
        'XC': 90,
        'XL': 40,
        'CD': 400,
        'CM': 900
    }
    let sum = 0
    s = s.replace(/IV|IX|XC|XL|CD|CM/gi, function (match, offset) {
        sum += map[match]
        return ''
    })
    for(let i = 0; i < s.length; i++){
        sum += map[s[i]]
    }
    return sum
};
console.log(romanToInt('MCMXCIV'))