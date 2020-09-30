


/*
Flatten a Multilevel Doubly Linked List

You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.

Ex:

1--2 -- 6--7--8--Null
    \           
    3--5   
    \
    4

Flatten to:
1-2-3-4-5-6-7-8-Null

Strat:
1. Go through the multilevel doubly LL 
2. If we come across a node that has a child, we want to move the rest of
that level's nodes into a stack in order to add it at the end 
3. For this new child branch, we want to look for more children. 
4. If there is a new child, add its uncles/ aunt nodes into the stack 
5. Once we're done finding branches, add the nodes from stack back in 


*/

// Doubly linked list node with a child
function node(val, prev, next, child) {
    this.val = val;
    this.prev = prev;
    this.next = next;
    this.child = child;
}


var flatten = function(head) {
    if(!head) return head;
    
    let node = head,
        stack = [];
    
    while(node) {
        // If there is a child and uncles, we need to add uncles into stack
        if(node.child) {
            if(node.next) stack.push(node.next);
            node.next = node.child; // Order matters. Move next to child 1st           
            node.next.prev = node; // B/c doubly linked, need to deal w/ prev node too
            node.child = null // Remove child
        } 
        // If there's something in the stack to add
        else if(stack.length != 0 && !node.next) {
            node.next =stack.pop();
            node.next.prev = node;
        }
        node = node.next;
    }
    return head;
};

