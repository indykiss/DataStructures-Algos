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

