/* 
11. Merge Two Sorted Lists
12. Happy number


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

/*
Happy Number

Write an algorithm to determine if a number is "happy":
Starting with any positive integer, replace the number by the sum of the 
squares of its digits, and repeat the process until the number equals 1 
(where it will stay), or it loops endlessly in a cycle which does not include 1. Those 
numbers for which this process ends in 1 are happy numbers.

Input: 19
Output: true
Explanation: 
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

Assumptions: Negative numbers? (no). Valid input? 
Lesson: Sets are good. Learn to use them
*/

// Can save squares bc max number is 10 of them
const squares = {'0':0, '1':1, '2':4, '3':9, '4':16, '5':25, '6':36, '7':49, '8':64, '9':81}

var isHappy = function(n) {
    // Edge:    
    if (n < 1) return false;

    // Store nums as we create them 
    let set = new Set();
    
    // If set doesn't have num, we add it and evaluate
    while(!set.has(n)) {
        set.add(n);
        let str = n.toString();
        n = 0
        // Loop through the string, do math
        for(let i = 0; i < str.length; i++) {
            n += squares[str[i]];
        }
        // If num is happy, return true
        if(n === 1) {
            return true;
        }
    }
    // Num seems unhappy
    return false;  
};
