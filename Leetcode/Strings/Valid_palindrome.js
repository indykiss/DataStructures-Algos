/*
Valid Palindrome
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true

Palindrome = when the reverse of the string is equal to the string itself.

*/


var isPalindrome = function(s) {
    let reversedS = s.toLowerCase().replace(/[^a-z0-9]/g, "")
        .split("").reverse("").join("");
    let str = s.toLowerCase().replace(/[^a-z0-9]/g, "")
    
    if(reversedS === str) {
        return true;
    } else {
        return false;
    }
    
}
