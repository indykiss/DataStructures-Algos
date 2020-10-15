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
Strat:
- Vars: starter, set for the chars, length
- Two pointer approach, one pointer tracks the start of the str 
and the iterator for the for loop is the end pointer
- As we iterate through the str, we want to incre up end pointer 1
and reeval if we dont have repeating chars (use a set).
- If we do have repeating char, then move start pointer up and delete the arr[start] ele
- At the end of each loop, reeval what the maximum length is 

Bloomb, Oct
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



// Bloomberg, Sept: 
var lengthOfLongestSubstring = function(s) {
    let seen = new Set(),
        maxLength = 0,
        start = 0;
    
    for(let end = 0; end < s.length; end++) {
        let char = s[end]
        
        while(seen.has(char)) {
            seen.delete(s[start]);
            start++;
        }
        seen.add(char);
        maxLength = Math.max(maxLength, end - start + 1)
    }
    return maxLength;
}




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
