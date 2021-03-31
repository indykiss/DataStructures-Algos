


/*
Count Negative Numbers in a Sorted Matrix

Given a m x n matrix grid which is sorted in 
decreasing order both row-wise and column-wise, 
return the number of negative numbers in grid.

Input: grid = 
[[4,3,2,-1],
 [3,2,1,-1],
 [1,1,-1,-2],
 [-1,-1,-2,-3]]
 
Output: 8
Explanation: There are 8 negatives number in the matrix.

Strategy: O(n * m) time / O(1) 
- Traverse all elements & count the negs

Strategy: O(log n) time, n is row / O(1) space
- Binary search the rows
  - If ceil/ floor is negative, add all between ceiling & floor to count 
  - If midpt < 0 ; then we move floor to midpt - 1


25 mins and looked at solution. I'm just slow at coding. 
~5 mins to get to optimal solution
*/

// time: O(log n * rows), O(1) space
var countNegatives = function(grid) {
    let count = 0; 
    
    for(let row of grid) {
        let firstNeg = findFirstNegative(row),
            numsToAdd = row.length - firstNeg;
        count += numsToAdd;
    }
    
    return count;
};


var findFirstNegative = function(arr) {
    let floor = 0, 
        ceil = arr.length - 1;
    
    while(floor <= ceil) {
        const mid = Math.floor((floor+ceil)/2); 
        
        if(arr[mid] < 0) {
            // we know all the nums to the right are neg, 
            // let's look left
            ceil = mid - 1; 
        } else {
            floor = mid + 1;
        }
    }
    
    return floor; // should be our 1st negative number
}

