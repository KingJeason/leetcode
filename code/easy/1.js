/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 // key: 数组里的值, value: 索引
var twoSum = function (nums, target) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (typeof map[target - nums[i]] !== 'undefined') {
            return [map[target - nums[i]], i]
        } else {
            map[nums[i]] = i
            console.log(map)
        }
    }
};
console.log(twoSum([3, 2, 4, 9], 12))
