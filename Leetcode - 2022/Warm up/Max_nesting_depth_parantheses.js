

/*
Maximum Nesting Depth of the Parentheses

A string is a valid parentheses string (denoted VPS) if it meets one of the following:

- It is an empty string "", or a single character not equal to "(" or ")",
- It can be written as AB (A concatenated with B), where A and B are VPS's, or
- It can be written as (A), where A is a VPS.

We can similarly define the nesting depth depth(S) of any VPS S as follows:

    depth("") = 0
    depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
    depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
    depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
    For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.

Given a VPS represented as string s, return the nesting depth of s.

Input: s = "(1+(2*3)+((8 )/4))+1"
Output: 3
Explanation: Digit 8 is inside of 3 nested parentheses in the string.

Input: s = "(1)+((2))+(((3)))"
Output: 3


Strategy:
- Var count to track nested.ness
- Left pointer at idx 0, right pointer at end of str
- While left < right
    - If str[left] == "(" and str[right] == ")", increment our count
        AND increment left++, right--
    - While str[left] !== (, left++
    - While str[right] !== ), right--
- Return count
*/

// Correct solution. Track # of closed parantheses basically 
var maxDepth = function(s) {
    let currDepth = 0, 
        maxDepth = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] == "(") {
            currDepth++; 
        } else if(s[i] == ")") {
            currDepth--; 
        }
        maxDepth = Math.max(currDepth, maxDepth)
    }
    return maxDepth;
};


// Two pointer, two slow and also missed edge case
var maxDepth = function(s) {
    let count = 0, 
        left = 0; 
    
    while(left <= right) {
        if(s[left] == "(" && s[right] == ")") {
            count++; 
            left++; 
            right--;
        }
        while(s[left] !== "(") {
            left++;
        }
        while(s[right] !== ")") {
            right--; 
        }
    }
    return count;
};










