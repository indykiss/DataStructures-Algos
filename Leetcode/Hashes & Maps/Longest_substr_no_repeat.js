/*
Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters.

Example 1:
Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/


/*
Strat: Sliding window
- Vars: Set that tracks the uniq chars in the window 
    - Length that is updated as we move the window alone
    - We'll have a start and end of the window. 
- Iterate thru str. Before we add a char in, check if the new char is uniq by checking set.    
    - If curr char is not uniq, we want to remove the first 
ele in the set, using start++ and delete, until we don't have the new curr char in there. 
- Add to set. In each iteration, update length. 

Nov. Mostly got this one. Needed 1 hint 
*/
var lengthOfLongestSubstring = function(s) {    
    let start = 0,
        set = new Set(),
        length = 0;
    
    for(let end = 0; end < s.length; end++) {
        
        // If set has char, delete eles from set until 
        // that char is no longer in it
        if(set.has(s[end])) {
            while(set.has(s[end])) {
                set.delete(s[start]);
                start++;
            }
        }
        // Add this ele to the set
        set.add(s[end]);            
        // Update length for max    
        length = Math.max(length, end - start + 1)
    }
    return length;
}



// Sliding window approach. Oct, FB
var lengthOfLongestSubstring = function(s) {    

    let start = 0,
        maxLength = 0,
        hash = {}; // {char: idx}
    
    for(let end = 0; end < s.length; end++) {
        let rightChar = s[end];
        
        if(rightChar in hash) {
            // if hash has the char already, we want to update start
            // to where we skip over the end char
            start = Math.max(start, hash[rightChar] + 1)
        } 
        
        hash[rightChar] = end;
        
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
}


/*
Strat: Two pointer

- Vars: starter, set for the chars, length
- Two pointer approach, one pointer tracks the start of the str 
and the iterator for the for loop is the end pointer
- As we iterate through the str, we want to incre up end pointer 1
and reeval if we dont have repeating chars (use a set).
- If we do have repeating char, then move start pointer up and delete the arr[start] ele
- At the end of each loop, reeval what the maximum length is 
*/


var lengthOfLongestSubstring = function(s) {    
    let arr = s.split('')
    
    let charTracker = new Set(),
        start = 0,
        length = 0;
    
    // [a, b, c, d, e, a, a] 
    for(let end = 0; end < arr.length; end++) {
        let char = arr[end]
        
        while(charTracker.has(char)) {
            charTracker.delete(arr[start])
            start++;
        }
        
        charTracker.add(char);
        length = Math.max(length, end - start + 1)
    }
    return length;
};



// July?
var lengthOfLongestSubstring = function(s) {
    let map = {};
    let max = 0;
    let i = 0;
    let j = 0;
    while(j < s.length){
        if(map[s[j]]){
            map[s[i]] = null;
            i ++;
        }
        else{
            map[s[j]] = true;
            max = Math.max(max, j - i + 1);
            j ++;
        }
    }
    return max;
};
