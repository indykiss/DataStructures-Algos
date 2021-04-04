
/*
Given an array of non-negative integers “nums” and an integer 
“target”, return the length of the longest continuous subarray 
whose sum is equal to the target.

Example 1:
Input: nums = [10, 10, 30, 20, 10, 5, 5, 10, 40, 10], target = 50
Output: 5

Example 2:
Input: nums = [10, 10, 6, 20, 10, 5, 5, 10, 40, 10], target = 11
Output: 0

Example 3:
Input: nums = [10, 10, 30, 20, 10, 5, 5, 10, 40, 10], target = 10
Output: 2
 
Constraints:
  •  1 <= nums.length <= 2 * 10^4
  •  0 <= target <= 10^7
  •  0 <= nums[i] <= 1000


Strategy: Sliding window 
- Var to track maxLen
- Two pointers, L & R 
- Use a for loop
- If tempSum < target, R++
- If tempSum == target, update maxLen, R++
- If tempSum > target, L++  
- Return maxLen

Edge/ considerations: 
- Zeros are possible
- No subarr = sum 
- two subs of same len, but ok 
*/


// [20, 100, 10, 10] 20 => 2
function maxLengthFinder(arr, target) {
  let l = 0, 
      r = 0, 
      maxLen = 0,
      tempSum = 0;
  
  for (let r = 0; r < arr.length; r++) {
    tempSum += arr[r];
   
    while (tempSum > target) {
      tempSum -= arr[l];
      l++;
    }
    
    if (tempSum === target) {
      maxLen = Math.max(r - l + 1, maxLen); // maxLen = 1
    }
  }
  return maxLen;
  
  //   mine but wrong:
  //   while(r <= arr.length - 1) {   
  //     if(tempSum === target) {
  //       maxLen = Math.max(r - l + 1, maxLen); // maxLen = 1
  //       r++; 
  //       tempSum += arr[r];
  //     } else if(tempSum < target) {
  //       r++; 
  //       tempSum += arr[r];
  //     } else if(tempSum > target) {
  //       tempSum -= arr[l]; 
  //       l++; 
  //     }  
}


console.log(maxLengthFinder([100, 100, 10, 10, 10], 30)); // 3



/*
sliding window
binary search
prefix sums
stacks/queues
dfs
bfs (normal / level wise)
tree traversals (pre in post)
recursion
tries
topological sort 
dynamic programming (google, nefarious startups)
*/


