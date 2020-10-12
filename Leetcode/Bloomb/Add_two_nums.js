


/*
Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/


var addTwoNumbers = function(l1, l2) {
    // Create two runners to run through l1 & l2 
    // Check if we need to +1 with isOverTen
    // We want to return a third linked list, so make a head
    // and current 
    let runner1 = l1,
        runner2 = l2, 
        isOverTen = false,
        head = new ListNode(null),
        current = head;
    
    // Basically check as the runners have length 
        // or if there's a carry left over ie: 99 + 99 would
        // give us an extra carry over past the length of runners
    while(runner1 || runner2 || isOverTen) {
        // The values to add will either be runner's vals or 0
        let val1 = runner1 ? runner1.val : 0
        let val2 = runner2 ? runner2.val : 0
        
        // Let's sum it using the carry if needed
        let total = isOverTen ? val1 + val2 + 1 : val1 + val2
        
        // Check if total needs to toggle my carry over
        isOverTen = total >= 10 ? true : false
        
        // Cool we carried over, let's just get the 1st digit
        total = total%10;
        
        // Move along in the new linked list
        current.next = new ListNode(total);
        current = current.next;
    
    
        // Let's handle situations where the lengths of runners are unequal
        if(runner1) {
            runner1 = runner1.next;
        }
        if (runner2) {
            runner2 = runner2.next;
        }
    }
    
    // Return the linked list
    return head.next;
}

