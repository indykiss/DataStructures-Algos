/*
Delete Node in a Linked List

Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

It is guaranteed that the node to be deleted is not a tail node in the list.


Strat:
- NOT given the head
- IF I were given the head, I'd 
        - Var: saves the prev 
    - Iterate thru LL, when I find the node to delete
    I'd save its next value. 
    - Go to the prev node and make it's next become the 
    'deleted' node's next. 
    - Essentially we skip over the node in the linked list, effectively deleting it 
    
- Just change the current node's val to become the next val
- And make the next become next next 

*/


// Literally a trash Q. Dont worry about this. 

var deleteNode = function(node) {
    node.val = node.next.val; 
    node.next = node.next.next;
};





