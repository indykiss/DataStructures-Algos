/*
Reverse string, in-place
Write a function that reverses a string, with O(1) space used.  
The input string is given as an array of characters char[].

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
*/

// Really slow because of loop and .splice
var reverseStringSlow = function(s) {
    for(let i = 0; i < s.length; i++) {
        s.splice(i, 0, s.pop());
    }
};

// Faster. Swap things.
var reverseString = function(s) {
    let i = 0;
    let j = s.length - 1;
    while(i < j) {
        [s[i], s[j]] = [s[j], s[i]]
        i++;
        j--;
    }    
}