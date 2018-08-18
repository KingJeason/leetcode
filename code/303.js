/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        console.log(nums[i], nums[i - 1])
        nums[i] = nums[i] + nums[i - 1]
    }
    this.nums = nums
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    return i ? this.nums[j] - this.nums[i - 1] : this.nums[j]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */
