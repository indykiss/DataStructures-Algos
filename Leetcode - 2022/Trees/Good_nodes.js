

/*
Count Good Nodes in Binary Tree

Given a binary tree root, a node X in the tree is named good 
if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.

Strategy:
- Path => DFS, recursive stack to track 
- Count for overall # of good vals
- DFS function that holds max of path so far
    - max bc need to check if path has num > curr.val

*/
var goodNodes = function(root) {
    let count = 0;
    
    dfs(root, root.val);
    
    return count;
    
    function dfs(root, max) {
        if(root === null) return; 

        if(root.val >= max) {
            count++;
        }

        max = Math.max(max, root.val);

        return dfs(root.left, max) || dfs(root.right, max); 
    }
};







