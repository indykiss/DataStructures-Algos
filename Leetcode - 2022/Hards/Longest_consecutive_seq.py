

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

# Strategy
# Use a set to track the nums we have
# Iterate through nums, track curr_max 
# While num+1 in tracker, increment curr_max and curr_num 
# Update max after we've found longest consecutive and return it 


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) == 0: return 0
        tracker = set(nums) # what nums do we have
        max_len = 0 
        
        for num in nums: 
            if num-1 not in tracker:
                curr_max = 1
                curr_num = num 

                while (curr_num+1) in tracker: 
                    curr_num += 1
                    curr_max += 1

                max_len = max(max_len, curr_max)
            
        return max_len




# JS:
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

