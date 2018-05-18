/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    let map = {}
    let res = []
    for (let i = 0; i < cpdomains.length; i++) {
        let t = cpdomains[i].split(' ')
        let num = t[0]
        let array = t[1].split('.')
        for (let j = 0; j < array.length;) {
            console.log(array, j)
            let str = array.reduce(function (total, s) {
                if (j === array.length - 1) {
                    return total + s
                } else {
                    return total + '.' + s
                }
            })
            if (!map[str]) {
                map[str] = ~~num
            } else {
                map[str] += ~~num
            }
            array.shift()
        }
    }
    for(let o in map){
        res.push(map[o] + ' ' + o)
    }
    return res
};
console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]))