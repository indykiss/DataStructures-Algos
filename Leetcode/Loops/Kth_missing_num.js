

/*
Kth Missing Positive Number

Given an array arr of positive integers sorted in 
a strictly increasing order, and an integer k.

Find the kth positive integer that is missing from this arr.

arr = [2,3,4,7], k = 5
Output: 9
Missing [1,5,6,8,9] Kth num in arr is 9 


Strategy:
- Iterate from 0 to arr[arr.length-1] + k (max distance possible)
- Create arr of numsMissing from input arr
- Once numsMissing's length is k, stop, return last num 
  - Early fail slightly faster

Binary search?
*/


var findKthPositive = function(arr, k) {
    let missing = [], 
        setNums = new Set(arr),
        numsMax = arr[arr.length - 1] + k; 
        
    for(let i = 1; i <= numsMax; i++) {
        
        if(!setNums.has(i)) {
            missing.push(i); 
        }
                
        if(missing.length === k) {
            return missing[missing.length - 1];
            break;
        }
    }
    
    
};

