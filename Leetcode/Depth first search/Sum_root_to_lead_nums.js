

/*
Sum Root to Leaf Numbers

Given a binary tree containing digits from 0-9 only, each 
root-to-leaf path could represent a number.

An example is the root-to-leaf path 1->2->3 which represents the num 123.

Find the total sum of all root-to-leaf numbers.

Note: A leaf is a node with no children.

Example:

Input: [1,2,3]
    1
   / \
  2   3
Output: 25


Strat:
- Vars: totalSum, 
- DFS: take the curr node val, add it into currPath's sum. 
Once we hit the end of one path, add into totalSum 
Traverse thru left and right subtrees 
- return totalSum

*/




var sumNumbers = function(root) {
    if(!root) return null;
    
    let totalSum = 0;
        
    dfs(root, "");
    
    return totalSum;
    
    function dfs(node, currSum) {
        currSum += node.val; 
        
        if(!node.left && !node.right) {
            totalSum += parseInt(currSum);
        }
        // traverse to left and right subtree
        if(node.left) dfs(node.left, currSum);
        if(node.right) dfs(node.right, currSum);
    }
};


