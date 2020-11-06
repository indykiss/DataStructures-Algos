


// Given a binary tree, check if it is a valid binary search tree (BST).



// Two off by one mistakes. Warm up with this one again. 
// 10 mins. 

var isValidBST = function(root, lower, upper) {
  // base
  if(root === null) {
      return true; 
  }
  
  // disqualify if not within bounds
  if(root.val <= lower || root.val >= upper) {
      return false;
  }
  
  // recursive action 
  return isValidBST(root.left, lower, root.val) && 
      isValidBST(root.right, root.val, upper);
};





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