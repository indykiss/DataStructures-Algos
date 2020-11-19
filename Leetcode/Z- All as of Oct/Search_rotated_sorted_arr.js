


/*
Search in Rotated Sorted Array

You are given an integer array nums sorted in ascending order, 
and an integer target.

Suppose that nums is rotated at some pivot unknown to you 
beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

If target is found in the array return its index, otherwise, 
return -1.

 
Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
*/

function search(nums, target) {
    let start = 0,
        end = nums.length - 1;
    
    while(start <= end) {
        let mid = Math.trunc((start+end)/2),
            curr = nums[mid];
        
        if(curr == target) {
            return mid;
        } 
        
        // Target is maybe in the 1st half
        else if(target < curr) {
            // We're in the weird rotated half
            if(curr > nums[end] && target <= nums[end]) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        // Target is maybe in 2nd half
        } else {
            // We're in the weird rotated half
            if(curr < nums[start] && target >= nums[start]) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
    }
    // If we never find the target
    return -1
};

