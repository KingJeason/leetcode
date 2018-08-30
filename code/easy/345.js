/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let word = s.split('')
    let arr = ['a', 'i', 'o', 'u', 'e',],
        i = 0,
        j = word.length - 1;
    while (j > i) {
        if (!arr.includes(word[i].toLowerCase())) {
            i++
            continue;
        } else if (!arr.includes(word[j].toLowerCase())) {
            j--
            continue;
        } else {
            [word[i], word[j]] = [word[j], word[i]]
            i++
            j--
        }
    }
    return word.join('')
};
console.log(reverseVowels('leetcode'))