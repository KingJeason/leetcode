/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle === '') {
        return 0
    }
    if (needle.length > haystack.length) {
        return -1
    }
    let res = -1
    let len = haystack.length
    for (let i = 0; i < len; i++) {
        if (haystack[i] === needle[0]) {
            if (needle.length > (len - i)) {
                continue;
            }
            if (haystack.substr(i, needle.length) == needle) {
                return i
            } else {
                continue;
            }
        }
    }
    return res
};

console.log(strStr('h2ello', 'l1l'))