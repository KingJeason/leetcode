/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {

    let sum = 0
    let n = nums.length
    for (let i = 0; i < n; i++) {
        sum += nums[i]
    }
    return ((n + 1) * n / 2) - sum
};
console.log(missingNumber([3, 0, 1]))