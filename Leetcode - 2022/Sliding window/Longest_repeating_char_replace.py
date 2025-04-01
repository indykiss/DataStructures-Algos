
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

# Strategy
# Sliding window, left and right 
# Build a dictionary of the chars:freq in our window 
# If our window_size - most_freq_val_in_dict <= k, update the longest  maybe 
# If not, we need to update the start of our window. Remove/ decrement from dictionary 
# Return longest

class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        freq = {}
        left = 0
        longest = 0 
        
        for right in range(len(s)): 
            freq[s[right]] = freq.get(s[right], 0) + 1
            most_freq_val = max(freq.values())
            window_size = right-left+1
            
            # looking for if our current window minus our most freq value in dictionary is <= k. If so, update longest
            if window_size - most_freq_val <= k: 
                longest = max(longest, window_size)
                
            # move left of window up & remove from dic
            else: 
                freq[s[left]] -= 1
                if freq[s[left]] == 0:
                    del freq[s[left]]
                left += 1
                
        return longest



# JS: 
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



