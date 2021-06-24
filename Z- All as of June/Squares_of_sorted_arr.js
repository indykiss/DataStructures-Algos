

/*
Squares of a Sorted Array

Given an array of integers A sorted in non-decreasing order, return an 
array of the squares of each number, also in sorted non-decreasing order.


Example 1:

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]


Strat: Two pointers 
- Vars: left, right, result arr, what's the highest idx that should
exist in our res arr
- While l<r, we want to populate the highest idx with the biggest number 
Increment left or right depending on which squared ele we added to res
- Decrement highestIdx as we go until we're done bc we're going biggest
to smallest
*/


// [-4,-1,0,3,10]
var sortedSquares = function(A) {
    
    let res = [],
        n  = A.length,
        highestIdx = n - 1,
        left = 0,
        right = n-1;
    
    while(left <= right) {
        let leftSquared = A[left] * A[left],
            rightSquared = A[right] * A[right];
        
        if(leftSquared >= rightSquared) {
            res[highestIdx] = leftSquared;
            left++;
        } else {
            res[highestIdx] = rightSquared;
            right--;
        }
        highestIdx--;
    }
    
    return res;
};



