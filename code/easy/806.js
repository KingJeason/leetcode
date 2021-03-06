/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function (widths, S) {
    var map = {
        a: widths[0],
        b: widths[1],
        c: widths[2],
        d: widths[3],
        e: widths[4],
        f: widths[5],
        g: widths[6],
        h: widths[7],
        i: widths[8],
        j: widths[9],
        k: widths[10],
        l: widths[11],
        m: widths[12],
        n: widths[13],
        o: widths[14],
        p: widths[15],
        q: widths[16],
        r: widths[17],
        s: widths[18],
        t: widths[19],
        u: widths[20],
        v: widths[21],
        w: widths[22],
        x: widths[23],
        y: widths[24],
        z: widths[25],
    }
    var line = 1
    var num = 0
    for (var i = 0; i < S.length; i++){
        console.log(map[S[i]])
        num += map[S[i]]
        if(num > 100){
            num = map[S[i]]
            line += 1
        }
    }
    return [line, num]
};
console.log(numberOfLines([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], "abcdefghijklmnopqrstuvwxyz"
))