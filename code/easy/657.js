/**
 * @param {string} moves
 * @return {boolean}
 */
// var judgeCircle = function (moves) {
//     var map = {
//         'U': 0,
//         'R': 1,
//         'D': 2,
//         'L': 3
//     }
//     var array = []
//     for (var i = 0; i < moves.length; i++) {
//         array.push(map[moves[i]])
//     }
//     if (!array[0]) {
//         return false
//     }
//     for (var j = 0; j < array.length - 1; j++) {
//         if ((array[j] !== 3) && (array[j] + 1 == array[j + 1])) {
//             continue;
//         } else if (array[j] === 3 && array[j + 1] === 0) {
//             continue;
//         } else {
//             return false
//         }
//     }
//     return true
// };
var judgeCircle = function (moves) {
    var point = {
        x: 0,
        y: 0,
    }
    for (var i = 0; i < moves.length; i++) {
        if (moves[i] === 'U') {
            point.y++
        } else if (moves[i] === 'R') {
            point.x++
        } else if (moves[i] === 'D') {
            point.y--
        } else if (moves[i] === 'L') {
            point.x--
        }
    }
    if (point.x === 0 && point.y === 0) {
        return true
    } else {
        return false
    }
};
console.log(judgeCircle("LL"))