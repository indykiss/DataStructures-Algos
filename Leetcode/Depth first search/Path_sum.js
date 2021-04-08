
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

/*
DFS:
- have a sum tracking the nodes' vals up in a search 
- base case: if our sum === targetSum, and we're at 
the end of a branch, return true 
- recursive: return haspathsum(root.left, sum) || 
haspathsum(root.right, sum)

Edge:
- Guaranteed that a branch will have target?
- Multiple branches have target? Ok, just return true after 1st 
*/

// april practice
// march practice 
function hasPathSum(root, targetSum) {
    if(!root) return false;
    
    if(!root.left && !root.right && root.val === targetSum) {
        return true;
    }
    
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
}

var hasPathSum = function(root, sum) {
    if(!root) return false;
    
    //base
    if(root.val === sum && !root.left && !root.right) {
        return true; 
    }
    
    // recursive action
    return hasPathSum(root.left, sum - root.val) ||
        hasPathSum(root.right, sum - root.val);
        // only one has to be true, so ||
};



// Grok way to do it. Recursive. More intuitive 
var hasPathSum = function(root, sum) {

    if(!root) return false; 

    // If we find leaves, the path existed 
        // and the root.val === sum 
    if(root.val === sum && !root.left && !root.right) {
        return true;
    }

    // Recurse call to traverse left and right 
    // subtree.
    return hasPathSum(root.left, root.val + sum) ||
        hasPathSum(root.right, root.val + sum);
}


// LC, Oct. Bloomb/ FB
var hasPathSum = function(root, sum) {
    if(!root) return false;

    // recursive DFS 
    function dfs(root, pathSum) {
        if(!root) return false;
        // We've reached the end of the path and the total of this path
        // is equal to the sum
        if(pathSum + root.val === sum && !root.left && !root.right) {
            return true;
        }
        // DFS on the left and right, updating the path's sum
        return dfs(root.left, root.val + pathSum) || 
            dfs(root.right, root.val + pathSum);
    }
    // Run DFS on the root with an initialized 0 as pathsum
    return dfs(root, 0);
};


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

