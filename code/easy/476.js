/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    let t = num.toString(2)
    let str = ''
    for(var i = 0; i < t.length; i++){
        if(t[i] === '1'){
            str += '0'
        }else{
            str += '1'
        }
    }
    return parseInt(str, 2)
};
console.log(findComplement(5))

  
var findComplement2 = function(num) {
    var bits = Math.floor(Math.log2(num)) + 1;
    return ~num << 32 - bits >>> 32 - bits;
};
