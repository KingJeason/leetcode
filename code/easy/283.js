/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    for (var i = 0, j = 0; i < nums.length; i++) {
        if (nums[i]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            j++
        }
    }
};
var nums = [0, 1, 0, 3, 12]
moveZeroes(nums)
console.log(nums)