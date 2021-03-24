


/*
Split a String in Balanced Strings

Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it in the maximum amount of balanced strings.

Return the maximum amount of split balanced strings.

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring 
contains same number of 'L' and 'R'.


Strategy:
- Within a substring, we want to count Ls and Rs
- We can just do countOfRs and countOfLs 
- And count each. When they are equal, we increment
a totalCounter, then set our 2 char counters to 0 

Edge:
- Any chars not L or R?
- RRLLRL => RRLLRL, RL : 2
    - NOT RRLLRL, RRLL, RL : 3
- Unique substrs? 
    - RLRL => RL, RL : 2 
    - NOT RL : 1 

Run time: O(n) time, O(1) space 
*/


var balancedStringSplit = function(s) {
    
    let countOfLs = 0,
        countOfRs = 0,
        totalCount = 0; 
    
    for(let char of s) {
        if(char === "L") {
            countOfLs++; 
        } else if (char === "R") {
            countOfRs++; 
        }
        if(countOfLs === countOfRs) {
            totalCount++;
            countOfRs = 0; 
            countOfLs = 0;
        }
    }
    return totalCount;
};

