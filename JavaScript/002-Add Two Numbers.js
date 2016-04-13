/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var result = new ListNode(0);
    var list = result, list1 = l1, list2 = l2;
    var flag = 0;
    while(list1 !== null || list2 !== null) {
        var temp = 0;
        if(list1 !==null) {
            temp += list1.val;
            list1 = list1.next;
        }
        if(list2 !==null) {
            temp += list2.val;
            list2 = list2.next;
        }
        
        if(flag === 1) {
            temp += 1;
        }
        
        if(temp > 9) {
            list.next = new ListNode(temp%10);
            flag = 1;
        } else {
            list.next = new ListNode(temp);
            flag = 0;
        }
        list = list.next;
    }
    if(flag === 1) {
        list.next = new ListNode(1);
    }
    
    return result.next;
};