

/*
Path Sum III

You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, 
but it must go downwards (traveling only from parent nodes to child nodes).


Example:

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11


Strat:
- DFS, bc paths. 
- Vars: matchingPaths
    Increment when we find a path match
- Add currnode to path 
    - When we add, find the sums of all sub-paths
    - HERE: increment if match found
- Traverse left and right subtree, tracking 
the sum of the curr path that we're on 
- Remove curr node from curr path before returning. 
This is backtracking? So we can go up the 
recursive call stack to look at the other paths 

Ya IDK
*/


// Grok/ LC. Oct, fb/ bloomb. Ya, idk what this is about
var pathSum = function(root, target) {
    let count = 0;
    
    dfs(root, target);
    
    return count;
    
    function dfs(node, sum) {
        if(!node) return 0;
        helper(node, sum);
        dfs(node.left, sum);
        dfs(node.right, sum);
    }
    
    function helper(node, currSum) {
        if(!node) return;
        currSum = currSum - node.val;
        
        // We found a path match
        if(currSum === 0) count++
        
        helper(node.left, currSum);
        helper(node.right, currSum);        
    }
      
};