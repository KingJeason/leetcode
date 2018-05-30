function ListNode (val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
// [1,2,3] [4,5,6]
console.log(mergeTwoLists(
    {
        val: 1,
        next: {
            val: 3,
            next: {
                val: 5,
                next: null
            }
        }
    },
    {
        val: 2,
        next: {
            val: 4,
            next: {
                val: 6,
                next: null
            }
        }
    }))