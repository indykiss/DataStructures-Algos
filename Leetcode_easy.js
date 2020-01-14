/*
Index: 
1. Verifying Alien Dictionary 
2. Add Binary
3. Valid Palindrome
4. Valid Palindrome II
5. First bad version
6. Merge sorted array 
7. Add strings 
8. Diameter of a binary tree (dfs) 
9. Two Sum
10. Intersection of two arrays 
*/



/*
Need to quickly make a couple tests for these, just to practice. Super simple ones

Verifying Alien Dictionary
In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.
Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
*/

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

/*
Valid Palindrome

Given a string, determine if it is a palindrome, 
considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string 
as valid palindrome.

Example 1:
Input: "A man, a plan, a canal: Panama"
Output: true

Actually need to add in punctuation
*/

var isPalindrome = function(s) {
    
    // Assumptions: Empty input is a palindrome. 
    // Edge cases: There are spaces and punctuations
    
    // Reading a str forward and backward is the same
    
    // Step 1: Clean up the arr to remove spaces & punctuation
         //  Convert str to arr, reverse it, join to get a string
    const reversedS = s
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "")
        .split("")
        .reverse()
        .join("");    
    
    const cleanS = s
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");
    
    // Step 3: Compare original str with reversed to see if palindrome
    return reversedS === cleanS
}


// Really just for very simple palindromes, no spaces or punctuation
function palindrome(str) {
    const reversedStr = str.split('').reverse().join('');

    return reversedStr === str
}



// Valid Palindrome II
// Given a non-empty string s, you may delete at most one character. 
// Judge whether you can make it a palindrome.

// Example 1:
// Input: "aba"
// Output: True

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

/*

Given a number. Return this number and any number after as the bad number. 
Bad number = floor. Highest number is the ceiling. 
Anything between and including floor/ ceiling is bad. 

Binary search! 

*/

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // Binary search
        
        // Make midpoint, start, and end. Needs to be var bc scope
        var start = 1;
        var end = n;
        
        // While start is less than end 
        while(start < end) {    
        let midpoint = Math.floor(start + (end - start)/ 2)
                    
            if(isBadVersion(midpoint)) { // change ceiling to mid. Go left
                end = midpoint;
            } else {  // change floor to mid. Go right
                start = midpoint+1;
            }
        }
        // Return the start of the bad version
        return start;
    };
};



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

// IF can use sort: 
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length)
  nums2.push(...nums2.splice(0, n));
  nums1.sort((a, b) => a - b)

// If can't use sort, it's a whole thing: 
    // https://www.interviewcake.com/question/javascript/merge-sorted-arrays?course=fc1&section=array-and-string-manipulation 
    
    
    
    

// Add Strings 

// Given two non-negative integers num1 and num2 represented as string, 
// return the sum of num1 and num2, also represented as a string.

var addStrings = function(num1, num2) {
    
    // Step 1: Make some variables
    let carry = 0,
        result = "",
        num1Index = num1.length - 1, 
        num2Index = num2.length - 1; 
        
    // Step 2: Access the values in the string
            // Do maths??
    while(num1Index >= 0 || num2Index >= 0) {
        const val1 = num1[num1Index--] || 0;
        const val2 = num2[num2Index--] || 0;
        // The +variable gives us its numeric representation
        const sum = +val1 + +val2 + carry;
            
        result = sum % 10 + result; 
            
        carry = Math.trunc(sum/ 10);
    }
        
    // Step 3: When there's leftover numbers, we add them to the result & return
    if (carry) {
       result = carry + result;
    }
        
    return result;
};



// Diameter of a binary tree

// Given a binary tree, you need to compute the length of the 
// diameter of the tree. The diameter of a binary tree is the length 
// of the longest path between any two nodes in a tree. This path may 
// or may not pass through the root. Length of path is the # of edges.

// Assumptions: Perfect tree with each node having 2 children nodes 
// Edge cases: 1 node


var diameterOfBinaryTree = function(root) {
    
    let diameter = 0; 
    
    dfs(root);
    
    return diameter;
    
    // Let's make a depth-first search transversal 
    function dfs(node, height) {
        // If there's no nodes, we return diameter of 0
        if(!node) return 0;
        
            // Node.left and node.right are built in functions for trees that 
            // print the nodes on the left and on the right. Left as in 
            // the children nodes that are left
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        // Update diameter at every node 
        diameter = Math.max(diameter, left + right);
        
        // Update the largest number of edge so far
        return Math.max(left, right) + 1;
    }
};

// Input [1,2,3,4,5] => 3 



// Two Sum

// Given an array of integers, return indices of the two numbers 
// such that they add up to a specific target.

// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.

// O(n) solution as we loop once

var twoSum = function(nums, target) {
    // Make a hash 
    let hash = {}
    
    // Loop through nums
    for(let i = 0; i < nums.length; i++) {
        // We are looking for the number that completes the below
        let partner = target - nums[i];
        
        // Return if we've found it
        if (hash[partner] !== undefined) {
            return [hash[partner], i];
        } else {
            // If it doesn't, we save it 
            hash[nums[i]] = i
        }
    }    
}


/* 
Intersection of Two Arrays

I DID THIS ALMOST BY MYSELF! 
Vague amount of googling and a glance at strategy (not code) in a C++
solution AND I DID IT. I'm doing ok. 

Given two arrays, write a function to compute their intersection.

Nums1: [4,9,5]
Nums2: [9,4,9,8,4]
Output: [9,4]

Find the elements in nums2 that also exist in nums1
Order doesn't matter. 
Exclude duplicate values.

*/

var intersection = function(nums1, nums2) {
    
    // Remove duplicates. Move nums1 into a Set. 
    
    const nums1Set = new Set(nums1);
        // O(n) space^
    let result = []
    
    // Loop through nums2
    for(let i = 0; i < nums2.length; i++) {
        let currentNum = nums2[i];
        
        if(nums1Set.has(currentNum) && !result.includes(currentNum)) {
            result.push(currentNum);
        }
    }
        // O(n) time^ 
    // Any number thats in nums2 and nums1Set.has() goes in results
    return result;
};



