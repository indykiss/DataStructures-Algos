
/*
Minimum Distance Between BST Nodes

Given the root of a Binary Search Tree (BST), return the 
minimum difference between the values of any two different nodes 
in the tree.
*/

var minDiffInBST = function(root) {
    let minDiff = Infinity, 
        prev = null; 
    
    // Inorder traversal
    function traverse(root) {
        if(!root) return; 
        
        traverse(root.left); 
        
        if(prev !== null) {            
            let diff = Math.abs(prev - root.val);
            minDiff = Math.min(diff, minDiff);
        }
        prev = root.val;
        
        traverse(root.right);
    }
    
    traverse(root);
    return minDiff;
};



