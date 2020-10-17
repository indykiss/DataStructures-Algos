
/*
A robot is located at the top-left corner of a m x n grid (marked 
    'Start' in the diagram below).

The robot can only move either down or right at any point in time. 
The robot is trying to reach the bottom-right corner of the grid 
(marked 'Finish' in the diagram below).

How many possible unique paths are there?

m = col 
n = row 

111
111
111

uniqPath: 6
Can ONLY go down or right

Must be on the grid 
*/

var uniquePaths = function(m, n) {
    if(m === 1 || n === 1) return 1
    
    const uniqPaths = [];
    
    // Create an array at each index 
    for(let i = 0; i <= m; i++) {
        uniqPaths[i] = [];
    }
    
    // Occupy the 1st ele as no paths
    uniqPaths[0][0] = 0;
    
    // Looping through grid, IDing the paths
    for(let row = 1; row <= m; row++) {
        for(let col = 1; col <= n; col++) {
            if(row === 1) {
                uniqPaths[row][col] = 1;
            } 
            if(col === 1) {
                uniqPaths[row][col] = 1;
            } 
            if(row !== 1 && col !== 1){
                // As we go, add the number of uniq paths from prev rows/cols
                uniqPaths[row][col] = uniqPaths[row][col-1] + uniqPaths[row-1][col];
            }
        }
    }
    
    // Return the value we have at the end 
    return uniqPaths[m][n]
};


