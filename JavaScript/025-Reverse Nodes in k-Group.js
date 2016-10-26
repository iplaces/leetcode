/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    // 链表为空时返回null
    if (head === null) {
        return null;
    }

    const trueHead = new ListNode(null);
    trueHead.next = head;

    // 链表项数小于k时不进行反转直接返回原链表
    let tmp = head;
    for (let i=1; i<k; i++) {
        if (tmp.next === null) {
            return head;
        }
        tmp = tmp.next;
    }

    // 正常情况下将链表反转
    let p = head,
        q = head.next;
    for (let i=1; i<k; i++) {
        let r = q.next;
        q.next = p;
        p = q;
        q = r;
    }
    trueHead.next.next = reverseKGroup(q, k); // 原来链表第一项转为最后一项
    trueHead.next = p;  // 原来链表最后一项改为第一项

    return trueHead.next;
};
