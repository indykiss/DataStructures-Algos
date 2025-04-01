

/*
3Sum Closest

Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).


Strat: Two pointers
- Two loops: outer loop tracks curr
    - inner loop tracks left & right pointer 

- If sum ever = target, return sum

- Var: closestPossibleSum. Update this value depending on which
difference from target is less than. 
*/

var threeSumClosest = function(nums, target) {
    
    nums = nums.sort((a,b) => a-b);
    
    let closestPossibleSum = nums[0] + nums[1] + nums[2];
    
    for(let i = 0; i < nums.length - 2; i++) {
        let left = i+1,
            right = nums.length-1;
                
        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            
            if(sum === target) {
                return sum;
            } else if (sum > target) {
                right--;
            } else {
                left++;
            }
            if(Math.abs(target - sum) < Math.abs(target - closestPossibleSum)) {
               closestPossibleSum = sum;
            }
        }
    }

    return closestPossibleSum; 
    
};


