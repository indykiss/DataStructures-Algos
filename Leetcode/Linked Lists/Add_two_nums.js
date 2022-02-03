


/*
Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.


Strategy: O(max(n or m), n = l1 size, m = l2 size, time & space complexity. 
- Vars: 2 pointers (aimed at each linked list), carry, head & curr for new linked list 
- Iterate thru both pointers || carry is true (to handle cases of adding a 1 at the front of the whole new linked list)
    - Val1/ val2 = pointer.val OR 0 if linked list is empty 
    - Sum = val1 + val2. Check if carry, add 1 
    - Change carry depending on sum >= 10
    - Make sure sum is 1 digit, not >= 10 before adding it to LL 
    - Make a new linked list with sum. 
    - Increment our new linked list node (curr = curr.next)
    - Increment point1 and point2 if they exist 
- Return head.next (we started head as null so ignore that); 

Edge cases/ considerations:
- Possible to get 0 
- Carry 
- Empty linked lists 
- Negative nums? 
*/

Python: 
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        l3 = ListNode(-1)
        curr = l3
        carry = False 
        
        while l1 or l2 or carry:
            val1 = l1.val if l1 else 0 
            val2 = l2.val if l2 else 0
            val_sum = val1 + val2
            if carry: 
                val_sum += 1
                carry = False
            if val_sum >= 10:
                carry = True 
                val_sum = val_sum - 10 
            curr.next = ListNode(val_sum)
            curr = curr.next 
            
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None

        return l3.next 


var addTwoNumbers = function(l1, l2) {
    let point1 = l1, 
        point2 = l2, 
        carry = false, 
        head = new ListNode(null), 
        curr = head;    
    
    while(point1 || point2 || carry) {
        // Handle cases where 1 LL ends before prev
        let val1 = point1 ? point1.val : 0; 
        let val2 = point2 ? point2.val : 0;
        let sum = val1 + val2;
        
        if(carry) {
            sum += 1;
        }
            
        if(sum >= 10) {
            carry = true;
        } else {
            carry = false;
        }
        
        sum = sum % 10; // get rid of leading 1s
        
        curr.next = new ListNode(sum);
        curr = curr.next;
                
        if(point1) point1 = point1.next; 
        if(point2) point2 = point2.next; 
    }
    return head.next;
}




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

