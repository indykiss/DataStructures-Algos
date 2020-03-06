/*
Remove Duplicates from Sorted Array
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

Initial thoughts: Using a Set (but not in place) or filter (not in place)

*/

// Do this again. 
var removeDuplicates = function(nums) {
    // Loop through arr; if prev val is the same as current val, splice it
    for(let i = 0; i < nums.length; i++) {
        if(nums[i+1] === nums[i]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length; 
};
