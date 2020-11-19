

/*
Longest Consecutive Sequence

Given an unsorted array of integers nums, return the 
length of the longest consecutive elements sequence.


Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. 
Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Strat: Set
- Use set to track the uniq nums. Add nums arr to it. 
- As we iterate through nums, ID if we have the start of a sequence.  
As in currNum and set has currNum + 1. 
    If we do, lets keep currMax++ and currNum++ as set.has(currNum + 1);
- After each iteration, update our max sequence
- Return max
*/


var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;
    
    let tracker = new Set(nums),
        max = 0;
    
    for(let num of nums) {        
        let currMax = 1,
            currNum = num;
        // If the nums set has a sequence, 
        // count how long the sequence is 
        while(tracker.has(currNum + 1)) {
            currNum++;
            currMax++;
        }
        max = Math.max(max, currMax);
    }
    return max;
};

