
/*
Running Sum of 1d Array

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

*/

var runningSum = function(nums) {
    let sum = 0,
        res = [];
    
    for(let num of nums) {
        sum = sum + num;
        res.push(sum);
    }
    return res;
};

