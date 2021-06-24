

/*
Longest Substring with At Most K Distinct Characters


Given a string, find the length of the longest substring T 
that contains at most k distinct characters.

Example 1:

Input: s = "eceba", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.


*/




// Oct, FB, sliding window Grokking: 
var lengthOfLongestSubstringKDistinct = function(str, k) {
    let maxLength = 0,
        start = 0,
        charFreq = {},
        hashKeysCount = 0;
    
    for(let end = 0; end < str.length; end++) {
        // Let's add the right most char in hash
        let rightChar = str[end];       
        // If not in hash, add it plus increment key tracker 
            // or just increment if its there
        if(charFreq[rightChar]) {
            charFreq[rightChar]++;
        } else {
            charFreq[rightChar] = 1;
            hashKeysCount++;
        }    
        // Slide window down so update the start 
        if(hashKeysCount > k) {
            let leftChar = str[start];
            charFreq[leftChar]--;
            
            if(charFreq[leftChar] === 0) {
                delete charFreq[leftChar];          
                hashKeysCount--;
            }
            start++;
        }   
        maxLength = Math.max(maxLength, end - start + 1); // prev max or update w/ curr window
    }
    return maxLength;
};

