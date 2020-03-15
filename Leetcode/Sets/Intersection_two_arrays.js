/*
Intersection of Two Arrays

Given two arrays, write a function to compute their intersection.

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]

Strat: 
Looking for where there's commonalities within both arrs. No dupes
*/

// Do me again. I took way too long 
var intersection = function(nums1, nums2) {
    let result = [];
    
    // S1: Remove dupes 
    const nums1Set = new Set(nums1);
    const nums2Set = new Set(nums2);
    
    // S2: Loop from 1 arr, check if arr2.includes(eleInArr1)
        // If so, add it into an ans array 
    for(let val of nums1Set) {
        if(nums2Set.has(val)) {
            result.push(val)
        }
    }
    return result;
} 
