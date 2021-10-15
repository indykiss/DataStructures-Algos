

/*
Valid Triangle Number

Given an integer array nums, return the number of triplets chosen 
from the array that can make triangles if we take them as side 
lengths of a triangle.


Input: nums = [2,2,3,4]
Output: 3
Explanation: Valid combinations are: 
2,3,4 (using the first 2)
2,3,4 (using the second 2)
2,2,3

Not great. Strategy:
- Define triangle:
    - Add two sides. Sum must be greater than the third side. Do this for all 3 possibilities. If accurate, triangle 
- ID Triplets: 
    - Brute force: 3 nested for loops, check every possible iteration of triplets if triangle 
    
    I can't figure this out so we did brute force. 
    - Sort the nums. Three pointers within 1 iteration
        - Iterate thru nums 
            - left pointer, i-1
            - right pointer, i+1
        - Update pointers depending on conditions
            - Add two sides. Sum must be greater than the third side. 
            -Do this for all 3 possibilities. If accurate, triangle 
            - If we find triangle, add the 3 nums to triplets arr
        - return triplets 
*/


var triangleNumber = function(nums) {
    let triplets = 0; 

    nums.sort((a,b) => a-b); 
    
    for(let i = 0; i < nums.length-2; i++) {
        for(let l = i+1; l < nums.length-1; l++) {
            for(let r = l+1; r < nums.length; r++) {
                let n1 = nums[l], 
                    n2 = nums[i], 
                    n3 = nums[r]

                if(n1 + n2 > n3) {
                    triplets++;
                }                 
            }
        }
    }
    return triplets;
};






