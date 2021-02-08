

/*
Transpose Matrix

Given a matrix A, return the transpose of A.

The transpose of a matrix is the matrix flipped over it's 
main diagonal, switching the row and column indices of 
the matrix.

Input: [[1,2,3],
        [4,5,6],
        [7,8,9]]
        
Output: [[1,4,7],
         [2,5,8],
         [3,6,9]]

ith row becomes ith column 
2nd row -> 2nd col 

Strategy: O(c * r) time & space - # of cols times # of rows 

- Iterate thru matrix: 2 nested loops,
col then row. 
    - Save every COLUMN value (A[col][row]), add it into a 
    res array as rows. 
- Return the res arr 
*/


var transpose = function(A) {
    let newMatr = [];
  
    for(let i = 0; i < A[0].length; i++) {
        let currCol = [];
        
        for(let j = 0; j < A.length; j++) {
            currCol.push(A[j][i]);
        }
        newMatr.push(currCol);
    }
    return newMatr;
};






