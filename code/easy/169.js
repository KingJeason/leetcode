/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    if(nums.length===1)return nums[0]
    let map = {}
    let k = nums.length / 2
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1
        } else {
            map[nums[i]] += 1
            if (map[nums[i]] > k) {
                return nums[i]
            }
        }
    }
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2, 2]))