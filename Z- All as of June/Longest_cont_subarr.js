

/*
Longest Continuous Increasing Subsequence

Given an unsorted array of integers nums, return the length of the 
longest continuous increasing subsequence (i.e. subarray). The 
subsequence must be strictly increasing.
*/

var findLengthOfLCIS = function(nums) {
    
    let longest = 1,
        currLen = 1; 
    
    for(let i = 1; i < nums.length; i++) {
        let prev = nums[i-1], 
            curr = nums[i];
        
        if(curr > prev) {
            currLen++; 
        } else {
            currLen = 1; 
        }
        
        longest = Math.max(longest, currLen); 
    }
    
    return longest;  
};
