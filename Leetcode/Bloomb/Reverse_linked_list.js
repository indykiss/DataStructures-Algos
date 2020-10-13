

/*
Reverse Linked List

Reverse a singly linked list.

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL


- Use a stack. Iterate throuh linked list and add eles to the stack 
- Make a new linked list. Populate it with the popped eles from the stack

- Iterate with a prev & null 
- Recurse
*/


// Recursive solution

var reverseList = function(head) {
    // base case
    if(head == null || head.next == null) {
        return head;
    }
    // Make the linked list to be reversed
    let reversedListHead = reverseList(head.next);
    // Reverse
    head.next.next = head;
    head.next = null
    
    return reversedListHead
}



// Iterative solution. Do me again
var reverseList = function(head) {
    let curr = head,
        prev = null, 
        next = null;
    
    while(curr !== null) {
        // We want to save the next
        next = curr.next; 
        // We want to reverse
        curr.next = prev;
        // Advance prev & next
        prev = curr;
        curr = next;
    }
    return prev;
};


// ES6 version. Slightly more intuitive
var reverseList = function(head) {
    let curr = head,
        prev = null, // I am the reversed linked list
        next = null;
    
    while(curr !== null) {
        // Switch values to reverse
        [curr.next, prev, curr] = [prev, curr, curr.next] 
    }
    return prev;
}


// Using Stack; not super intuitive 
var reverseList = function(head) {
    if(head == null) return head;
    let stack = [];
    while(head !== null) {
        stack.push(head);
        head = head.next;
    }
    let curr = stack.pop();
    head = curr;
    while(stack.length > 0) {
        curr.next = stack.pop()
        curr = curr.next;
    }
    curr.next = null;
    return head;
};

