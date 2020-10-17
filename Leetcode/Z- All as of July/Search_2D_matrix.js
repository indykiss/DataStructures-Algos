/*
Search a 2D Matrix II

Write an efficient algorithm that searches for a value in an m x n matrix. 
This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Example:

Consider the following matrix:
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.
Given target = 20, return false.
*/

var searchMatrix = function(matrix, target) {
    // No matrix
    if(matrix.length === 0) {return false}
    
    // Start at the top right element
    var row = 0;
    var col = matrix[0].length - 1;
    // Loop until row and col numbers are within bounds
    while(row <= matrix.length - 1 && col >= 0) {
        if(matrix[row][col] > target) {
            // Current ele is greater than target, but 
            // we might be in the right row, so change col
            col--;
        } else if(matrix[row][col] === target) {
            return true;
        } else if(matrix[row][col] < target) {
            // Let's look at the next row
            row++;
        }
    }
    // Target's not in the matrix
    return false;
};


// One-liner but very slow:
// 1. [].concat(...matrix)
    // return all the numbers in the matrix in one array:
    // [1, 4, 7, 11, 15, 2, 5, 8, 12, 19, 3, 6, 9, 16, 22, 10, 13, 14, 17, 24, 18, 21, 23, 26, 30]
// 2. Use .includes(target) to see if target is in the matrix array

// var searchMatrix = function(matrix, target) {
//     return [].concat(...matrix).includes(target)
// };

