/*
 Merge k Sorted Lists
 
Merge k sorted linked lists and return it as one sorted list.
Analyze and describe its complexity.

Strategy:
- Create a helper than manages the comparison of elements within 2 lists. 
  - Parameter is 2 lists. We make a temp node that creates the head 
  of the new merged list. 
  - While loop for length of both lists. Compare the 1st val of each. 
  Whichever is smaller gets two things done to it. 
    - It becomes the next val for our temp. AND we increment along in 
    that list (the one with the smol val). 
- Our main function loops through the overall input of lists. And shifts 
off two lists and compares them with our helper function. 
- Then we push the merged list at the end of our lists param. When we only 
have that one list left in our list of lists, we return it. 
   - This last list is our final merged list. 
 
Time and space:
 - Constant space; only making constants and a temp node. 
 - Time: O(N * log(n)) because of our merge helper function
*/



// Most intuitive way to do this. Brute force. 
// Iterate thru lists, look at 2 lists at once and merge those 2. 
// Add merged back into original lists and keep going until just 1 left 
var mergeKLists = function(lists) {
    if(lists.length === 0) return null;
    // Look at the list of linked lists
    while(lists.length > 1) {
        let list1 = lists.shift();
        let list2 = lists.shift();
        const merged = mergingLists(list2, list2)
        lists.push(merged);
    }
    return lists[0];
};

// Merge two linked lists into 1 
var mergingLists = function(list1, list2) {
    const newNode = new ListNode(0)
    let res = new ListNode(0)

    while(list1 !== null && list2 !== null) {
        if(list1.val < list2.val) {
            res.next = list1;
            list1 = list1.next;
        } else {
            res.next = list2; 
            list2 = list2.next; 
        }
        res = res.next;
    }
    if(list1 == null) res.next = list2;
    if(list2 == null) res.next = list1;
    return res.next;
}





// Grokking. Heap way to do this. 
// Oct. Fb/ bloomb. Just follow and copy b/c late and am tired
// also not the best way to do this so MEH

const Heap = require('./collections/heap'); // import Heap

function merge_k_lists(lists) {

    let minHeap = new Heap([], null, (a,b) => b.value - a.value); // value bc linked list

    // put root of each linked list into minheap 
    lists.forEach(list => {
        if(list !== null) {
            minHeap.push(list);
        }
    })

    // take root (smallest) from minHeap and add to res linked list 
    let resHead = null,
        resTail = null; 
    
    while(minHeap.length > 0) {
        let smallNode = minHeap.pop();

        // if we're first adding to result linked list
        if(resHead === null) {
            resHead = smallNode;
            resTail = smallNode; 
        } else { // else, add to head.next 
            resHead.next = smallNode; 
            resTail = resTail.next; 
        }
        // ?? keep going ??
        if(smallNode.next !== null) {
            minHeap.push(smallNode.next);
        }
    }
    return resHead;
}





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

