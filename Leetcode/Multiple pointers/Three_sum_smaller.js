

/*
3Sum Smaller

Given an array of n integers nums and an integer target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.

nums = [-2,0,1,3], target = 2
Output: 2

Because there are two triplets which sums are less than 2:
[-2,0,1]  ,  [-2,0,3]

Strat: Two pointers

1. Vars: counter of triplets w/ sum < target
2. Sort the arr

3. Nested loops: outer: curr num,
    inner: left/ right pointers 
    if currSum < target, add to the counter (right-left)  
        BECAUSE those triplet sums will always 
        be less than the target. 
        left++;
    if currSum >= target, right--

4. Return counter
*/


var threeSumSmaller = function(nums, target) {
    let counter = 0;
    
    nums = nums.sort((a,b) => a-b);
    
    for(let i = 0; i < nums.length - 2; i++) {
        let left = i+1,
            right = nums.length-1;
        
        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            
            if(sum < target) {
                // because the arr is sorted, once we find a sum < target, ALL NUMS btween 
                // left and right ARE ALSO combinations less than our target. 
                // Instead of iterating through them just subtract left from right to get count
                counter = counter + (right-left);
                left++;
            } else if(sum >= target) {
                right--;
            }
        }
    }
    
    return counter;
};
