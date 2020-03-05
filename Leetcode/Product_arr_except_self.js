

/*
Product of Array Except Self

Given an array nums of n integers where n > 1,  return an array output such
that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any preffix or 
suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Strategy: Get the product for all numbers before the index 
Get the product for all numbers after the index 
At the index number we're looking at in our return arr, 
 multiply together to get total product (except at index!)

O(n) time

[1,2,3,4] => 
[24,12,8,6]


Note: Was sooo much easier the 2nd time around!
*/ 

var productExceptSelf = function(nums) {
    const arr = [];
    let pre = 1;
    let post = 1; 
    
    // Loop until the index in nums
    for(let i = 0; i < nums.length; i++) {
        arr[i] = pre;
        pre = pre * nums[i]
    }
    
    // Loop from the end of nums until index
    for(let j = nums.length - 1; j >= 0; j--){
        arr[j] = arr[j] * post;
        post = post * nums[j]
    }
    return arr;
}
