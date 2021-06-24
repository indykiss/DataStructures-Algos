

/*
Word Pattern 
https://leetcode.com/problems/word-pattern/

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a 
bijection between a letter in pattern and a non-empty word in s.

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false

*/

var wordPattern = function(pattern, s) {
    let arr = s.split(" "),
        tracker = {};
    
    if(pattern.length !== arr.length) {
        return false;
    }
    
    // need same number of chars in pattern as num of words in str
    if(new Set(pattern).size !== new Set(s.split(" ")).size) {
        return false;
    }
    
    // at idx, there must be a match between pattern and str
    for(let i = 0; i < pattern.length; i++) {
        let char = pattern[i],
            word = arr[i];
        
        if(tracker[char]) {
            if(tracker[char] !== word) return false;
        } else {
            tracker[char] = word; 
        }
    }
    return true;
    
};


