/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    var str = (x ^ y).toString(2)
    var sum = 0
    for(var i = 0; i < str.length; i++){
        if(str[i] === '1'){
            sum += 1
        }
    }
    return sum
};
console.log(hammingDistance(1, 4))