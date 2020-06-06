

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



// Algoexpert: 


// With recursion:
// Average: O(log n) time and O(log n) space
    // O(log n) because we loop and will probs find it before we reach end of the 
    // inputted tree
// Worst: O(n) time and O(n) space 
    // Worst time if the tree is just 1 long branch and we have to go through it all

function findClosestValueInBst(tree, target) {
	return findClosesteValueBSTHelper(tree, target, Infinity)
}

function findClosesteValueBSTHelper(tree, target, closest) {	
	// Base case for recursion
	if(tree === null) return closest;
			
	// Math to find the closest
	if(Math.abs(target - closest) > Math.abs(target - tree.value)) {
		closest = tree.value;
	}
	
	if(target < tree.value) {
		return findClosesteValueBSTHelper(tree.left, target, closest)
	} else if(target > tree.value) {
		return findClosesteValueBSTHelper(tree.right, target, closest)
	} else {
		return closest;
    }
}



// Without recurison:
// Saves space because ?? 
// Average time: O(log n) time and O(1) space 
    // O(log n) because we loop slightly and will probs find it before we reach end of the 
    // inputted tree
// Worst: O(n) time and O(1) space;
    // Worst time if the tree is just 1 long branch and we have to go through it all

function findClosestValueInBst(tree, target, closest = 0) {
    let current = tree; 

    while(current !== null) {
        // What's closest? 
        if(Math.abs(target - closest) > Math.abs(target - current.value)) {
            closest = current.value;
        } 
        if(target < current.value) {
            current = current.left; 
        } else if (target > current.value) {
            current = current.right; 
        } else {
            break;
        }
    }
    return closest; 
}





