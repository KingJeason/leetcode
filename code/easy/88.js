/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    var len = m + n;
    m--;
    n--;
    for (let i = len - 1; i >= 0; i--) {
        if (n < 0 || nums2[n] < nums1[m]) {
            nums1[i] = nums1[m--]
        } else {
            nums1[i] = nums2[n--]
        }
    }
    console.log(nums1)

}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))