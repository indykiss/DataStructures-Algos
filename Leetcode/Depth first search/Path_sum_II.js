

/*
Path Sum II

Given a binary tree and a sum, find all root-to-leaf paths where 
each path's sum equals the given sum.
Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
Return:

[
   [5,4,11,2],
   [5,8,4,5]
]

Strat:
- Vars: paths arr
- DFS through root. Track current sum. And subarr. 
- Base: if !root, return 
- Add node's val to sum. Add this node into subarr. 
- If we find a path, add the arr into the paths arr. 
- Traverse through left, if left exists. And right, if right exists. 
- Return paths. 

*/


/*
Strat: O(n) time and O(n) space, num of nodes 
- DFS to ID all possible paths 
- Base case, recursive action, trigger to add
a path to the res arr
- have arr to hold path.

- DFS as a helper function 
    - base: 
        - if we've hit the last left && currNode.val === target sum: add path arr to res arr 
    - pathArr.push(root.val); 
    - recursive: 
        - return dfs(root.left, targetSum - root.val) && dfs(root.right, targetSum - root.val, pathArr)
        
Edge:
- No paths = targetSum
- All paths = targetSum 
- Invalid input, if(!root) return []; 
- Unbalanced tree possible 
- Can any root.val be negative? No 
*/


// dfs recursive practice, march
function pathSum(root, targetSum) {
    if(!root) return [];
    let res = []; 
    
    dfs(root, [], 0); 
    
    return res;
    
    function dfs(root, currPath, pathSum) {
        if(root === null) return; 
        
        pathSum += root.val; 
        currPath.push(root.val); 
        
        if(!root.left && !root.right && pathSum === targetSum) {
            res.push(currPath); 
        }
        
        if(root.left) dfs(root.left, [...currPath], pathSum);
        if(root.right) dfs(root.right, [...currPath], pathSum);
    }
}


// recursive. Oct, fb/ bloomb 
var pathSum = function(root, target) {
    let paths = [];
    
    dfs(root, 0, []);
    
    return paths;
    
    function dfs(node, sum, arr) {
        // base case
        if(node === null) return;
        
        sum += node.val;
        arr.push(node.val);
        
        // we find a path
        if(!node.left && !node.right && target === sum) {
            paths.push(arr); 
        }
        // traverse left and right subtrees
        if(node.left) dfs(node.left, sum, [...arr]);
        if(node.right) dfs(node.right, sum, [...arr]);           
    }
}



