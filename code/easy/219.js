/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] == undefined) {
            map[nums[i]] = [i]
        } else {
            map[nums[i]].push(i)
        }
    }
    for (let key in map) {
        let arr = map[key]
        if (arr.length < 2) continue
        for (let j = arr.length - 1; j >= 0; j--) {
            if (j == 0) continue
            if ((arr[j] - arr[j - 1]) <= k) {
                return true
            }
        }
    }
    return false
};
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))