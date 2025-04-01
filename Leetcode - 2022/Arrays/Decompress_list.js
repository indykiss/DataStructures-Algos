

/*
Decompress Run-Length Encoded List

We are given a list nums of integers representing a list compressed 
with run-length encoding.

Consider each adjacent pair of elements [freq, val] = [nums[2*i], 
nums[2*i+1]] (with i >= 0).  For each such pair, there are freq 
elements with value val concatenated in a sublist. Concatenate 
all the sublists from left to right to generate the decompressed list.

Return the decompressed list.

Ex: 
[1,2,3,4]
We have 1 two then we have 3 fours. 
[2, 4, 4, 4] 


Strategy: O(nums[0] + nums[2] +... nums[nums.length - 1]) time/ space
- Iterate thru arr, start at 1, increment +2 
 - Look at prev num in arr, multiply the num[i]
 w/ mini nested loop of 0 => prev num. 
  - Push into res arr ^ num of times
*/

var decompressRLElist = function(nums) {
    let res = []; 
    
    for(let i = 1; i < nums.length; i+=2) {
        let prev = nums[i-1],
            curr = nums[i]; 
        
        for(let j = 0; j < prev; j++) {
            res.push(curr); 
        }
    }
    return res; 
};



