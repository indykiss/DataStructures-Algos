/*
Valid Anagram

Given two strings s and t , write a function 
to determine if t is an anagram of s.

Define an anagram: two strings with same number of letters

Strat: Create a map for both strings. Sort to be alphabetical
If maps are equal, it's an anagram . 

Assumptions: All lower case
*/


var isAnagram = function(s, t) {
    // Keep 1 map to count common characters & number of
        // times they appear 
    const count = {};
    // Count the chars in S
    for(let i = 0; i < s.length; i++) {
        let char = s[i]
        count[char] = (count[char] || 0) + 1;
    }
    // Decrement char count in t
    for(let i = 0; i < t.length; i++) {
        let char = t[i]
        if(!count[char]) {return false;}         
        count[char]--;
    }   
    // If not length equal, false else true
    if(s.length !== t.length) {
        return false;
    }
    return true;
};

