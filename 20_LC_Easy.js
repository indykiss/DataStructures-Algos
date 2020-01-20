/* 
11. Merge Two Sorted Lists


*/


// Merge Two Sorted Lists

var mergeTwoLists = function(l1, l2) {
    
    // Base: Once we've hit the end of either list, we're done
    if(l1 === null) {
        return l2;
    }
    if(l2 === null) {
        return l1;
    }
    // S1: Compare l1 value and l2 node values 
        // If l1 value is smaller than l2, we want to 
        // Recurse l1 with using the next node in l1 and return l1
    if(l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        // If l2 value is smaller than l2, or equal, we 
        // recurse with l2 and return l1
        l2.next = mergeTwoLists(l1, l2.next);
        return l2
    }
};
