

/*
Linked List Cycle 


Given head, the head of a linked list, determine 
if the linked list has a cycle in it.


Strat: Slow/fast runners 

1. Var: slow, fast pointers. 
2. Move the slow pointer one at a time, we move the 
second very quickly. Faster moves through entire linked list

While loop until fast !== null && fast.next !== null.
Move the fast with: fast = fast.next.next; 
Move the slow with: slow = slow.next; 

3. If they ever meet, then we have a cycle.
4. If we don't return false.
*/

// Grokk, Oct, fb/bloomb
var hasCycle = function(head) {
    let slow = head,
        fast = head;
    
    while(fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        
        if(slow === fast) {
            return true;
        }
    }
    return false;
};


