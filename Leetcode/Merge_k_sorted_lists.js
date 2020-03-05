/*
 Merge k Sorted Lists
 
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Pull out every element in the linked list. Push it into an arr then readd it into 
a linked list? 
 
*/


var mergeKLists = function(lists) {
    if(lists.length === 0) {return null;}
    // Make a priority queue for looking at the different 
        // lists within the input
    while(lists.length > 1) {
        // Return the 1st list
        let head1 = lists.shift();
        // Return the 2nd list 
        let head2 = lists.shift();
        const merged = mergeLister(head1, head2);
        lists.push(merged);
    }
    return lists[0];
};


function mergeLister(l1,l2) {
    // Make a new temporary node 
        // Need to use const to create, then let to make maleable
    const newNode = new ListNode(0);
    let temp = newNode;
    
    // Keep going until we hit the end of either list
    while(l1 !== null && l2 !== null) {
        // Check 1st ele of each list. Smallest becomes temp 
            // Two actions needed:
                // We need to tell our new linked list that its 
                // next val is this smol val
                // AND we need to move along in our l1/ l2 
        if(l1.val < l2.val) {
            temp.next = l1;
            l1 = l1.next;
        } else {
            temp.next = l2; 
            l2 = l2.next; 
        }
        // And we move along the new list
        temp = temp.next; 
    }
    // If the other list is null, we want to add our list in
    if(l1 !== null){
        temp.next = l1;
    }
    if(l2 !== null) {
        temp.next = l2; 
    }
    // Return the outcome
    return newNode.next;    
}

