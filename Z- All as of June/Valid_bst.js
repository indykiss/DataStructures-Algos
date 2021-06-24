

/*
Validate Binary Search Tree 

- Definition of a binary search tree:
Left is less than root, right is greater than root. 
True for all nodes, so we can make this a recursive solution

Redone for bloomb

*/

// algoexpert pract
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function validateBst(tree, min = -Infinity, max = Infinity) {
    // base case: we have a bst
      if (tree == null) {
          return true;
      }
      // we don't have a bst:
      if(tree.value >= max) {
          return false;
      }
      if(tree.value < min) {
          return false;
      }
      // traverse tree until true or false
      return validateBst(tree.left, min, tree.value) 
          && validateBst(tree.right, tree.value, max);
  }
  

// Oct practice bloomb
var isValidBST = function(root, lower, upper) {
    
  // recursive base case. keep going unless we return false
  if(!root) return true;
  
  // ALSO make sure that the root is within the bounds
  if(root.val >= upper || root.val <= lower) return false
  
  
  // check that left root exists & that its less than root 
  if(root.left && root.left >= root.val) return false;
  
  
  // check that right of root exists & that its greater than root
  if(root.right && root.right <= root.val) return false;
  
  
  // recursive action 
  return isValidBST(root.left, lower, root.val) 
  && isValidBST(root.right, root.val, upper);  
};


var isValidBST = function(root, lower, upper) {
  // base case. we've traversed and never found a false
  if(!root) return true;

  // Make sure the curr node fits between lower and upper 
  if(root.val <= lower || root.val >= upper) {
      return false;
  }
  
  // Check that left isnt less than root and exists
  if(root.left >= root.val && root.left) {
      return false;
  }
      
  // Check that right isnt greater than root and exists
  if(root.right <= root.val && root.right) {
      return false;
  }
      
  return isValidBST(root.left, lower , root.val) 
      && isValidBST(root.right, root.val, upper);  
};


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


