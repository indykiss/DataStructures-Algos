
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

// or 


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





// First Bad Version

// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
// You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// Example:
// Given n = 5, and version = 4 is the first bad version.

// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true

// Then 4 is the first bad version. 

function solution(isBadVersion) {
  return function(n) {
    var left = 0;
    var right = n;

    while (right - left !== 1) {
      var mid = parseInt((left + right) / 2);

      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid;
      }
    }
    return right;
  };
}

// or 

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // binary search
       var start = 1, end = n;
       while(start < end){
           var mid = Math.floor(start + (end-start) / 2);
           if(isBadVersion(mid)){
                end = mid; // look on left side of mid
           }else{
               start = mid+1; // look on the right side of mid
           }
       }
       return start;
    };
};





// Merge Sorted Array

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:
// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

// Example:
// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

var merge = function(nums1, m, nums2, n) {
    var x = 0,
        y = 0;
    
    nums1.splice(m, nums1.length);
    nums2.splice(n, nums2.length);
    
    while(y < n){
        if(nums2[y] < nums1[x] || nums1[x] === undefined){
            nums1.splice(x, 0, nums2[y]);
            x++;
            y++;    
        } else {
            x++;
        }
    }
};

// or 

var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length);
  nums1.push(...nums2.splice(0, n));
  nums1.sort((a, b) => a - b);
};





// Add Strings 

// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let sum = '';
     
    for (;i >= 0 || j >= 0 || carry > 0;i--, j--) {
        const digit1 = i < 0 ? 0 : num1.charAt(i) - '0';
        const digit2 = j < 0 ? 0 : num2.charAt(j) - '0';
        const digitsSum = digit1 + digit2 + carry;
        sum = `${digitsSum % 10}${sum}`;
        carry = Math.floor(digitsSum / 10);
    }
    
    return sum;
};
