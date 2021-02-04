
/*
Merge Two Sorted Lists:

Strategy: Iterative, O(max(m,n)) time & space 
- Vars: 2 pointers, a new linked list, curr to hold l3
- While p1 & p2:
    - Check which val is smaller. 
    - Add smaller one to l3 and move pointer over 1 
    - Outside of if loop, move our curr = curr.next, because 
    we want to add a val to our next slot 
- Catch the remanants of l1 or l2 if one is shorter 
- Return l3.next 

Strategy: Recursive. O(m + n) time AND space, so less space efficient 
- Instead of using pointers & while loop, use call stack 
- Base: if l2 === null return l1 , l1 === null return l2
- Recursive action:
    - If(l1.val < l2.val) 
        - l1.next = mergeTwoLists(l1.next, l2)
        - return l1
    - else, reverse of above

Edge case:
- 1 or both linked lists are empty 
- Both given linked lists are sorted in asc order? 

*/



// Recursive:
// Time & space: O(m + n) 
var mergeTwoLists = function(l1, l2) {
    // Base case:
    if(l1 === null) return l2;
    if(l2 === null) return l1;
    
    // Recursive action 
    if(l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}

// Iterative:
// Time: O(n + m), n = l1.length and m = l2.length 
// Space: O(1), only saving pointers
var mergeTwoLists = function(l1, l2) {
    let p1 = l1, 
        p2 = l2,
        l3 = new ListNode(null), 
        curr = l3;
    
    while(p1 && p2) {
        if(p1.val <= p2.val) {
            curr.next = new ListNode(p1.val);
            p1 = p1.next; 
        } else {
            curr.next = new ListNode(p2.val);
            p2 = p2.next; 
        }
        curr = curr.next;
    }
    
    // Catch the rest of the other linked list if 1 is shorter
    curr.next = p1 || p2;
    
    return l3.next; 
};





// nov 2020
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