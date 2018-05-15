/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    let array = nums.sort(function(a, b) {
        return a - b
    })
    let sum = 0;
    for (var i = 0; i < array.length; i += 2) {
        sum += array[i]
    }
    return sum
};
console.log(arrayPairSum([1, 4, 3, 2]))
console.log([6214, -2290, 2833, -7908].sort(function (a, b) {
    return a - b
}))
console.log(-2290 < -7908)