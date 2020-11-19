

/*
Insert Node into BST

You are given the root node of a binary search tree (BST) and a value 
to insert into the tree. Return the root node of the BST after the 
insertion. It is guaranteed that the new value does not exist in the original BST.

Notice that there may exist multiple valid ways for the insertion, 
as long as the tree remains a BST after insertion. You can return any of them.


Balanced? No need to deal with. 
Empty tree? No deal with

1. Situation: Where we add a num at the leaf of a tree 
5 => if val < (not equal to) head, go left. Recursive 
    if > head, go right. Recursive 
    
      10 
    8    12
  6  9     14
5

ALWAYS move node into leaf slot. 

2. Situation: Where we add num in middle of tree branch
NO, don't need to worry about. 
      10 
    3    12
  2   4     14


*/

// Time: O(log n) => BST and inserting into the leaf slot 
// if balanced
// Time & Space: O(H) being height due to call stack 

var insertIntoBST = function(root, val) {
    if(!root) {
        return new TreeNode(val);
    }
    
    // recursive action 
    if(val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } 
    if(val > root.val) {
        root.right = insertIntoBST(root.right, val);
    }
    
    return root;
};

