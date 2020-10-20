


/*
Max Consecutive Ones: Leetcode easy

Given a binary array, find the maximum number 
of consecutive 1s in this array.

Input: [1,1,0,1,1,1]
Output: 3


Strat: Sliding window 
1. Vars: start, for w/ end, maxlength, numOfOnes
2. IF we're at a one, we increment numOfOnes
3. IF we're at a 0, we restart our window AND restart our
numOfOnes = 0
4. At each point, maxLength = Math.max(maxLength, numOfOnes)
5. Return maxLength;
*/


var findMaxConsecutiveOnes = function(nums) {
    let start = 0,
        maxLength = 0,
        numOfOnes = 0;
    
    for(let end = 0; end < nums.length; end++) {
        if(nums[end] === 0) {
            start = end;
            numOfOnes = 0;
        }
        if(nums[end] === 1) {
            numOfOnes++;
        }
        
        maxLength = Math.max(maxLength, numOfOnes);
    }
    return maxLength;
    
};



