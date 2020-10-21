/*
Remove Duplicates from Sorted Array
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

Initial thoughts: Using a Set (but not in place) or filter (not in place)

*/



// [2, 3, 3, 6]
// prevEle. If currEle === prevEle, don't increment. If it's dif, increment 
// length = 0


// [2, 3, 3, 6]
// Oct, Grokking, FB/ Bloomb
var removeDuplicates = function(nums) {
    let length = 1;
    // [2, 3, 3, 6]
    for(let idx = 1; idx < nums.length; idx++) {
        
        // prev: 2, curr: 3
        let prevEle = nums[idx-1],
            curr = nums[idx];
        
        if(prevEle !== curr) {
            nums[length] = nums[idx]
            length++;
        }
    }
    return length;
};


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
