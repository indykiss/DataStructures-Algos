/*
Valid Anagram

Given two strings s and t , write a function 
to determine if t is an anagram of s.

Define an anagram: two strings with same number of letters

Strat: Create a map for both strings. Sort to be alphabetical
If maps are equal, it's an anagram . 

Assumptions: All lower case
*/

// aabbcc, ccbbaa => true 
// abx, xbc => falce
var isAnagram = function(s,t) {
    // S1: Either alphabetize all the chars in the str and 
        // compare them to each other 
    // OR count the letters in a hash
    let countS = {};
    let countT = {};

    for(let char of s) {
        if(countS.has(char)) {
            countS[char]++
        } else {
            countS[char] = 1;
        }
    }
    for(let char of t) {
        if(countT.has(char)) {
            countT[char]++
        } else {
            countT[char] = 1;
        }
    }
    // compare the two hashes
        // problem with hash order?
    if(countT == countS) return true; 
    return false; 

}


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

