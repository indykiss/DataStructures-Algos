
/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
Merge point is where the two linked lists FIRST share a value. 
They will be different until a certain point, then all the same. 
*/

// This is a "method-only" submission.
// You only need to complete this method.

function findMergeNode(headA, headB) {
    let contA = headA;
    let contB = headB;

    while(contA !== contB) {
        if(contA.next) {
            contA = contA.next;
        } else {
            contA = headB;
        }
        if(contB.next){
            contB = contB.next; 
        } else {
            contB = headA
        }
    }
    return contB.data
}
