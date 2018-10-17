/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isSymmetric = function (root) {
    if (!root) return true;
    return is(root.left, root.right)
};
var is = function (left, right) {
    if (!left && !right) return true;
    if ((!left && right) || (left && !right) || (left.val !== right.val)) return false;
    return is((left.left, right.right) && (left.right, right.left))
}