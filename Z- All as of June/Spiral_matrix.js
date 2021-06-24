/*
Spiral Matrix
Given a matrix of m x n elements (m rows, n columns), 
return all elements of the matrix in spiral order.

Treat each row differently.
Loop as many times there are columns. 

Lesson: 
.concat() merges arrays 
.push() adds elements to the end of an array
*/

var spiralOrder = function(matrix) {
    // Edge: Bad inputs 
    if(!matrix) {return false}
    if(!matrix[0]) {return false}
    
    let arr = [];
    
    // Top row
    arr = arr.concat(matrix.shift());
    
    // Right edge 
    for(let i = 0; i < matrix.length - 1; i++) {
        arr.push(matrix[i].pop());
    }
    
    // Last row, in reverse order 
    const lastRow = matrix.pop()
    
    if(lastRow) {
        arr = arr.concat(lastRow.reverse());
    }
    
    // Add rest of the eles
    for(let i = matrix.length - 1; i>=0; i--) {
        if(matrix[i].length) {
            arr.push(matrix[i].shift());
        }
    }
    return arr.concat(spiralOrder(matrix));
};
