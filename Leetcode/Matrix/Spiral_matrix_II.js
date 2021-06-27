/*
Spiral Matrix II: Practicing again

Given a positive integer n, generate a square matrix 
filled with elements from 1 to n2 in spiral order.

Ex:
Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
*/

var generateMatrix = function(n) {
    let matrix = [];
    let rowStart = 0, colStart = 0, rowEnd = n - 1, colEnd = n - 1;
    let num = 1;
    
    // Edge cases:
    if(n === 0) {return []};
    if(n === 1) {return [[1]]};
    
    // Start by making the arrays 
    for(let i = 0; i < n; i++) {matrix.push([])}
    
    // Make a while loop to keep the numbers good (use num since we can't use index)
    while(rowStart <= rowEnd && colStart <= colEnd) {
        // Start w/ 1st row 
        for(let j = colStart; j <= colEnd; j++) {
            matrix[rowStart][j] = num;
            num++;
        }
        rowStart++;
        
        // Right edge with column
        for(let k = rowStart; k <= rowEnd; k++) {
            matrix[k][colEnd] = num;
            num++;
        }
        colEnd--;
        
        // Bottom row going left
        for(let l = colEnd; l >= colStart; l--) {
            matrix[rowEnd][l] = num;
            num++;
        }
        rowEnd--;
        
        // Go up
        for(let m = rowEnd; m >= rowStart; m--) {
            matrix[m][colStart] = num;
            num++;
        }
        colStart++;
    }
    return matrix;
};
