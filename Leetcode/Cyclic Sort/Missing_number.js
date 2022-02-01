

/*
Missing Number

Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.

Ex:
nums = [3,0,1]
Output: 2

Strat:
- Sort the arr
- Iterate. If the curr num isn't the num that should sequentially
be next, return it
- If we've never needed to return, return the 
length of the arr. Bc we'll have missing the last num there 
*/

# Python, much faster: 
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        fullSum = 0
        actualSum = 0
        
        for i in range(len(nums)):
            fullSum += i+1
            actualSum += nums[i]
            
        return fullSum - actualSum
        

var missingNumber = function(nums) {
    nums = nums.sort((a,b) => a - b);
    
    let n = nums.length;

    for(let i = 0; i < nums.length; i++) {  
        // If we're at the index and the num doesn't match
        // return the i, as in what the num should be
        if(nums[i] !== i) {
            return i;
        }
    }
    // we've not needed to return anything, so 
    // we're just missing the last num in the arr
    return n;
};


