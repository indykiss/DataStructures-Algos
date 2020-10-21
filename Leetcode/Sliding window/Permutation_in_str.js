


/*
Permutation in String

Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

 

Example 1:

Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").

Strat: Sliding window
*/











// Oct, FB. Grokking question. The grokking answer doesn't pass so whatever I'm done. 
// This is how I did it. OFF BY ONE ERROR. IDK. TOO TIRED TO THINK
// s1 = "ba" s2 = "eidbaooo"
var checkInclusion = function(s1, s2) {
    let start = 0,
        haveAMatch = 0,
        charFreqHash = {},
        uniqChars = 0;
    
    // Add our pattern to the hash 
    for(let idx = 0; idx < s1.length; idx++) {
        if(charFreqHash[s1[idx]]) {
            charFreqHash[s1[idx]]++;
        } else {
            charFreqHash[s1[idx]] = 1;
            uniqChars++;
        }
    }
    
    // Iterate through our longer str
    for(let end = 0; end < s2.length; end++) {
        // If char being added is in our hash
            // we decrement it's frequency
        let rightChar = s2[end];
        if(charFreqHash[rightChar]) {
            charFreqHash[rightChar]--; 
            // IF our char freq becomes zero, we have a match
            if(charFreqHash[rightChar] === 0) {
                haveAMatch++; 
                uniqChars--;
            }
        }
         
        // IF num of chars matched is equal to num of dist chars
            // in pattern, return true
        if(uniqChars === haveAMatch) {
            return true;
        }
        
        // IF window size is greater than length of s1, shrink window 
        if( (end - start + 1) > s1.length) {
            let leftChar = s2[start];
            start++;
            // IF we had popped off a matched char, add it back in
                // either increment or add in completely
            if(leftChar in charFreqHash) {
                if(charFreqHash[leftChar] === 0) {
                    haveAMatch--;
                }
                charFreqHash[leftChar]++;
            }
        }
    }
    
    return false;
};


