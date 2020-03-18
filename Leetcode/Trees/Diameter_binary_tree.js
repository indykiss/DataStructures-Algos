// Diameter of a binary tree

// Given a binary tree, you need to compute the length of the 
// diameter of the tree. The diameter of a binary tree is the length 
// of the longest path between any two nodes in a tree. This path may 
// or may not pass through the root. Length of path is the # of edges.

// Assumptions: Perfect tree with each node having 2 children nodes 
// Edge cases: 1 node




// Attempt #3. better but do me again 
var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    dfs(root);
    return diameter;
    
    function dfs(node) {
        // dfs on left and right 
        if(!node) {return 0}
        const left = dfs(node.left);
        const right = dfs(node.right); 
        
        // Update diameter at every step
        // Check if last diameter or new left+right is bigger
        diameter = Math.max(diameter, left+right);
        // End goal is returning the biggest diameter we have
        return Math.max(left, right) + 1; 
    }
};



// Attempt #2
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


// Attempt #1
var diameterOfBinaryTree = function(root) {
    let diameter = 0; 
    dfs(root);
    return diameter;
    // Let's make a depth-first search transversal 
    function dfs(node, height) {
        // If there's no nodes, we return diameter of 0
        if(!node) return 0;
            // Node.left and node.right are built in functions for trees that 
            // print the nodes on the left and on the right. Left as in 
            // the children nodes that are left
        const left = dfs(node.left);
        const right = dfs(node.right);
        // Update diameter at every node 
        diameter = Math.max(diameter, left + right);
        // Update the largest number of edge so far
        return Math.max(left, right) + 1;
    }
};
