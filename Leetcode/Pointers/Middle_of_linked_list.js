/*
Middle of the Linked List

Given a non-empty, singly linked list with head node head, return a 
middle node of linked list.

If there are two middle nodes, return the second middle node.

Ex:
[1,2,3,4,5] =>  Node 3 from this list.

The returned node has value 3.  

Brute force:
1. Find the length of the linked list by counting the num of nodes
as we go down. 
2. Divide length by 2, or round down if odd num: midPt
3. Iterate thru linked list again. Stop when we get to midPt

Slow/ fast pointer. Faster:
1. Slow and fast pointer who is going twice as fast. 
2. When fast hits the end, slow will be at the midpoint. 

*/


// More efficient, run through linked list just once 
// Two runners. One very fast. One sloowww. 
// Faster pointer runs twice as fast as slow. When slow hits end, 
// slow should be at midpoint of the linked list 
var middleNode = function(head) {

    let slow = head, 
        fast = head;
    
    while(fast !== null && fast.next !== null) {
        
        slow = slow.next; 
        fast = fast.next.next;
    }
    return slow;
    
}



// Brute force. O(n) but we loop through same linked list twice so
// not super efficient. But I coded this up in 10 mins so BOOM. 
var middleNode = function(head) {
    let length = 0,
        runner = head,
        nodeCounter = 0;
    
    while(runner !== null) {
        runner = runner.next;
        length++;
    }
    
    let midPt = Math.floor(length/2);
    runner = head;
    
    while(runner !== null) {
        if(nodeCounter === midPt) {
            return runner;
        }
        runner = runner.next;
        nodeCounter++
    }
};

