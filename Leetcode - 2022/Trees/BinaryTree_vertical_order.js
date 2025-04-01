

/*
Binary Tree Vertical Order Traversal

Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from left to right.


Strategy:
- Depth first search. -> Stack, recursive 
- As we traverse, we can save what "column" the number is in
We can say that root is at column 0, left is -1, right is +1 
    Hash: {key is column : value is an arr of the nums in the column}
- Just traverse as you go, saving that data in the hash 
- After traversing, we have a hash table with columns and arrs
- Sort the keys of the hash by asc order 
    [-4, -3, -2, -1, 0]
- Iterate thru the sorted keys, accessing the arr values, 
pushing the arrs into a new result arr
*/


// Close enough. Failed a couple tests but whatever, move on 
var verticalOrder = function(root) {
    let res = [], 
        columns = {}; // key is column, value is arr of vals
    
    dfs(root, 0);
    
    function dfs(root, column) {
        // base case
        if(!root) {
            return;
        }
        
        // add values to columns hash
        let currCol = column + 1;
        
        if(columns[currCol]) {
            columns[currCol].push(root.val);
        } else {
            columns[currCol] = [root.val];
        }
        
        if(root.left) dfs(root.left, column - 1);
        if(root.right) dfs(root.right, column + 1);
    }
    
    // should have:
    // {0: [3, 15], -1: [9], 1: [20], 2: [7]}
    
    let sortedKeys = Object.keys(columns).sort((a,b) => a-b); 
    // [-1, 0, 1, 2]
    
    for(let key of sortedKeys) {
        let arrOfVals = columns[key]; 
        
        res.push(arrOfVals);
    }
    
    return res;
};



