var rob = function (nums) {
    if (nums.length < 2) {
        return nums.length === 0 ? 0 : nums[0]
    }
    let dp = [nums[0], Math.max(nums[0], nums[1])]
    for (let i = 2; i < nums.length; i++) {
        dp.push(Math.max(nums[i] + dp[i - 2], dp[i - 1]))
    }
    return dp.pop()
};
console.log(rob([1, 2, 3, 1]))