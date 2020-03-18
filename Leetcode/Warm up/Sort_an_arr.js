/*
Sort an Array

Given an array of integers nums, sort the array in ascending order.

Input: nums = [5,2,3,1]
Output: [1,2,3,5]

Strategy:
Merge sort
    S1: Divide in half. Treat the left half and right half to merge sort. Do this recursively 
    S2: Base case of if nums is at 1, we return it 
Quicksort:
    S1: Recursive solution. Pick a pivot point. 
    S2: Add all the values in the arr to the left if it's smaller.
    Add all the values that are larger into the right arr. 
    S3: Recursively check (...left, pivot, ...right)
*/




// Quicksort!!
var sortArray = function(nums) {
    // Base case! 
    if(nums.length < 2) {return nums}
    // Make a pivot and left/right arrs
    const pivot = nums[0]
    const left = [];
    const right = [];
    // Assign values into left and right
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] <= pivot) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    // Recurse! On left, pivot, right 
    return [...sortArray(left), pivot, ...sortArray(right)]    
}




// Mergesort!!!
var sortArray = function(nums) {
    // Base case! 
    if(nums.length < 2) {return nums};
    // Find the midpoint. 
        // Create left and right by recursing
    let midpoint = Math.floor(nums.length/2);
    let left = sortArray(nums.slice(0, midpoint));
    let right = sortArray(nums.slice(midpoint));

    // Return the left and right togther as 1 arr for next recurse
    return merge(left, right)
};

// Actual merge part of comparing eles
var merge = function(first, second) {
    const result = [];
    
    // Compare the elements. If an ele is smaller, it goes into res
    while(first.length > 0 && second.length > 0) {
        if(first[0] < second[0]) {
            result.push(first[0]);
            first.shift();            
        } else {
            result.push(second[0]);
            second.shift();
        }
    }
    // In situations where there's extra eles in either arr
    return result.concat(first, second)
}