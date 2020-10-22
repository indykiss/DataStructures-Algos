



/*
Linked List Cycle II

Given a linked list, return the node where the cycle begins. 
If there is no cycle, return null.


Strat: Two pointers
1. ID the length of the cycle by running through it. 
2. Move fasterRunner ahead by this length in 2nd run through. 
3. Keep moving the pointers until they meet. 
4. Since the 2nd pointer is going around the cycle and is cycle 
length ahead, when the runners meet, that's the cycle start. 
*/

// [3,2,0,-4] 
var detectCycle = function(head) {
    let slow = head,
        fast = head; 
        // We're returning slow at start of cycle

    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next; 
    
        // We've IDed a cycle 
            // Start slow back to the start
            // Move slow & fast at same pace
            // When they meet again, then return slow
        if(slow === fast) {
            slow = head;
            while(slow !== fast) {
                fast = fast.next;
                slow = slow.next; 
            }
            return slow;
        }
    }
    
    // There is no cycle
    return null;    
    
};
