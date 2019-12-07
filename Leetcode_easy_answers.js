
// Add Binary 

// Given two binary strings, return their sum (also a binary string). The input strings are both non-empty and contains only characters 1 or 0.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"


var addBinary = function(a, b) {
    const num1 = BigInt('0b' + a); 
    const num2 = BigInt('0b' + b);
    return (num1 + num2).toString(2);
};


// Or 

var addBinary = function(a, b) {
    a = a.split("").reverse().join("");
    b = b.split("").reverse().join("");
    len = a.length > b.length ? a.length : b.length;
    result = [];
    for(let i = 0; i < len; i += 1){
        num1 = Number(a[i] || 0);
        num2 = Number(b[i]) || 0;
        curr = Number(result[i]||0) + num1 + num2
        if(curr >= 2){
            result[i] = curr%2;
            result.push(1)
        }
        else{
            result[i] = curr
        }
    }
    return result.reverse().join("")
};



// Valid Palindrome

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:
// Input: "A man, a plan, a canal: Panama"
// Output: true


var isPalindrome = function(s) {
    var strippedString = s.replace(/\W/g, '');
    var reversedString = strippedString.split('').reverse().join('');
    
    return strippedString.toLowerCase() == reversedString.toLowerCase();
};



// Valid Palindrome II
// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

// Example 1:
// Input: "aba"
// Output: True

const validPalindrome = (s) => {
    for (let i = 0, stop = s.length / 2; i < stop; i++) {
        let j = s.length - i - 1
        if (s[i] !== s[j]) {
            return isPalindrome(cut(s, i)) || isPalindrome(cut(s, j))
        }
    }
    return true
};

const cut = (s, i) => s.substr(0, i) + s.substr(i + 1);
const isPalindrome = (s) => s === s.split('').reverse().join('');

// or 


const validPalindrome = (str, missed = false) => {
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      if (missed) return false;
      return validPalindrome(str.substring(i, j), true) || validPalindrome(str.substring(i + 1, j + 1), true);
    }
  }
  return true;
};
