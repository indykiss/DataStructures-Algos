// Given a binary tree, determine if it is a valid binary search tree (BST).

var isValidBST = function(root, lowerBound, upperBound) {

    // Determine if the tree is a valid binary search tree
  
    // S1: If tree root doesn't exist, then yes BST
    if(!root) {
      return true;
    }
    
    //S2:  If treeRoot is not within the bounds, not BST
    if(root.val >= upperBound || root.val <= lowerBound) {
      return false;
    }
    
    // S3: Let's check if the left and right node are in the bounds
      // by recursing 
    return isValidBST(root.left, lowerBound, root.val)
      && isValidBST(root.right,  root.val, upperBound);
  }