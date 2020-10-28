

/*
Permutations

Given a collection of distinct integers, return all possible permutations.

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

If a set has n distinct eles, it'll have n! (exponential) permutations. 

Strat: 
- Vars: result arr, currArr, visited hash 
    Visited: {num: have we seen this num}
- 
*/


// Do me again 
// Oct, FB/ Bloomb. 
var permute = function(nums) {
    let res = [];
    
    backtrack();
    
    return res;
    
    // Recursive: 
    function backtrack(currArr = [], visited = {}) {
        // base case: 
        if(currArr.length === nums.length) {
            res.push(currArr.slice()); // we copy arr and add to res
            // IF our curr arr is a permutation of nums 
        }
        
        // recursive action. we look at every num and add it into the currArr 
        for(let num of nums) {
            if(!visited[num]) {
                visited[num] = true // we've seen this num so lets add
                currArr.push(num); 
                backtrack(currArr, visited) 
                currArr.pop(); // now we backtrack? 
                visited[num] = false // now we processed it, so now false
            }
        }
    }
};
// Time: O(n!) time. Because we need to increase output exponentially
// for every input increase 


// Grokking approach:
function generatePermutations(nums) {
    let res = [];

    generatePermutations(nums, 0, [], res);

    return res; 


    function generatePermutations(nums, idx, currArr, res) {
        // base case. we're set to add this currArr to res 
        if(idx === nums.length) {
            res.push(currArr);
        } else {
        // now let's add each num into currArr if we must 
        for(let i = 0; i < currArr.length + 1; i++) {
            let newPermute = currArr.slice(0) // clone 
            newPermute.splice(i, 0, nums[idx]); // insert nums[i] at index i
            permute(nums, idx + 1, currArr, res); // recurse action
        }
        }
    }
}
