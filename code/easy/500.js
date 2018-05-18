/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let map = {
        q: 1,
        w: 1,
        e: 1,
        r: 1,
        t: 1,
        y: 1,
        u: 1,
        i: 1,
        o: 1,
        p: 1,
        a: 2,
        s: 2,
        d: 2,
        f: 2,
        g: 2,
        h: 2,
        j: 2,
        k: 2,
        l: 2,
        z: 3,
        x: 3,
        c: 3,
        v: 3,
        b: 3,
        n: 3,
        m: 3
    }
    let res = []
    for (let i = 0; i < words.length; i++) {
        let group = map[words[i].toLowerCase()[0]]
        let flag = true
        for (let j = 0; j < words[i].length; j++) {
            if (group / map[words[i].toLowerCase()[j]] === 1) {
                continue
            } else {
                flag = false
                break
            }
        }
        if (flag) {
            res.push(words[i])
        }
    }
    return res
};
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]))