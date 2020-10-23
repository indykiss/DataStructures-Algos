

/*
Palindrome Linked List

Given a singly linked list, determine if it is a palindrome.

1->2   => false
1->2->2->1   => true

Strat: Two pointer, slow/ fast
Meh. Like go half way through linked list with fast going twice as
fast as slow. Then reverse it and check that the nums are the same? 
Idk. Brute force is fine. 

Strat: Brute force 
1. Go through linked list, save the values in an arr
2. Loop through arr with two pointers, one at start and 
one at the end. If the two pointers are the same, its a palindrome. 
*/


// FB/ Bloomb, Oct LC
var isPalindrome = function(head) {
    let vals = [];
    
    // Add the vals in the linked list into an arr
    while(head !== null) {
        vals.push(head.val);
        head = head.next; 
    }
    
    // Use left/ right pointer to iterate thru arr
    let left = 0,
        right = vals.length - 1; 
    
    // Make sure left & right pointers are always equal
    while(left < right) {
        if(vals[left] !== vals[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
};
// O(n) time and O(n) space

