/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
    let res = []
    for(let i = 0; i < S.length; i++){
        if(S[i] === C){
            res.push(0)
            continue
        }
        let left = 100001
        let right = 100001
        for(let j = i - 1; j >= 0; j--){
            if(S[j] === C){
                left = i - j
                break
            }
        }
        for(let k = i + 1; k < S.length; k++){
            if(S[k] === C){
                right = k - i
                break
            }
        }
        res.push(Math.min(left, right))
    }
    return res
};
console.log(shortestToChar('loveleetcode', 'e'))