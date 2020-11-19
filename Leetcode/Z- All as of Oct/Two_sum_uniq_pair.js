/*
Two Sum - Unique Pairs

Given an int array nums and an int target, find how many unique pairs in
the array such that their sum is equal to target. Return the number of pairs.

Input: nums = [1, 1, 2, 45, 46, 46], target = 47
Output: 2
Explanation:
1 + 46 = 47
2 + 45 = 47

*/

function uniqPairs(nums, target) {
  // Create a count, a seen set, a pair set 
  const pair = new Set();
  const seen = new Set();
  let count = 0;

  // Loop through nums, track current num and its partner
  for(let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    let partner = target - currentNum;

    // Most restrictive pairing 1st. If we've seen the current num AND pair has the partner, we increment and add both into seen 
    if(pair.has(partner) && !seen.has(currentNum)) {
      count++;
      seen.add(partner);
      seen.add(currentNum)
    }
    // Or if seen has the currentNum, we just add it into the pairings set
    if(!seen.has(currentNum)) {
      pair.add(currentNum);
    }
  }
  return count;
}

console.log(uniqPairs([1, 1, 2, 45, 46, 46], 47))
// =>  2 
