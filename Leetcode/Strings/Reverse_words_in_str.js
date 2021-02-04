

/*
Reverse Words in a String

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated 
by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. 
The returned string should only have a single space separating the words. Do not include any extra spaces.
 

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"



Wrong: Strategy 1: O(n) time and O(n) space
- Use stack for new sentence
- Iterate character by char 
    - Start and end pointers
        - Increment end pointer until hits a space
        - If end is on a space, then add the substr
from start-> end into stack 
            - HANDLE: situations where double space/ "hi     bye"
            OR starts/ends with space
            - IF start is on space, keep incrementing start until on char? 
        - Once we add start/end substr to stack, move the start to 
        end + 1
- After stack is filled, remove each element in stack and add to 
a str, return str


Wrong: Strategy 2: O(n) time, O(n) space
BUT misses edge case of: "  hi "
- Split the str into arr based on the spaces
- Reverse arr
- Convert back to str with spaces


Edge cases: 
- Start with space or end with space 
- Double space in middle of str 

*/


var reverseWords = function(s) {
    let arr = s.split(" "),
        revStr = "";
    
    for(let i = arr.length - 1; i >= 0; i--) {
        
        // If there's an ele at arr[i] and anything in our
        // revStr, then add a space in between the eles 
        if(arr[i] && revStr.length > 0) {
                revStr += " ";
        }
            
        revStr += arr[i];
    }
    
    return revStr;
};





