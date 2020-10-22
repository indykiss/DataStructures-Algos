/*
Sort Colors

Given an array nums with n objects colored red, white, or blue, sort them 
in-place so that objects of the same color are adjacent, with the colors in 
the order red, white, and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, 
and blue respectively.

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]


Strat: Two pointer
*/

// Oct, FB/ Bloomb. Ya I didn't pay attention
// or get this. It's 9p
var sortColors = function (nums) {
    let left = 0,
        right = nums.length - 1,
        i = 0;

    while (i <= right) {
        if (nums[i] === 0) {
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++;
            i++;
        } else if (nums[i] === 2) {
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--;
        } else {
            i++;
        }
    }
    return nums;
};
    
    
    
    