
/*
Path Sum

Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1

Return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.


Strategy:

- Since the general technique that's needed is to add all the nodes from root to leaf in a particular path, we would want to do a depth first search where we keep track of sum for each branch. Once we have a sum that is target, we're returning tree
- If we go through the entire tree without finding a sum, then we want to return false

*/



var hasPathSum = function(root, sum) {
    if(!root) return false;
    
    function dfs(node, total) {
        if(!node) return false;

        // If this new val gives us the sum and there's no more left or right children
        if(total + node.val === sum && !node.left && !node.right) {
            return true
        }
        // Do dfs on the left and right vals
        // The or statement will run the 1st option 
        // if it's truthy. IF it's falsy, it'll 
        // move to the 2nd option 
        return dfs(node.left, total + node.val) || dfs(node.right, total + node.val)
    }
    return dfs(root, 0)
}

