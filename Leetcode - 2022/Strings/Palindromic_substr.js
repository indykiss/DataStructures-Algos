

/*
Palindromic Substrings

Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different 
substrings even they consist of same characters.

Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
 

Example 2:

Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

Strategy 1: O(n ^2) time, space: O(1);
- 2 for loops
    - 2 pointers, start & end 
    - Outer loop: start = 0
    - Inner loop: End = start, end < start + 2
        - Temporary save start in left and end in right for manipulation:
            where we start in the center then look outward 
        - While str[left] === str[right]
            - increment counter 
            - left--, right++
- return counter 

Strategy 2: Would be good to be faster but probs cant

Edge:
- A single letter = palindrome 
- capitalization? 
- guaranteed letters? possible to get ints?
- empty str as input 

*/


var countSubstrings = function(s) {
    let counter = 0; 
    
    for(let start = 0; start < s.length; start++) {
        for(let end = start; end < start + 2; end++) {   
            // temporary save start and end 
            let l = start, 
                r = end; 
            
            while(l >= 0 && r <= s.length && s[l] === s[r]) {
                counter++;
                l--;
                r++;
            }
        }
    }
    return counter;
};
