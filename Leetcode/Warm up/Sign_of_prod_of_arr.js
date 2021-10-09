
/*
Sign of the Product of an Array

There is a function signFunc(x) that returns:

1 if x is positive.
-1 if x is negative.
0 if x is equal to 0.
You are given an integer array nums. Let product be the product of all values in the array nums.

Return signFunc(product).

Input: nums = [-1,-2,-3,-4,3,2,1]
Output: 1

Input nums = [1,5,0,2,-3]
Output: 0


Strategy
- Iterate thru nums, track sign of prod so far
- multiply signFunc(num) with prod to change prodSoFar
- Return prod

*/


var arraySign = function(nums) {
    let prod = 1; 
    
    for(let num of nums) {
        prod = prod * signFunc(num)
    }
    
    return prod;
};

var signFunc = function(num) {
    if(num === 0) {
        return 0;
    } else if(num > 0) {
        return 1;
    } else {
        return -1;
    }
}