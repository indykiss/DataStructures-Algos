/*
Reverse a doubly linked list. 

The main thing to consider is that we need to swap elements on opposite ends of the linked list.
Basically the values of each node's previous and nextNode have been swapped. 

Start at the head, swap its prev/ next nodes. 

*/

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 * N is the number of elements in the linked list. 
 */


function reverse(head) {
    let node = head;

    if(!head) {return null}

    while(node) {
        let nextNode = node.next; 

        node.next = node.prev;
        node.prev = nextNode;
        head = node; 
        node = nextNode;
    }   
    return head; 
}
