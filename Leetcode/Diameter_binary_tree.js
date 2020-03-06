// Diameter of a binary tree

// Given a binary tree, you need to compute the length of the 
// diameter of the tree. The diameter of a binary tree is the length 
// of the longest path between any two nodes in a tree. This path may 
// or may not pass through the root. Length of path is the # of edges.

// Assumptions: Perfect tree with each node having 2 children nodes 
// Edge cases: 1 node

// Do me again. Not clear on this
var diameterOfBinaryTree = function(root) {
    let height = 0; 
    dfs(root);
    
    function dfs(node) {
        if(!node) {return 0}
        // Do dfs on the left and right nodes of root
        const left = dfs(node.left);
        const right = dfs(node.right); 
        // Update height at each node 
        height = Math.max(height, left + right);
        // Point of DFS is to return the maximum that we've found 
        return Math.max(left, right) + 1
    }
    return height;
}
