/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (p.val === q.val) {
        if (isSameTree(p.left, q.left)) {
            return isSameTree(p.right, q.right)
        }
    } else {
        return false
    }
    return true
};