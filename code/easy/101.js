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
var tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null,
        },
        right: {
            val: 4,
            left: null,
            right: null,
        }
    },
    right: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    }
}
var isSymmetric = function (root) {
    if (!root) return true;
    return is(root.left, root.right)
};
var is = function (left, right) {
    if (!left && !right) return true;
    if ((!left && right) || (left && !right) || (left.val !== right.val)) return false;
    console.log(left.left, right.right)
    return is(left.left, right.right) && is(left.right, right.left)
}
console.log(isSymmetric(tree))