

/*
Two Sum Less Than K
https://leetcode.com/problems/two-sum-less-than-k/

*/


var twoSumLessThanK = function(nums, k) {
    let j = nums.length-1,
        i = 0,
        max = -1;
    
    nums = nums.sort((a,b) => a-b);
    
    while(i < j) {
        let sum = nums[i] + nums[j]; 
        
        if(sum < k) {
            max = Math.max(nums[i] + nums[j], max); 
            i++;
        } else {
            j--;
        }
    }
    
    return max;
};

