


/*
Reverse Linked List II

Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:

Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL


Strat: track where we are with counter. As we iterate linked list, 
we increment counter. 

1. Loop until we hit start of reversal position. 
    Increment currPos, update our while loop, and make a start 
2. When we hit the start of reversal position, we want to make a 
prev = null so we can implement the basic "reverse linked list"
algo. Reverse linked list I is the 2nd while loop basically. 
3. At the end, we need to add anything after the end of reversal
into a tail? Idk what that's about. 
4. IDK about the final return. 

Do again I think. 
*/

var reverseBetween = function(head, m, n) {
    let start = head, 
        cur = head,
        curPos = 1;
    
    // Before we hit the start of the reverse
        // let's just count curPos and move thru linked list
    while (curPos < m) {
        start = cur;
        cur = cur.next;
        curPos++;
    }

    // Now that we've hit the start of reversing LL, we reverse linked list 
    // algo, where we want to use prev to reverse
    let prev = null, 
        tail = cur;
    
    while (curPos <= n) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
        curPos++;
    }
    
    // add the rest of the linked list into the thing?
    start.next = prev;
    tail.next = cur;
    
    // if m === 1, return prev  
    // if it's not, return head
    return m == 1 ? prev : head;
};

