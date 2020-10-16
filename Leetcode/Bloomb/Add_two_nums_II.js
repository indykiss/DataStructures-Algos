


/*
Add Two Numbers II

You are given two non-empty linked lists representing two non-negative integers. 
The most significant digit comes first and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7

Add the 2 numbers and return res as a linked list 

Strat:
- Make a stack with each linked list 
- Pop off the last num for each linked list and add them together
- Create a carry to move over to the next popped nums 
- Add the added sum to a new linked list
*/


var addTwoNumbers = function(l1, l2) {
    let st1 = [],
        st2 = [],
        l3 = new ListNode(0);
    
    while(l1 != null) {
        st1.push(l1.val);
        l1 = l1.next;
    }
    while(l2 != null) {
        st2.push(l2.val);
        l2 = l2.next;
    }
            
    while(st1.length || st2.length) {
        let sum = 0;
        
        if(st1.length) sum += st1.pop();
        if(st2.length) sum += st2.pop();        
        
        sum += l3.val;
        
        l3.val = sum%10;
        let head = new ListNode(Math.floor(sum/10));
        head.next = l3;
        l3 = head;
    }
    return (l3.val === 0) ? l3.next : l3;
};


