/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var sum = 0;
    for(var i = 0; i < S.length; i++){
        for(var j = 0; j < J.length; j++){
            if(J[j] === S[i]){
                sum += 1;
                break;
            }
        }
    }
    return sum;
};
console.log(numJewelsInStones('z', 'ZZ'))