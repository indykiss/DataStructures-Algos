

/*
Set Mismatch
https://leetcode.com/problems/set-mismatch/

You have a set of integers s, which originally contains all the 
numbers from 1 to n. Unfortunately, due to some error, one of the 
numbers in s got duplicated to another number in the set, which 
results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of 
this set after the error.

Find the number that occurs twice and the number that is missing 
and return them in the form of an array.

Input: nums = [1,2,2,4]
Output: [2,3]
Example 2:

Input: nums = [1,1]
Output: [1,2]
*/

var findErrorNums = function(nums) {
    let hash = {}, 
        dupe = 0,
        missing = 0;
    
    for(let num of nums) {
        if(hash[num]) {
            hash[num]++;
        } else {
            hash[num] = 1;
        }
    }
    
    for(let key in hash) {
        let val = hash[key]; 
        
        if(val === 2) {
            dupe = key;
        } 
    }
    
    for(let i = 1; i <= nums.length; i++) {
        if(!hash[i]) {
            missing = i; 
        }
    }
    return [dupe, missing]
};
