


/*
Range Sum of BST

Given the root node of a binary search tree and two integers low and high, 
return the sum of values of all nodes with a value in the inclusive range [low, high].

Strategy:
- DFS to look at all nodes. Recursive stack
- Check if curr val is between low & high
    - If so, add to res
- Return int 

*/



var rangeSumBST = function(root, low, high) {
    
    let res = 0; 
    
    dfs(root, low, high); 
    
    return res; 
    
    function dfs(root, low, high) {
        if(!root) return; 
        
        if(root.val >= low && root.val <= high) {
            res += root.val;
        }
        
        dfs(root.left, low, high);
        dfs(root.right, low, high);
    }
};

