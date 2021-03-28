


/*
Find Pivot Index

Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

Input: nums = [1,7,3,6,5,6]
Output: 3

The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11

Ex: nums = [2,1,-1] => 0

*/

// O(N) time and O(1) space
var pivotIndex = function(nums) {
    let sumLeft = 0, 
        sumRight = 0; 
    
    for(let num of nums) {
        sumRight += num; 
    }
    
    for(let i = 0; i < nums.length; i++) {

        // order matters : change left first 
        sumLeft += nums[i]; 

        // if NOW left = right, we're good 
        // ex: [5, 1, 5] : 
          // i = 1 
          // sumLeft = 6
          // sumRight = 6  [was: 11 - 5 at i=0] 
          // can ignore the extra vals at i, bc we will need to 
          // subtract/add the same val from sumL and sumR
        if(sumLeft === sumRight) {
            return i; 
        } 

        // we werent good, so lets change right for next loop
        sumRight -= nums[i];       

        console.log(sumLeft, sumRight);
    }
    return -1;
};

console.log(pivotIndex([5, 1, 5])); 

// Real answer: can't have a leftSum at i = 0, 
// or right sum at arr.length - 1`
