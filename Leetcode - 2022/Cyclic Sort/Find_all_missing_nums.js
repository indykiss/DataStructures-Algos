

/*
Find All Numbers Disappeared in an Array

Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some 
elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

*/


// Oct, FB/ Bloomb. Grok. Cyclic sort needed. CAN'T JUST DO ARR.SORT()
var findDisappearedNumbers = function(nums) {
    
    // Cyclic sort: 
    let i = 0;
    
    while(i < nums.length) {
        let j = nums[i] - 1;
        if(nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
        } else {
            i++;
        }
    }
    
    let missing = [];
    
    for(let i = 0; i < nums.length; i++) {
        
        if(nums[i] !== i+1) {
            missing.push(i+1);
        }
    }
    return missing;
};