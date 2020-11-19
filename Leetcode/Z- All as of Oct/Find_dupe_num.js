


/*
Find the Duplicate Number

Given an array of integers nums containing n + 1 integers where each integer 
is in the range [1, n] inclusive.

There is only one duplicate number in nums, return this dupe num.


nums = [1,3,4,2,2]
Output: 2

Cyclic sort:

- We try to place each number on its correct 
index
- Since there's only 1 dupe, if we ever 
try to swap two numbers that are the same, 
return that number. 

*/

// oct, fb/bloomb, grokking. mentally tired. didn't really
// get there for this one. 

var findDuplicate = function(nums) {
    let i = 0;
    while(i < nums.length) {
        if(nums[i] !== i+1) {
            let j = nums[i] - 1;
        
            if(nums[i] !== nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            } else {
                // we found the duplicate num
                return nums[i];
            }
        } else {
            i++;
        }
    }
    return -1
};

