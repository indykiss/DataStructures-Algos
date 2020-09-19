

/*
Maximum Subarray

Given an integer array nums, find the contiguous subarray 
(containing at least one number) which has the largest sum 
and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

As we're just returning the largest sum, we don't need to track 
what the arr eles equal that largest sum
*/


// best: 
var maxSubArray = function(nums) {
    let largestSum = nums[0];
    let bestSoFar = -Infinity; 
    
    for(let i = 0; i < nums.length; i++) {
        if(bestSoFar < 0) bestSoFar = nums[i];
        else bestSoFar += nums[i];
        if(bestSoFar > largestSum) largestSum = bestSoFar;
    }
    return largestSum; 
};


// Sept again:
var maxSubArray = function(arr) {
    let maxSum = arr[0], 
        bestSoFar = 0;

    for(let i = 0; i < arr.length; i++) {
        if(bestSoFar < 0) bestSoFar = arr[i];
            else bestSoFar = arr[i] + bestSoFar;

        if(bestSoFar > maxSum) {
            maxSum = bestSoFar; 
        }
    }
    return maxSum;
};