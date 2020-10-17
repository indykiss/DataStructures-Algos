/*
Valid Palindrome
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true

Palindrome = when the reverse of the string is equal to the string itself.

*/


// Oct, FB 
var isPalindrome = function(s) { 
    // lower case and strip punctuation & nums
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "")
    
    let arr = s.split('')
    
    // create left and right pointer
    let l = 0,
        r = s.length - 1;
        
    // while left is less than right, if eles ever not equal
        // not a palindrome 
    // bc we use < and not <= we don't worry about center char if odd length
    while (l < r) {
        if(arr[l] !== arr[r]) {
            return false;
        }
        // move left more left and right more right
        l++;
        r--;
    }
    return true;
};



// Without str reverse: Bloomb oct 
var isPalindrome = function(x) {
    if(x < 0) return false;
    
    let rev = 0,
        num = x;
    
    while(num > 9) {
        rev = (rev * 10) + (num % 10);
        num = parseInt(num/10);
    }
    
    rev = rev * 10 + num;
    
    return x === rev;
}


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

