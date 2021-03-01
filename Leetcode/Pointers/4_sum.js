


/*
Algoexpert 

Doesn't pass leetcode but whatever


Find the 4 nums that equal a target sum. 
Return all quadralet pairings in an arr. 


Strat: Naive/super inefficient
- 4 for loops to check every 4 num combos: O(n^ 4)



Strat: O(n^2) time & O(n^2) space
- 1st loop calculating two sums of 2 nums in a hash table
- As we create pairings, check if the hash has the complement pairing
if it does then add the nums to the quad arr


[1, 2, 3, 4] target : 10 

loop -> { 3: [1,2], .... 7: [3,4]
As we add, checking if the curr val has a
pairing that equals to target. 

If so, add nums to quadruplet arr. 


Edge:
- [2, 2, 2, 2, 2] => 8 => [2, 2, 2, 2].
Unique pairing 

*/



function fourNumberSum(nums, targetSum) {
    let pairings = {}; // {sum: [num1, num2]}
      let quad = [];
      
      // [1,2,3,4] , 10 
      for(let i = 1; i < nums.length - 1; i++) {
          let num1 = nums[i]; 
          for(let j = i+1; j < nums.length; j++) {
              let num2 = nums[j],
                       sum = num1 + num2, 
                      diff = targetSum - sum; 
              
              if(diff in pairings) {
                  for(let pair of pairings[diff]) {
                      quad.push(pair.concat([num1, num2]))
                  }				
              }
          }
          
          for(let k = 0; k < i; k++) {
              let num3 = nums[k],
                      currSum = num1 + num3; 
              // add to pairings if exists, else add to it
              if(currSum in pairings) {
                  pairings[currSum].push([num3, num1]);
              } else {
                  pairings[currSum] = [[num3, num1]];
              }
          }
      }
  
      return quad; 
  }
  

