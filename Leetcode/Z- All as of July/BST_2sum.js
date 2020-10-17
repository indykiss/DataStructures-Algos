/*
Two Sum IV - Input is a BST

Given a Binary Search Tree and a target number, r
eturn true if there exist two elements in the BST 
such that their sum is equal to the given target.

Example 1:

Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

Output: True
*/



// Attempt 2
// Did ok but off
var findTarget = function(root, k, seen = []) {        
    if(root === null) return false;     
        
    let left = root.left; 
    let right = root.right; 
    let partner = k - root.val;
    
    if(seen.includes(partner)) {
        return true;
    }
    
    seen.push(root.val);
    
    return findTarget(left, k, seen) || findTarget(right, k, seen)
};



// Attempt 1
var findTarget = function(root, k, seen = []) {

    // Base case
    if(root === null) return false; 
    
    let left = root.left;
    let right = root.right; 
    
    if(seen.includes(k - root.val)) {
        return true; 
    }
    seen.push(root.val);
    
    return findTarget(left, k, seen) || findTarget(right, k, seen)   
};