/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let node = head
    let fast = head
    while (node != null && fast != null) {
        if(fast.next != null){
            fast = fast.next.next
        }else{
            return false
        }
        node = node.next
        if(node === fast)return true
    }
    return false
};