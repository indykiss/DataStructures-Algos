/*
Longest Palindromic Substring
Given a string s, find the longest palindromic substring in s. 
You may assume that the maximum length of s is 1000.

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Input: "cbbd"
Output: "bb"

Define palindrome as: longest string with either all even # of chars
OR mostly even # of chars except +1 odd char. 

Strat: Mix of dynammic programming and expanding from the center of the 
palindrome and working out. There are 2n-1 possible centers; for "abba" 
and "ava" as both palindromes. 
Time: O(n^2) : Nested for loop. While loop w/ subset of input so doesn't count
Space: O(1) : Saving a string only

Lesson: Draw it out. Nested loops are necessary sometimes, it's ok to make them.

*/


var longestPalindrome = function(s) {
    let max = "";

    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j < 2; j++) {
            let left = i, 
                right = i + j; 
            
                while(s[left] === s[right]) {
                    left--; 
                    right++; 
                } 

                if(right - left - 1 > max.length) {
                    max = s.substring(left+1, right);
                }
        }
    }
    return max; 
} 








// Attempt #2
var longestPalindrome = function(s) {
    let max = ''
    
    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j < 2; j++) {
            let left = i;
            let right = i + j;
            
            while(s[left] && s[left] === s[right]) {
                left--;
                right++
            }
            if((right - left - 1) > max.length) {
                max = s.substring(left + 1, right);
            }
        }
    }
    return max;
};


var longestPalindrome = function(s) {
    let max = ''
    // Loop through S
    for(let i = 0; i < s.length; i++) {
        // Loop for for "aba" & "abba"
        for(let j = 0; j < 2; j++) {
            let left = i;
            let right = i + j;
            // When left char exists and left char is the same as right char
                // as in, we've found possible palindrome 
                // Check one more step out if it's an even bigger palindrome
            while(s[left] && s[left] === s[right]) {
                left--;
                right++
            }
            // IF this substring is longer than max, reassign max
            if((right - left - 1) > max.length) {
                max = s.substring(left + 1, right);
            }
        }
    }
    return max;
};
