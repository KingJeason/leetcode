/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return
    let mapS = {}, mapT = {}, arr = [], num = 1
    for (let i = 0; i < s.length; i++) {
        let numS = -1
        let numT = num
        if (!mapS[s[i]]) {
            mapS[s[i]] = num
            numS = num
        } else {
            numS = mapS[s[i]]
        }
        if (!mapT[t[i]]) {
            mapT[t[i]] = num
            numT = num
            num += 1
        } else {
            numT = mapT[t[i]]
        }
        console.log(numT, numS)
        // console.log(mapS, mapT)

        if (numT !== numS) {
            return false
        }
        arr.push(numS)

    }
    return true
};
console.log(isIsomorphic('ab','aa'))
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const sMap = {}, tMap = {};
    for (let i = 0; i < s.length; i++) {
        if (sMap[s[i]] != tMap[t[i]]) {
            return false;
        }
        sMap[s[i]] = i;
        tMap[t[i]] = i;
        // console.log(sMap[s[i]] , tMap[t[i]]);
    }
    return true;
}