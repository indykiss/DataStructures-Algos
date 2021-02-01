/*
Common child 
A string is said to be a child of B string if they match exactly or if any number of chars in B can be deleted to become A string. 

Given two strs of equal length, what's the longest str that can be constructed such that it is a child of both. 
S1.length === S2.length

Input: ABCD, ABDC => Children options are ABC and ABD
Can delete C from s1 and D from s2 to get children.

Strat:
- We want to create a matrix to track the possible results
    - So an array of arrays is what we'll have
- Loop through the 1st string
    - Set up the inner arrays of the matrix 
- Loop through the indices of 2nd str
    - If index is 0, the value of the matrix at that point is 0
    - Compare the value before the current one 
        - s1[i-1] and s2[j-1]
        - If they match, then we can set matrix[i-1][j-1] +1
            - +1 prevents us from counting char i again 
    - Else, set matrix as largest previous total of row/col

*/


// Complete the commonChild function below.
function commonChild(s1, s2) {
    const matrix = [];

    for(let row = 0; row <= s1.length; row++) {
        matrix[row] = [];
        for(let col = 0; col <= s2.length; col++) {
            if(row === 0 || col === 0) {
                matrix[row][col] = 0;
            } else if(s1[row - 1] === s2[col-1]) {
                matrix[row][col] = matrix[row-1][col-1] + 1;
            } else {
                matrix[row][col] = Math.max(matrix[row-1][col], matrix[row][col-1])
            }
        }
    }
    return matrix[s1.length][s2.length];
}
