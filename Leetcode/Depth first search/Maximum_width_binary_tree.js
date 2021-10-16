


/*
Maximum Width of Binary Tree

Given the root of a binary tree, return the maximum width of the given tree.

The maximum width of a tree is the maximum width among all levels.

The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes are also counted into the length calculation.

It is guaranteed that the answer will in the range of 32-bit signed integer.

https://leetcode.com/problems/maximum-width-of-binary-tree/

Strategy:
- DFS, to get to the leaf node
- Count the depth of the farthest leaf. Multiply that depth by 2 
- Return that val 
*/



// IDK. NOT WORKING. TIME COMPLEXITY ISSUE? 
var widthOfBinaryTree = function(root) {
    let lvls = {}, 
        maxWidth = 0; 
    
    dfs(root, 0, 0);
    
    return maxWidth; 
    
    function dfs(root, depth, col) {
        if(!root) return; 
        
        if(lvls[depth] == undefined) {
            lvls[depth] = col; 
        }
        
        maxWidth = Math.max(maxWidth, (col - lvls[depth] + 1) | 0)
        
        dfs(root.left, depth+1, col*2);
        dfs(root.right, depth+1, (col*2) +1);
    }
    
};

