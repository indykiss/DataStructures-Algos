

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



