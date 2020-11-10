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
*/


/* Strat: 
- Make a map of connections
- Make a new copy that has same head
- Copy the nodes over from original LL to 
the copy 
- Start over. Reset the head 
- Make the random connections for the copy 
based on the original 
*/


// Had to copy this. 30 mins. no idea how to start
// Do again
var copyRandomList = function(head) {
    let n = head, // n = use to copy LL
        connections = new Map(); // head = copy
    
    // Copy the nodes from original to copy 
    // and to connections
    while(n !== null) {
        connections.set(n, new Node(n.val));
        n = n.next; 
    }
    
    // Make the random connections
    n = head; 
    while(n !== null) {
        // create next connection 
        connections.get(n).next = connections.get(n.next) || null;
        
        // randomize 
        connections.get(n).random =
            connections.get(n.random) || null;
        
        n = n.next;
    }
    return connections.get(head); 
};



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

