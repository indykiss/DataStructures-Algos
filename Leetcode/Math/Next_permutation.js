

/*
Next Permutation

Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).

The replacement must be in place and use only constant extra memory.


Strategy:
Brute force: look at all possible permutations to check if any greater. Time: O(n!) 

No idea. Need to redo this some time. 
*/


var nextPermutation = function(nums) {
    let pivotIndex = -1; 
    
    for(let i = 1; i < nums.length; i++) {
        let prev = nums[i-1], 
            curr = nums[i]; 
        
        if(prev < curr) {
            pivotIndex = i; 
        }
    }
    
    // if we dont have to pivot, return nums sorted 
    if(pivotIndex == -1) {
        return nums.sort((a,b) => a-b); 
    }
    
    // try to find the ONE num to swap to get closest bigger number
    let smallestIdx = pivotIndex; 
    
    for(let i = pivotIndex; i < nums.length; i++) {
        
        if(nums[i] > nums[pivotIndex-1] && nums[i] < nums[pivotIndex]) {
            smallestIdx = i; 
        }
    }
    
    // swap the 2 numbers
    [nums[smallestIdx], nums[pivotIndex-1]] = [nums[pivotIndex-1], nums[smallestIdx]];
    
    // special sort 
    
    for(let i = pivotIndex; i < nums.length; i++) {
        for(let j = pivotIndex; j < nums.length-1; j++) {
            if(nums[j+1] < nums[j]) {
                [nums[j+1], nums[j]] = [nums[j], nums[j+1]]
            }
        }
    }
    
    return nums;
};








