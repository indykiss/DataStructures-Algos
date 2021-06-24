/*
Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in ascending order, 
find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

Ex: 
nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Strat: Binary search 
- There are possibly dupes of target. We want to return 
start and end of where the dupes start and end for the target. 
 If no dupes, just return [idx, idx] of the 1 spot. 


- Traditional binary search BUT when we find the mid === target, 
we want to make start and end become mid. Break loop. 
- Then update start and end outwards until not === target.
- Return [start, end] unless edge of target not in arr. 
*/


// Leetcode. Oct. Grok too. FB/ bloomb
var searchRange = function(nums, target) {
    let start = 0,
        end = nums.length - 1;
    
    while(start <= end) {
        
        let mid = Math.floor((end+start)/ 2);
        
        if(target === nums[mid]) {
            start = mid;
            end = mid;
            break;
            // NOW let's do a loop outwards and find the range
        }
        
        if(target < nums[mid]) {
            end = mid - 1;
        } else if (target > nums[mid]) {
            start = mid + 1;
        }
    }
    
    // Find the range 
    while(nums[start-1] === target) {
        start--;
    }
    while(nums[end+1] === target) {
        end++;
    }
    
    // target num isn't in the arr
    if(start > end) return [-1,-1]
    
    return [start, end];
};

