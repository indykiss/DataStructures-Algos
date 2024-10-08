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


In python, the G way: 
class Solution:
    def intersection(self, n1: List[int], n2: List[int]) -> List[int]:
        ans = []
        i = 0
        j = 0
        n1.sort()
        n2.sort()
        
        while i < len(n1) and j < len(n2):
            if n1[i] > n2[j]:
                j += 1
            elif n1[i] < n2[j]:
                i += 1
            else:
                if n1[i] not in ans:
                    ans.append(n1[i])
                i += 1
                j += 1
        
        return ans



// Attempt #4: I think the important thing here to remember is 
// that we need to ID the use of making sets.  

var intersection = function(nums1, nums2) {
    const res = [];
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    
    for(let ele of set1) {
        if(set2.has(ele)) {
            res.push(ele)
        }
    }
    return res;
}



// Attempt #3
var intersection = function(nums1, nums2) {
    const res = [];
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    
    for(let val of set1) {
        if(set2.has(val)) {
            res.push(val)
        }
    }
    return res;
};

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


// Attempt #1
var intersection = function(nums1, nums2) {
    // Remove duplicates. Move nums1 into a Set. 
    const nums1Set = new Set(nums1);
        // O(n) space^
    let result = []
    // Loop through nums2
    for(let i = 0; i < nums2.length; i++) {
        let currentNum = nums2[i];
        
        if(nums1Set.has(currentNum) && !result.includes(currentNum)) {
            result.push(currentNum);
        }
    }
    // Any number thats in nums2 and nums1Set.has() goes in results
    return result;
};