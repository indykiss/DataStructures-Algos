/* 
Valid Palindrome II
Given a non-empty string s, you may delete at most one character. 
Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
*/

var validPalindrome = function(s) {
        // We are going to loop through the 1st half of s
        for(let i = 0; i < s.length / 2; i++) {
            // Make a variable that checks the 
            let j = s.length - i - 1;
            if(s[i] != s[j]) {
                return isPalindrome(cut(s, i)) || isPalindrome(cut(s, j))
            }
        }
        return true;
    };
    
    // Step: Make a helper function that let's us cut a character
const cut = (s, i) => s.substr(0, i) + s.substr(i + 1);


// Step: Checks for palindrome 
const isPalindrome = (s) => s === s.split("").reverse().join("");