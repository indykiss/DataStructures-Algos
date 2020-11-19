
/*
Find Pair With Given Sum

Given a list of positive integers nums and an int target, return indices of 
the two numbers such that they add up to a target - 30.

Conditions:

You will pick exactly 2 numbers.
You cannot pick the same element twice.
If you have muliple pairs, select the pair with the largest number.

Input: nums = [1, 10, 25, 35, 60], target = 90
Output: [2, 3]

Explanation: nums[2] + nums[3] = 25 + 35 = 60 = 90 - 30
Strat:
- Loop through nums, find the partner that meets the target 
- Target - 30 is real target
- As we loop, we track the numbers we've seen using a set 

*/


function givenSum(nums, target) {

  if(!nums || !target) {return null;}

  let seen = {};

  for(let i = 0; i < nums.length; i++) {
    let partner = (target - 30) - nums[i];
    let found = seen[partner];

    if(found !== undefined) {
      return [partner, i];
    }
    seen[nums[i]] = i;
  }
  // If we don't see any matching pairs
  return null
}

givenSum([[1, 10, 25, 35, 60]], 90)

// => [2,3]
// By hand: Looking for 2 sums that add up to 60 
  // Nums[0] = 1. Add that number to a set 
  // Look at nums[1] = 10. Does 10 + 1 = 60? 
  // No, move on, add 10 to seen. 
  // Nums[2] = 25. Does 25 + 1, or 25 + 10 = 60? 
  // No, keep going  
// Best case O(n) time, so try to keep that 
// Space? O(n) since we create a set to track things we've seen 



// Another option 
// var twoSum = function(nums, target) {
//   target -= 30;
//   const map = {};
//   const result = [-1, -1];
//   for (let i = 0; i < nums.length; i++) {
//     map[target - nums[i]] = i;
//   }
//   let max = Number.MIN_SAFE_INTEGER;
//   let maxIndex = -1;
//   for (let i = 0; i < nums.length; i++) {
//     if (map[nums[i]] !== undefined && i !== map[nums[i]]) {
//       if (nums[i] > max) {
//         max = nums[i];
//         maxIndex = i;
//       }
//       result[0] = map[nums[maxIndex]];
//       result[1] = maxIndex;
//     }
//   }
//   return result;
// };

