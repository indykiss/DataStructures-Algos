/*
Copy List with Random Pointer

A linked list is given such that each node contains an additional
random pointer which could point to any node in the list or null.

Return a deep copy of the list.

The Linked List is represented in the input/output as a list of n 
nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) where random 
    pointer points to, or null if it does not point to any node.
 
Ex:
Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

Best Strat:
1. First need to make a copy of all the nodes in the original ll
within a map or hash table. Save orig node & copy 
2. Loop thru original ll and create the randomized connections 
by IDing what the random connection was in the original ll
and making the copied node's connection the same thing 
*/


// Attempt #3, Sept for Bloomb. Do again.
var copyRandomList = function(head) {
    
    let connector= new Map(),
        n = head;
    
    // Create copies of the orig linked list's nodes 
    while(n !== null) {
        connector.set(n, new Node(n.val));
        n = n.next;
    }
    
    // Reset the head 
    n = head; 
    
    // Make the random connections for the copies based on orig's
        // of if we're at the end then null
    while(n !== null) {
        connector.get(n).next = connector.get(n.next) || null;
        connector.get(n).random = connector.get(n.random) || null;
        n = n.next;
    }
    return connector.get(head);
}




// Attempt 2. Practice again
var copyRandomList = function(head) {
    
    if(!head) return null;
    
    let map = new Map();
    let n = head;
    
    while(n) {
        map.set(n, new Node(n.val));
        n = n.next;
    }
    
    n = head;
    while(n) {
        map.get(n).next = map.get(n.next) || null;
        map.get(n).random = map.get(n.random) || null;
        n = n.next; 
    }
    
    return map.get(head);
};





var copyRandomList = function(head) {
    if(!head) {return null}
    
    const map = new Map();
    let n = head;
    
    while(n) {
        map.set(n, new Node(n.val));
        n = n.next;
    }
    
    n = head;
    while(n) {
        map.get(n).next = map.get(n.next) || null;
        map.get(n).random = map.get(n.random) || null;
        n = n.next;
    }
    return map.get(head);     
};

