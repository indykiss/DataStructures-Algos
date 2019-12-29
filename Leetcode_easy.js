// Need to quickly make a couple tests for these, just to practice. Super simple ones

// Verifying Alien Dictionary
// In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.
// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

var isAlienSorted = function(words, order) {
    // Words are the words we're looking at
    // Order is the alien alphabet
    
    let newArr = [...words]
    // Let's sort this replicated arr; 
        // best practice is to not alter original arr
        .sort((a, b) => {
    // We compare each 1st letter of words in arr to see if they are alphabetical
            for (let i = 0; i < a.length; i++) {
        // If there's a tie, we continue
                if (a[i] === b[i]) continue;
            // If the words aren't alphabetical we do maths to say its false
            // and vice versa. Goal is boolean so we do this:
                if (order.indexOf(a[i]) > order.indexOf(b[i])) return 1;
                if (order.indexOf(a[i]) < order.indexOf(b[i])) return -1;
            }
            return a.length - b.length;
        }).join('') === words.join('');
    
    // Returns boolean
    return newArr;
};



// Add Binary 

// Given two binary strings, return their sum (also a binary string). 
// The input strings are both non-empty and contains only characters 1 or 0.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

var addBinary = function(a, b) {
    
    // Step 1: Translate inputs into real nums
    const num1 = BigInt('0b' + a);
    const num2 = BigInt('0b' + b);
        
    // Step 2: Sum them and 
        // translate sum back into binary then string 
    return (num1 + num2).toString(2);
    
};




// Valid Palindrome

// Given a string, determine if it is a palindrome, 
// considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string 
// as valid palindrome.

// Example 1:
// Input: "A man, a plan, a canal: Panama"
// Output: true






// Valid Palindrome II
// Given a non-empty string s, you may delete at most one character. 
// Judge whether you can make it a palindrome.

// Example 1:
// Input: "aba"
// Output: True





// First Bad Version

// You are a product manager and currently leading a team to develop 
// a new product. Unfortunately, the latest version of your product fails 
// the quality check. Since each version is developed based on the previous 
// version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the 
// first bad one, which causes all the following ones to be bad.
// You are given an API bool isBadVersion(version) which will return whether 
// version is bad. Implement a function to find the first bad version. You 
// should minimize the number of calls to the API.

// Example:
// Given n = 5, and version = 4 is the first bad version.

// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true

// Then 4 is the first bad version. 





// Merge Sorted Array

// Given two sorted integer arrays nums1 and nums2, merge nums2 
// into nums1 as one sorted array.

// Note:
// The number of eles initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or 
// equal to m + n) to hold additional elements from nums2.

// Example:
// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]





// Add Strings 

// Given two non-negative integers num1 and num2 represented as string, 
// return the sum of num1 and num2.




// Given two non-negative integers num1 and num2 
// represented as strings, return the product of num1 and num2, 
// also represented as a string.

// NOTE: THIS USES BUILT IN METHODS
    // NOT USING BUILT IN METHODS MAKES THIS A MEDIUM QUESTION

var multiply = function(num1, num2) {
    
    let result = 0; 
    
    // Step 1: Make string inputs into numbers
        let actualNum1 = Number(num1);
        let actualNum2 = Number(num2);
    
    // Step 2: Multiply them 
    
    result = actualNum1 * actualNum2
    
    // Step 3: Make the result into a string 
    return result.toString();
    
};