/*
For this file, I'm just going to run through the leetcode easy 
top interview questions module thing.

I've started it before but kept stopping because it's a bit hard for me sometimes. 

But going through as much of this as I can should be helpful in refreshing my DSAs.

I'm doing this to prep for Pinterest's code challenge. 

Topics include:
- Strings 
- Arrays 
- Linked Lists
- Trees
- Sorting and Searching
- Dynammic programming 
- Design
- Math
- Others 
*/


// Remove duplicates in place
// We just track the arr's LENGTH. So we just need to count the num of uniq vals
var removeDuplicates = function(nums) {
    nums = nums.sort((a,b) => a-b); 
    let i = 0;
    let j = 0;
    
    while (j < nums.length) {
        nums[i] = nums[j]; 
        i++;
        j++;
        while(nums[j] == nums[j-1]) {
            j++;
        }
    }
    return i;
} 


// Intersection of two arrays


// Two Sum - Given an arr and a target, return the two indices that sum up to the target
// [2,3,4], 6 => [0,2]
var twoSum = function(nums, target) {
    let seen = {};
    
    for(let i = 0; i < nums.length; i++) {
        let curr = nums[i],
            partner = target - curr,
            partnerID = seen[partner];
        if(partnerID !== undefined) {
           return [partnerID, i]
        }
        seen[curr] = i;
    }
}