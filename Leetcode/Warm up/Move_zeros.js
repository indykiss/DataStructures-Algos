/*
Move Zeroes

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements. Do this in-place. 

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Loop through the arr, if it's zero push it to end of arr. And remove 0 from place.
Else, do nothing.
*/




var moveZeroes = function(nums) {
    for(var i = nums.length; i >= 0; i--) {
        if(nums[i] === 0) {
            // Remove the zero from its original place 
            // Push the zero in the end of the arr
            nums.splice(i, 1);
            nums.push([0]);
        }
    }
};