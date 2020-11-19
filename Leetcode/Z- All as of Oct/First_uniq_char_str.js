/*
First Unique Character in a String

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

Strategy:
- Make a hash of the chars we've seen and the number of times we've seen it
- Loop through string again. Once we come across a char that the hash has only a value of 1 with, return i 
- Else, return -1
*/


var firstUniqChar = function(s) {
    const seen = {};
    // Make a hash for char : number of occurences 
    for(let i = 0; i < s.length; i++) {
        if(seen.hasOwnProperty(s[i])) {
            seen[s[i]]++
        } else {
            seen[s[i]] = 1;
        }
    }
    // Loop through s. The first time we see the same char in seen with a value of 1, we've found it 
    for(let j = 0; j < s.length; j++) {
        if(seen[s[j]] === 1) {
            return j;
        }
    }
    return -1;
};

