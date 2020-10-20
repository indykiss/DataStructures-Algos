


/*
Longest Repeating Character Replacement

Given a string with lowercase letters only, if you are 
allowed to replace no more than ‘k’ letters with any letter, find the 
length of the longest substring having the same letters after replacement.

"aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have a longest 
repeating substring "bbbbb".

String="abbcb", k=1
Output: 4
Replace the 'c' with 'b' to have a longest repeating substring "bbbb".


Strat: Sliding window
- Vars: start, for w/ end, hash:{char: freq}, trackMaximumRepeatingLetterCounter
If we ID a window that has letters that 

*/

var characterReplacement = function(str, k) {
    let start = 0,
        charFreqHash = {},
        maxRepeatCharCount = 0,
        maxLength = 0;
    
    for(let end = 0; end < str.length; end++) {
        let rightChar = str[end];
        
        // Add chars to hash if not already there
        if(charFreqHash[rightChar]) {
            charFreqHash[rightChar]++;
        } else {
            charFreqHash[rightChar] = 1;
        }
        
        // Find what char appears most often
        maxRepeatCharCount = Math.max(maxRepeatCharCount, charFreqHash[rightChar])
     
        // We haz a window with a majority letter. If the window has more than K 
        // number of non-majority letters, we have to update the start of window
        // until we're back to having K number of non-majority letters
        if((end - start + 1 - maxRepeatCharCount) > k) {
            let leftChar = str[start];
            charFreqHash[leftChar]--;
            start++;
        }
        
        // Update length of window if its new max
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
};



