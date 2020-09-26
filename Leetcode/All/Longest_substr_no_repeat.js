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
