

/*
Minimum Size Subarray Sum

Given an array of n positive integers and a positive 
integer s, find the minimal length of a contiguous 
subarray of which the sum ≥ s. If there isn't one, return 0 instead.

Input: [3, 4, 1, 1, 6], S=8 
Output: 3
Explanation: Smallest subarrays with a sum greater 
than or equal to '8' are [3, 4, 1] or [1, 1, 6].


*/

// Oct, Grokking: 
var minSubArrayLen = function(s, nums) {
    
    let minLength = Infinity, // minLength has to be a big num. 0 would always win
        start = 0,
        windSum = 0
    
    for(let end = 0; end < nums.length; end++) {
        
        windSum += nums[end];
        
        while(windSum >= s) {
            minLength = Math.min(minLength, end - start + 1);
            windSum -= nums[start];
            start++;
        }
    }
    
    if(minLength === Infinity) {
        return 0;
    }

    return minLength;
};
