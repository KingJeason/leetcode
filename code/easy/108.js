/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode (val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    if (!nums || !nums.length) return null
    let midIndex = ~~(nums.length / 2)
    let root = new TreeNode(nums[midIndex])
    root.left = sortedArrayToBST(nums.slice(0, midIndex))
    root.right = sortedArrayToBST(nums.slice(midIndex + 1))
    return root
};
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))