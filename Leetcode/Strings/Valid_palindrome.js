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


// Bloomb warmup Oct
var isPalindrome = function(x) {
    if(x < 0)  {
        return false
    };
    
    let str = x.toString(),
        arr = str.split(''),
        reversed = arr.reverse();
    
    return str === reversed.join('');
};



// Algoexpert:
// O(n) time and O(1) space
function isPalindrome(string) {
    let reversed = string.split('').reverse().join('');
    if(reversed == string) {
          return true;	
    } else {
          return false;
    }
}

function isPalindrome(str) {
    let reversedStr = '';
    for(let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i]
    }
    return str == reversedStr;
}

