

/*
Validate Binary Search Tree 

- Definition of a binary search tree:
Left is less than root, right is greater than root. 
True for all nodes, so we can make this a recursive solution

Redone for bloomb

*/

// Bloomb did again
var isValidBST = function(root, lower, upper) {
  // base case
  if(!root) return true;
  
  // return false things
  if(root.val >= upper || root.val <= lower) return false;
  
  
  if(root.left && root.left.val >= root.val) {
      return false
  }
  if(root.right && root.right.val <= root.val) {
      return false;
  }

  // recursive action
  return isValidBST(root.left, lower, root.val) && 
      isValidBST(root.right, root.val, upper);
}




// Ya I didn't understand this. Do me again. Sept/ bloomb:
var isValidBST = function(root, lower, upper) {
  // Base case: we've reached the end of the tree w/o returning F, so T
  if(!root) return true;
  
  if(root.val >= upper || root.val <= lower) return false;
  
  if(root.left && root.left.val >= root.val) {
      return false;
  }
  if(root.right && root.right.val <= root.val) {
      return false;
  }
  return isValidBST(root.left, lower, root.val) && isValidBST(root.right, root.val, upper)
};


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


