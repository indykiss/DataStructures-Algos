

/*
Closest Binary Search Tree Value

Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.

Note:

Given target value is a floating point.
You are guaranteed to have only one unique value in the BST that is closest to the target.
Example:

Input: root = [4,2,5,1,3], target = 3.714286

    4
   / \
  2   5
 / \
1   3

Output: 4
*/


var closestValue = function(root, target, min = null) {
    
    if(root === null) return min;
    
    if(min === null || Math.abs(target - root.val) < Math.abs(target - min)) {
        min = root.val;
    }
    
    if(target < root.val) {
        return closestValue(root.left, target, min);
    } else {
        return closestValue(root.right, target, min);
    }
    
};